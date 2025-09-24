const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Set up markdown processor
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });

  // Add markdown filter
  eleventyConfig.addFilter("markdown", function(content) {
    return md.render(content);
  });
  // Copy static files to output
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("public/**/*");

  // Copy README.md to src directory for processing
  eleventyConfig.addPassthroughCopy({"README.md": "README.md"});

  // Add readFile filter
  eleventyConfig.addFilter("readFile", function(filename) {
    const filePath = path.join(process.cwd(), filename);
    return fs.readFileSync(filePath, 'utf-8');
  });

  // Set directories
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};