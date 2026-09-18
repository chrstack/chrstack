import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-${project.slug}`} aria-hidden="true">
      <div className="visual-topline"><span>{project.index}</span><i /></div>
      {project.slug === "curriculo-pronto" && (
        <div className="resume-preview">
          <div className="resume-sidebar"><b>CL</b><span/><span/><span/></div>
          <div className="resume-body"><strong>Christian Lima</strong><small>Desenvolvedor de produtos digitais</small><i/><i/><i/><div><span/><span/><span/></div></div>
        </div>
      )}
      {project.slug === "settz" && (
        <div className="settz-preview">
          <div className="settz-score"><span>SETTZ SCORE</span><strong>84</strong><small>/ 100</small></div>
          <div className="settz-lines"><i/><i/><i/><b>Comparação inteligente</b></div>
        </div>
      )}
      {project.slug === "chrstack-tickets" && (
        <div className="tickets-preview">
          <div className="tickets-sidebar"><b>CT</b><i/><i/><i/></div>
          <div className="tickets-panel">
            <div className="tickets-header"><span>Visão geral</span><small>Discord conectado</small></div>
            <div className="tickets-metrics"><span><small>ABERTOS</small><b>12</b></span><span><small>ENCERRADOS</small><b>48</b></span><span><small>AVALIAÇÃO</small><b>4.9</b></span></div>
            <div className="tickets-list"><i/><i/><i/></div>
          </div>
        </div>
      )}
      {project.slug === "automacao-sisreg" && (
        <div className="automation-preview">
          <div><span>01</span><b>Pesquisar</b></div><i/><div><span>02</span><b>Comparar</b></div><i/><div><span>03</span><b>Validar</b></div>
        </div>
      )}
      {project.slug === "analise-dados-dash-sgu" && (
        <div className="data-preview">
          <div className="data-chart"><i/><i/><i/><i/><i/></div>
          <div className="data-stats"><span><small>REGISTROS</small><b>Dados</b></span><span><small>STATUS</small><b>Validado</b></span></div>
        </div>
      )}
      <p className="visual-caption">{project.eyebrow}</p>
    </div>
  );
}
