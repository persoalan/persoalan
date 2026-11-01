
export default function (eleventyConfig) {
  // Salin halaman dan aset website sedia ada
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("kesihatan");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  // Abaikan fail dan folder sistem
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("netlify/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("_site/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
}
