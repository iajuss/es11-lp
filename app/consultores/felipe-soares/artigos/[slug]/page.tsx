import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, consultant, getArticle } from "../../../../lib/felipe";
import { absoluteUrl, siteUrl } from "../../../../lib/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};

  const title = `${article.title} | Felipe Soares | ES11 Capital`;
  const path = `/consultores/felipe-soares/artigos/${article.slug}`;
  const image = absoluteUrl(article.image);

  return {
    title,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: { type: "article", title, description: article.excerpt, url: path, publishedTime: article.publishedAt, modifiedTime: article.updatedAt, authors: [consultant.name], images: [{ url: image, alt: article.imageAlt }] },
    twitter: { card: "summary_large_image", title, description: article.excerpt, images: [image] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const path = `/consultores/felipe-soares/artigos/${article.slug}`;
  const articleUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(article.image);
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "pt-BR",
    image: [imageUrl],
    author: { "@type": "Person", name: consultant.name, url: siteUrl },
    publisher: { "@type": "Organization", name: "ES11 Capital", url: "https://www.es11capital.com.br/", logo: { "@type": "ImageObject", url: absoluteUrl("/es11-logo.png") } },
  };

  return <main className="reader-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><header className="reader-header"><a href="/"><img src="/es11-logo.png" alt="ES11 Capital" /></a><a href="/consultores/felipe-soares/artigos">← Todos os conteúdos</a></header><article className="single-article"><small>{article.category} · Felipe Soares · Publicado em {new Date(article.publishedAt).toLocaleDateString("pt-BR")} · Atualizado em {new Date(article.updatedAt).toLocaleDateString("pt-BR")} · {article.readingTime}</small><h1>{article.title}</h1><p className="article-subtitle">{article.subtitle}</p><img className="article-featured" src={article.image} alt={article.imageAlt} /><div className="article-rule" />{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<aside><img src={consultant.image} alt="Felipe Soares" /><div><strong>Sobre Felipe Soares</strong><span>Sócio e Consultor Financeiro da ES11 Capital. Atua com estratégias patrimoniais para investidores, empresários, profissionais liberais e famílias.</span><a data-article-cta="true" data-position="article" href={consultant.whatsapp} target="_blank" rel="noreferrer">Conversar com Felipe →</a></div></aside><section className="related"><h2>Conteúdos relacionados</h2>{related.map((item) => <a key={item.slug} href={`/consultores/felipe-soares/artigos/${item.slug}`}>{item.title} →</a>)}</section><p className="article-disclaimer">A análise realizada pela ES11 Capital é personalizada e consultiva. Não há promessa de prazo de contemplação, rentabilidade ou resultado financeiro.</p></article></main>;
}
