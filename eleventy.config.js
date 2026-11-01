
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("kesihatan");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("netlify/**");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
}
