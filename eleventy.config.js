const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Renders a front-matter string (e.g. a ledger prompt) as inline Markdown:
  // links and `code` work, raw HTML stays escaped, no <p> wrapper.
  const mdInline = markdownIt({ html: false });
  eleventyConfig.addFilter("mdInline", (s) => mdInline.renderInline(s || ""));
  // Archives and site furniture, copied to the output byte-for-byte.
  eleventyConfig.addPassthroughCopy("src/posts");
  eleventyConfig.addPassthroughCopy("src/microblog");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/activity_pub");
  eleventyConfig.addPassthroughCopy("src/icon.png");
  eleventyConfig.addPassthroughCopy("src/icon.svg");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  // "July 25, 2026"
  eleventyConfig.addFilter("longDate", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  // "July 2026"
  eleventyConfig.addFilter("monthYear", (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    })
  );

  // Sum a numeric front-matter field across the ledger collection.
  eleventyConfig.addFilter("total", (entries, key) =>
    entries.reduce((sum, e) => sum + (e.data[key] ?? 0), 0)
  );

  eleventyConfig.addGlobalData("buildDate", () => new Date());

  return {
    // Only .njk and .md are processed as templates; the archived .html files
    // under src/posts/ and src/microblog/ go through passthrough copy only.
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
