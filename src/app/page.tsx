import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { technologies, socials } from "@/data/site";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return <main id="conteudo">
    <section className="hero" id="inicio"><div className="container hero-inner">
      <div className="hero-copy"><p className="kicker"><span /> Desenvolvimento & produto digital</p><h1>Ideias que viram<br/><em>produtos.</em></h1><p className="hero-text">Desenvolvendo projetos digitais que transformam ideias em soluções reais.</p><div className="hero-actions"><Link href="/projetos" className="button primary">Ver projetos <ArrowDownRight size={18} /></Link><a href="https://github.com/chrstack" target="_blank" rel="noreferrer" className="button secondary">GitHub <ArrowUpRight size={18} /></a></div></div>
      <div className="hero-mark" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><Image src="/brand/symbol.png" alt="" width={250} height={250} priority /><span className="coordinate c1">09°40&apos;S</span><span className="coordinate c2">35°44&apos;W</span></div>
      <div className="scroll-hint"><span>Explore</span><i /></div>
    </div></section>
    <section className="section projects-section" id="projetos"><div className="container"><SectionHeading number="01" title="Projetos em destaque" intro="Uma seleção dos produtos que estou construindo."/><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><Link href="/projetos" className="all-projects">Ver todos os projetos <ArrowUpRight size={18}/></Link></div></section>
    <section className="section about-section" id="sobre"><div className="container about-grid"><SectionHeading number="02" title="Sobre"/><div className="about-copy"><p className="lead">Sou Christian Lima, desenvolvedor e criador do <strong>chrstack<span className="dot">.</span></strong></p><p>Transformo ideias em projetos digitais funcionais, explorando desenvolvimento web, produto e formas mais claras de resolver problemas.</p><p>chrstack é a identidade sob a qual construo, compartilho e evoluo esses produtos.</p><div className="about-line"><span>Christian Lima</span><i/><span>Maceió, AL · Brasil</span></div></div></div></section>
    <section className="section stack-section" id="stack"><div className="container"><SectionHeading number="03" title="Tecnologias" intro="Ferramentas que utilizo nos projetos."/><div className="stack-list">{technologies.map((tech, index) => <div key={tech}><span>{String(index + 1).padStart(2,"0")}</span><strong>{tech}</strong><i>↗</i></div>)}</div></div></section>
    <section className="section contact-section" id="contato"><div className="container contact-card"><p className="kicker"><span/> Disponível para novas conexões</p><h2>Vamos construir<br/>algo <em>relevante?</em></h2><p>Tem uma ideia, projeto ou quer trocar uma ideia sobre tecnologia? Me encontre nas redes.</p><div className="contact-links">{socials.slice(0,3).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={18}/></a>)}</div></div></section>
  </main>;
}
