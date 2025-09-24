const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy("public/**/*");

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