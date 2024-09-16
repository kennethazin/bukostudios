import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://witespacestudios.com",
      lastModified: new Date(),
    },
    {
      url: "https://witespacestudios.com/info",
      lastModified: new Date(),
    },
    {
      url: "https://witespacestudios.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://witespacestudios.com/work",
      lastModified: new Date(),
    },
    {
      url: "https://witespacestudios.com/inquiry",
      lastModified: new Date(),
    },
    {
      url: "https://witespacestudios.com/blog",
      lastModified: new Date(),
    },
  ];
}
