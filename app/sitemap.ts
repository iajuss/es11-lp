import type { MetadataRoute } from "next";
import { articles } from "./lib/felipe";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.es11capital.com.br";
  return [{ url: `${base}/consultores/felipe-soares`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }, { url: `${base}/consultores/felipe-soares/artigos`, lastModified: new Date(), changeFrequency: "weekly", priority: .8 }, ...articles.map((article) => ({ url: `${base}/consultores/felipe-soares/artigos/${article.slug}`, lastModified: new Date(article.updatedAt), changeFrequency: "monthly" as const, priority: .7 }))];
}
