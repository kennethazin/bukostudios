import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.witespacestudios.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/info",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/work",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/inquiry",
      lastModified: new Date(),
    },
    {
      url: "https://www.witespacestudios.com/blog",
      lastModified: new Date(),
    },
  ];
}
