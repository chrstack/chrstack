import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const article = getArticle((await params).slug); return article ? { title: article.title, description: article.description } : {}; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug); if (!article) notFound();
  return <main id="conteudo" className="article-page"><article className="container article-layout"><Link href="/artigos" className="back-link"><ArrowLeft size={17}/> Todos os artigos</Link><header className="article-header"><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p>{article.description}</p><div><span>{article.publishedAt}</span><span>{article.readingTime} de leitura</span></div></header><div className="article-body">{article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</section>)}</div></article></main>;
}
