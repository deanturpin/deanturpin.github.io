const fs = require('fs');
const https = require('https');

const GITHUB_USERNAME = 'deanturpin';
const MAX_REPOS = 10;

// Function to make GitHub API requests
function fetchGitHubAPI(url) {
  return new Promise((resolve, reject) => {
    const headers = {
      'User-Agent': 'GitHub-Actions',
      'Accept': 'application/vnd.github.v3+json'
    };

    // Only add authorization if token is available
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const options = { headers };

    https.get(url, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API returned status ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function getTopRepos() {
  console.log(`Fetching repositories for ${GITHUB_USERNAME}...`);

  // Fetch all repos, sorted by most recently updated
  const repos = await fetchGitHubAPI(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  );

  // Filter and process repos
  const filtered = repos
    .filter(repo => !repo.fork) // Exclude forks
    .filter(repo => !repo.archived) // Exclude archived repos
    .slice(0, MAX_REPOS) // Take top 10
    .map(repo => ({
      name: repo.name,
      description: repo.description || 'No description provided',
      url: repo.homepage || repo.html_url,
      updated: repo.updated_at
    }));

  console.log(`Found ${filtered.length} active repositories`);
  return filtered;
}

function generateMarkdownTable(repos) {
  const timestamp = new Date().toISOString().split('T')[0];

  let markdown = '## Active development\n\n';
  markdown += `<!-- Auto-generated on ${timestamp} by update-active-dev.js -->\n\n`;
  markdown += '| Title | Description |\n';
  markdown += '|-|-|\n';

  for (const repo of repos) {
    const title = `[${repo.name}](${repo.url})`;
    markdown += `| ${title} | ${repo.description} |\n`;
  }

  return markdown;
}

function updateReadme(newSection) {
  const readmePath = 'README.md';
  const content = fs.readFileSync(readmePath, 'utf8');

  // Find the Active development section and replace it
  // Match from "## Active development" to the next "##" heading
  const regex = /## Active development[\s\S]*?(?=\n## )/;

  if (!regex.test(content)) {
    console.error('Could not find Active development section in README.md');
    process.exit(1);
  }

  const updatedContent = content.replace(regex, newSection);
  fs.writeFileSync(readmePath, updatedContent, 'utf8');

  console.log('README.md updated successfully');
}

async function main() {
  try {
    const repos = await getTopRepos();
    const markdownTable = generateMarkdownTable(repos);
    updateReadme(markdownTable);
  } catch (error) {
    console.error('Error updating README:', error);
    process.exit(1);
  }
}

main();
