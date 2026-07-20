import { articles } from "../../../lib/felipe";

export default function ArticlesPage() {
  return <main className="reader-page"><header className="reader-header"><a href="/consultores/felipe-soares"><img src="/es11-logo.png" alt="ES11 Capital" /></a><a href="/consultores/felipe-soares">← Voltar ao perfil de Felipe</a></header><section className="reader-hero"><p>CONTEÚDOS DE FELIPE SOARES</p><h1>Estratégia começa com <em>informação clara.</em></h1><span>Planejamento patrimonial, liquidez, aquisições e decisões de longo prazo.</span></section><section className="reader-list">{articles.map((article) => <article key={article.slug}><img src={article.image} alt={article.imageAlt} /><small>{article.category} · {new Date(article.publishedAt).toLocaleDateString("pt-BR")} · {article.readingTime}</small><h2>{article.title}</h2><p>{article.excerpt}</p><a data-article-cta="true" href={`/consultores/felipe-soares/artigos/${article.slug}`}>Ler artigo →</a></article>)}</section></main>;
}
