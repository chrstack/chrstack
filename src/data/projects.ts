export type Project = {
  slug: "curriculo-pronto" | "settz";
  index: string;
  name: string;
  label: string;
  shortDescription: string;
  description: string;
  status: string;
  eyebrow: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  url: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "curriculo-pronto",
    index: "01",
    name: "Currículo Pronto",
    label: "CP",
    shortDescription: "Crie seu currículo profissional de forma simples, pelo celular ou computador.",
    description: "Uma experiência guiada e acessível para transformar informações profissionais em um currículo pronto para usar.",
    status: "Produto online",
    eyebrow: "Carreira · Produtividade",
    problem: "Criar um currículo claro e bem estruturado ainda exige familiaridade com editores, formatação e decisões que podem travar quem só precisa se apresentar melhor.",
    solution: "O Currículo Pronto organiza a criação em um fluxo direto, pensado para funcionar bem no celular e no computador, até a geração do documento.",
    features: ["Criação guiada", "Experiência mobile e desktop", "Geração do currículo em PDF", "Modelos e personalização"],
    technologies: ["Produto web", "Interface responsiva", "PDF"],
    url: "https://curriculo-pronto.chrstack.chatgpt.site",
  },
  {
    slug: "settz",
    index: "02",
    name: "SETTZ",
    label: "S",
    shortDescription: "Pesquisa e contexto para ajudar você a avaliar melhor uma compra.",
    description: "Um produto em desenvolvimento para comparar referências, entender preços e tomar decisões de compra com mais contexto.",
    status: "Em desenvolvimento",
    eyebrow: "Compras · Pesquisa",
    problem: "Comparar uma compra exige navegar por várias fontes, avaliar preços e separar sinais úteis de informações soltas.",
    solution: "O SETTZ reúne contexto de pesquisa e organiza os sinais da oferta para tornar a decisão mais clara, com uma visão multiplataforma em evolução.",
    features: ["Pesquisa por produto ou URL", "Comparação de referências", "SETTZ Score explicável", "Contexto para decisão de compra"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    url: "https://settz.vercel.app",
    github: "https://github.com/chrstack/settz",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
