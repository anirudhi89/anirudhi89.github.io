const dotenv = require("dotenv");

module.exports = function (eleventyConfig) {
  dotenv.config();
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

  eleventyConfig.addGlobalData(
    "staticformsApiKey",
    process.env.STATICFORMS_API_KEY || ""
  );
  eleventyConfig.addGlobalData("siteUrl", process.env.SITE_URL || "");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
};
