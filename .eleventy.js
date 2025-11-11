module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('css');
  eleventyConfig.addWatchTarget('js');
  eleventyConfig.addWatchTarget('images');
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByTag("products").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });
};