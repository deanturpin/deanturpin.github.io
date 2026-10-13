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

async function getWorkflowStatus(fullName) {
  try {
    const runs = await fetchGitHubAPI(
      `https://api.github.com/repos/${fullName}/actions/runs?per_page=1&status=completed`
    );

    if (runs.workflow_runs && runs.workflow_runs.length > 0) {
      const latestRun = runs.workflow_runs[0];
      return latestRun.conclusion; // success, failure, cancelled, etc.
    }
    return null; // No workflows
  } catch (error) {
    console.log(`No workflow status for ${fullName}`);
    return null;
  }
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
    .slice(0, MAX_REPOS); // Take top 10

  // Fetch workflow status for each repo
  const enriched = await Promise.all(
    filtered.map(async repo => ({
      name: repo.name,
      description: repo.description || 'No description provided',
      url: repo.homepage || repo.html_url,
      githubUrl: repo.html_url,
      fullName: repo.full_name,
      updated: repo.updated_at,
      workflowStatus: await getWorkflowStatus(repo.full_name)
    }))
  );

  console.log(`Found ${enriched.length} active repositories`);
  return enriched;
}

// The home page renders this file; relative times are worked out in the
// browser so they stay true between daily builds
const DATA_PATH = 'src/_data/activeDev.json';

function toData(repos) {
  return repos.map(repo => ({
    name: repo.name,
    description: repo.description.trim(),
    url: repo.url,
    githubUrl: repo.githubUrl,
    updated: new Date(repo.updated).toISOString(),
    status: repo.workflowStatus || 'none'
  }));
}

async function main() {
  try {
    const repos = await getTopRepos();
    fs.writeFileSync(DATA_PATH, JSON.stringify(toData(repos), null, 2) + '\n', 'utf8');
    console.log(`${DATA_PATH} updated successfully`);
  } catch (error) {
    console.error('Error updating active development data:', error);
    process.exit(1);
  }
}

main();
