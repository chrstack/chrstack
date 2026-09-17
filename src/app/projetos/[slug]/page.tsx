import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug); if (!project) return {};
  return { title: project.name, description: project.shortDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug); if (!project) notFound();
  return <main id="conteudo" className="project-page"><div className="container">
    <Link href="/projetos" className="back-link"><ArrowLeft size={17}/> Todos os projetos</Link>
    <header className="project-hero"><div><div className="project-meta"><span>{project.index}</span><span className={`status status-${project.statusTone}`}><i/>{project.status}</span></div><p className="eyebrow">{project.eyebrow}</p><h1>{project.name}</h1><p>{project.description}</p>{(project.url || project.github) && <div className="project-actions">{project.url && <a className="button primary" href={project.url} target="_blank" rel="noreferrer">Acessar produto <ArrowUpRight size={18}/></a>}{project.github && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer">Ver no GitHub <ArrowUpRight size={18}/></a>}</div>}</div><ProjectVisual project={project} /></header>
    <div className="case-grid"><section><span className="case-number">01</span><h2>O problema</h2><p>{project.problem}</p></section><section><span className="case-number">02</span><h2>A solução</h2><p>{project.solution}</p></section></div>
    <section className="features"><div><span className="case-number">03</span><h2>O que o produto oferece</h2><p>Recursos centrais da experiência atual e da proposta do produto.</p></div><ul>{project.features.map((feature) => <li key={feature}><Check size={17}/>{feature}</li>)}</ul></section>
    <section className="case-process"><div><span className="case-number">04</span><h2>Decisões de produto</h2><p>Escolhas que orientam a experiência e ajudam o produto a resolver o problema com clareza.</p></div><ol>{project.decisions.map((decision, index) => <li key={decision}><span>{String(index + 1).padStart(2, "0")}</span><p>{decision}</p></li>)}</ol></section>
    <div className="case-grid case-state"><section><span className="case-number">05</span><h2>Impacto</h2><p>{project.impact}</p></section><section><span className="case-number">06</span><h2>Estado atual</h2><p>{project.currentState}</p></section></div>
    <div className="case-next"><span className="case-number">07</span><div><h2>Próximo passo</h2><p>{project.nextStep}</p></div></div>
    <section className="project-stack"><span className="case-number">08</span><h2>Tecnologias e base</h2><div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
  </div></main>;
}
