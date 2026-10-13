module.exports = function(eleventyConfig) {
  // W3C date for sitemap lastmod stamps
  eleventyConfig.addFilter("isoDate", function(value) {
    return new Date(value || Date.now()).toISOString().slice(0, 10);
  });

  // Readable date for the build-time fallback before the browser takes over
  eleventyConfig.addFilter("shortDate", function(value) {
    return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  });

  // Copy static files to output
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/script.js");
  eleventyConfig.addPassthroughCopy({"public": "."});

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
