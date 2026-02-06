module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addFilter("formatDate", function (date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  });

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByTag("blog").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
