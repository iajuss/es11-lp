import type { MetadataRoute } from "next";
import { articles } from "./lib/felipe";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastUpdated = new Date("2026-07-22");
  return [
    { url: absoluteUrl("/"), lastModified: siteLastUpdated, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/consultores/felipe-soares/artigos"), lastModified: siteLastUpdated, changeFrequency: "weekly", priority: .8 },
    ...articles.map((article) => ({ url: absoluteUrl(`/consultores/felipe-soares/artigos/${article.slug}`), lastModified: new Date(article.updatedAt), changeFrequency: "monthly" as const, priority: .7 })),
  ];
}
