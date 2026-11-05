
export default {
  layout: "category.njk",
  tags: ["kategori"],

  eleventyComputed: {
    permalink: (data) => {
      const name = data.name || "";

      // Kekalkan halaman Kesihatan sedia ada
      if (name.toLowerCase() === "kesihatan") {
        return false;
      }

      const slug = data.page.fileSlug;

      return `/${slug}/index.html`;
    }
  }
};
