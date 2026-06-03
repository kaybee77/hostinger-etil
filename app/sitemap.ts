import type { MetadataRoute } from "next";

const siteUrl = "https://www.exceltradeint.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/general",
    "/vehicles",
    "/team",
    "/contact",
    "/privacy",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
