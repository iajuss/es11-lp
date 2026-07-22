import type { Metadata } from "next";
import { articles } from "../../../lib/felipe";
import { absoluteUrl } from "../../../lib/site";

const title = "Conteúdos de planejamento patrimonial | Felipe Soares | ES11 Capital";
const description = "Conteúdos de Felipe Soares sobre planejamento patrimonial, liquidez, aquisições estratégicas e decisões de longo prazo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/consultores/felipe-soares/artigos" },
  openGraph: { title, description, type: "website", url: "/consultores/felipe-soares/artigos", images: [{ url: absoluteUrl("/og-whatsapp-soft.png?v=20260721-4"), width: 1200, height: 1200, alt: "Conteúdos de Felipe Soares | ES11 Capital" }] },
  twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/og-whatsapp-soft.png?v=20260721-4")] },
};

export default function ArticlesPage() {
  return <main className="reader-page"><header className="reader-header"><a href="/"><img src="/es11-logo.png" alt="ES11 Capital" /></a><a href="/">← Voltar ao perfil de Felipe</a></header><section className="reader-hero"><p>CONTEÚDOS DE FELIPE SOARES</p><h1>Estratégia começa com <em>informação clara.</em></h1><span>Planejamento patrimonial, liquidez, aquisições e decisões de longo prazo.</span></section><section className="reader-list">{articles.map((article) => <article key={article.slug}><img src={article.image} alt={article.imageAlt} /><small>{article.category} · {new Date(article.publishedAt).toLocaleDateString("pt-BR")} · {article.readingTime}</small><h2>{article.title}</h2><p>{article.excerpt}</p><a data-article-cta="true" href={`/consultores/felipe-soares/artigos/${article.slug}`}>Ler artigo →</a></article>)}</section></main>;
}
