import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Artigos", description: "Notas sobre desenvolvimento, automação, dados e construção de produtos digitais." };

export default function ArticlesPage() {
  return <main id="conteudo" className="inner-page"><div className="container"><header className="page-header"><p className="kicker"><span/> Notas técnicas</p><h1>Artigos</h1><p>Aprendizados de projetos reais, decisões técnicas e formas mais claras de resolver problemas.</p></header><div className="article-list">{articles.map((article, index) => <article key={article.slug} className="article-card"><span>{String(index + 1).padStart(2,"0")}</span><div><p className="eyebrow">{article.category} · {article.readingTime}</p><h2>{article.title}</h2><p>{article.description}</p></div><Link href={`/artigos/${article.slug}`} aria-label={`Ler ${article.title}`}><ArrowUpRight/></Link></article>)}</div></div></main>;
}
