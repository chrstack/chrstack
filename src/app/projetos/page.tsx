import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projetos", description: "Produtos digitais construídos por Christian Lima sob a identidade chrstack." };

export default function ProjectsPage() {
  return <main id="conteudo" className="inner-page"><div className="container"><header className="page-header"><p className="kicker"><span/> Trabalho selecionado</p><h1>Projetos</h1><p>Produtos digitais construídos para transformar ideias em experiências úteis e reais.</p></header><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div></div></main>;
}
