import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return <article className={`project-card project-${project.slug}`}>
    <ProjectVisual project={project} />
    <div className="project-content">
      <div className="project-meta"><span>{project.index}</span><span className={`status status-${project.statusTone}`}><i />{project.status}</span></div>
      <p className="eyebrow">{project.eyebrow}</p>
      <h3>{project.name}</h3>
      <p>{project.shortDescription}</p>
      <p className="project-impact"><strong>Impacto</strong>{project.impact}</p>
      <div className="tech-row">{project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
      <Link href={`/projetos/${project.slug}`} className="text-link">Ver projeto <ArrowUpRight size={17} /></Link>
    </div>
  </article>;
}
