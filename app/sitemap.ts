import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.witespacestudios.com/";
  
  const routes = [
    "",  // home page
    "404",
    "info",
    "about",
    "work",
    "inquiry",
    "blog"
  ];

  // Map routes to full sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`.replace(/\/$/, ""),  
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));
}