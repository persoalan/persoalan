
export default function (eleventyConfig) {
  // Salin halaman website sedia ada
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("admin");

  // Fail SEO
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // Abaikan folder sistem
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("netlify/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["md", "njk"]
  };
}
