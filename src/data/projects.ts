export type Project = {
  slug: "curriculo-pronto" | "chrstack-tickets" | "settz" | "automacao-sisreg" | "analise-dados-dash-sgu";
  index: string;
  name: string;
  label: string;
  shortDescription: string;
  description: string;
  status: string;
  statusTone: "online" | "progress" | "case";
  eyebrow: string;
  problem: string;
  solution: string;
  decisions: string[];
  currentState: string;
  nextStep: string;
  impact: string;
  features: string[];
  technologies: string[];
  url?: string;
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
    statusTone: "online",
    eyebrow: "Full Stack · SaaS",
    problem: "Criar um currículo claro e bem estruturado ainda exige familiaridade com editores, formatação e decisões que podem travar quem só precisa se apresentar melhor.",
    solution: "O Currículo Pronto organiza a criação em um fluxo direto, pensado para funcionar bem no celular e no computador, até a geração do documento.",
    decisions: ["Conduzir a pessoa por etapas, em vez de começar com uma tela vazia", "Priorizar o uso pelo celular sem limitar a experiência no computador", "Transformar os dados preenchidos em um documento pronto para download", "Manter linguagem e navegação acessíveis para diferentes níveis de familiaridade digital"],
    currentState: "Produto publicado com uma experiência completa de criação guiada e geração do currículo em PDF.",
    nextStep: "Continuar refinando os modelos, a personalização e os recursos que ajudam a direcionar o currículo para oportunidades específicas.",
    impact: "Transforma o preenchimento de informações em um currículo estruturado e pronto para download, inclusive pelo celular.",
    features: ["Criação guiada", "Experiência mobile e desktop", "Geração do currículo em PDF", "Modelos e personalização"],
    technologies: ["Produto web", "Interface responsiva", "PDF"],
    url: "https://curriculo-pronto.chrstack.chatgpt.site",
  },
  {
    slug: "chrstack-tickets",
    index: "02",
    name: "Chrstack Tickets",
    label: "CT",
    shortDescription: "Plataforma de atendimento para Discord com bot, dashboard, transcripts, avaliações e licenciamento.",
    description: "Um sistema completo para centralizar e organizar o suporte em comunidades Discord, conectando bot, painel administrativo, autenticação, banco de dados e uma estrutura SaaS multi-servidor.",
    status: "MVP funcional",
    statusTone: "progress",
    eyebrow: "Backend · Bot · SaaS",
    problem: "Equipes de comunidades no Discord precisam organizar solicitações privadas, distribuir atendimentos, preservar o histórico e acompanhar a qualidade do suporte sem depender de processos manuais ou informações espalhadas.",
    solution: "O Chrstack Tickets integra um bot Discord a um dashboard web. Cada servidor configura sua operação, abre tickets por setor, controla a equipe, gera transcripts e acompanha histórico, avaliações e indicadores em uma experiência centralizada.",
    decisions: ["Separar os atendimentos por setor e gerar um protocolo automático para cada ticket", "Manter canais privados com permissões específicas para equipe e participantes", "Usar Discord OAuth2 para mostrar ao administrador somente servidores que ele pode gerenciar", "Projetar desde o MVP uma arquitetura multi-servidor com planos e licenças", "Preservar o histórico com transcripts HTML, registros de eventos e avaliações pós-atendimento"],
    currentState: "MVP funcional com criação, gerenciamento e encerramento de tickets, transcripts, avaliações, dashboard, múltiplos servidores e licenciamento já operacionais.",
    nextStep: "Implantar bot e dashboard em infraestrutura de produção 24/7 e evoluir o fluxo comercial com automação de pagamentos.",
    impact: "Transforma o suporte do Discord em um fluxo rastreável, privado e mensurável, reunindo operação e gestão em uma única plataforma.",
    features: ["Painéis de tickets por setor", "Protocolo e numeração automática", "Assumir e transferir atendimentos", "Controle de participantes e permissões", "Transcripts automáticos em HTML", "Avaliação de 1 a 5 estrelas", "Dashboard com histórico e estatísticas", "Login com Discord OAuth2", "Gerenciamento de múltiplos servidores", "Planos Free, Pro e Business", "Licenças com validade e limite de servidores"],
    technologies: ["Python", "discord.py", "Flask", "SQLite", "Discord OAuth2", "HTML", "CSS"],
  },
  {
    slug: "settz",
    index: "05",
    name: "SETTZ",
    label: "S",
    shortDescription: "Pesquisa e contexto para ajudar você a avaliar melhor uma compra.",
    description: "Um produto em desenvolvimento para comparar referências, entender preços e tomar decisões de compra com mais contexto.",
    status: "Em desenvolvimento",
    statusTone: "progress",
    eyebrow: "Full Stack · Produto",
    problem: "Comparar uma compra exige navegar por várias fontes, avaliar preços e separar sinais úteis de informações soltas.",
    solution: "O SETTZ reúne contexto de pesquisa e organiza os sinais da oferta para tornar a decisão mais clara, com uma visão multiplataforma em evolução.",
    decisions: ["Tratar URL e termo de busca como pontos de entrada para a pesquisa", "Projetar uma visão multiplataforma, sem limitar o produto a uma única loja", "Fazer o SETTZ Score ser explicável e apoiado pelos sinais encontrados", "Distinguir resultados reais, limitações e informações ainda não confirmadas"],
    currentState: "Produto em desenvolvimento, com a proposta, os fluxos principais e a base técnica em evolução.",
    nextStep: "Ampliar e validar as fontes de comparação, fortalecer a qualidade das referências e tornar o score cada vez mais transparente.",
    impact: "Estrutura em evolução; ainda sem resultado público consolidado ou métricas divulgadas.",
    features: ["Pesquisa por produto ou URL", "Comparação de referências", "SETTZ Score explicável", "Contexto para decisão de compra"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    url: "https://settz.vercel.app",
    github: "https://github.com/chrstack/settz",
  },
  {
    slug: "automacao-sisreg",
    index: "03",
    name: "Automação SISREG",
    label: "PY",
    shortDescription: "Automação de processos repetitivos para apoiar conferência e análise em um sistema de regulação.",
    description: "Um case profissional anonimizado sobre o uso de Python e automação de navegador para tornar tarefas operacionais repetitivas mais consistentes.",
    status: "Case anonimizado",
    statusTone: "case",
    eyebrow: "Automação · Python",
    problem: "A rotina exigia repetir pesquisas, abrir fichas, interpretar descrições e comparar textos semelhantes — um processo manual sujeito a demora e inconsistências.",
    solution: "A automação organiza etapas de navegação, leitura e comparação aproximada de textos para apoiar a conferência. A decisão final continua humana e nenhum dado sensível é armazenado ou apresentado neste portfólio.",
    decisions: ["Automatizar apenas etapas repetitivas e manter validação humana", "Usar Playwright para reproduzir a navegação de forma controlada", "Aplicar comparação aproximada com RapidFuzz em descrições que podem variar", "Excluir do case público pacientes, credenciais, identificadores e regras internas"],
    currentState: "Case apresentado de forma conceitual e anonimizada, preservando integralmente dados pessoais e informações internas do ambiente de trabalho.",
    nextStep: "Evoluir validações, tratamento de exceções e registros técnicos sem ampliar a exposição de informações sensíveis.",
    impact: "Reduziu etapas repetitivas da conferência e concentrou a atenção humana nas validações que realmente exigiam análise.",
    features: ["Automação de navegação", "Leitura estruturada de fichas", "Identificação de procedimentos", "Comparação aproximada de textos"],
    technologies: ["Python", "Playwright", "RapidFuzz"],
  },
  {
    slug: "analise-dados-dash-sgu",
    index: "04",
    name: "Conferência DASH × SGU",
    label: "DA",
    shortDescription: "Cruzamento e validação de bases para encontrar duplicidades, divergências e registros ausentes.",
    description: "Um case de dados aplicado à conferência operacional, transformando bases distintas em uma visão mais clara das inconsistências que exigiam revisão.",
    status: "Case anonimizado",
    statusTone: "case",
    eyebrow: "Dados · Analytics",
    problem: "Informações relacionadas estavam distribuídas em bases diferentes, tornando difícil localizar duplicidades, divergências e registros presentes em apenas uma das fontes.",
    solution: "O trabalho estruturou o cruzamento por identificadores disponíveis, criou regras de validação e organizou os resultados para facilitar a análise das exceções. Todos os exemplos públicos permanecem sem dados reais.",
    decisions: ["Normalizar campos antes de comparar as bases", "Usar chaves disponíveis de forma combinada quando necessário", "Separar duplicidades, divergências e ausências em categorias verificáveis", "Apresentar somente estrutura e aprendizado, nunca registros reais"],
    currentState: "Processo de conferência convertido em um case de Data Analytics totalmente anonimizado.",
    nextStep: "Aprimorar a documentação das regras e criar indicadores de qualidade que possam ser acompanhados sem revelar dados operacionais.",
    impact: "Tornou duplicidades, divergências e registros ausentes mais fáceis de localizar e revisar entre as bases.",
    features: ["Cruzamento de bases", "Detecção de duplicidades", "Análise de divergências", "Validação de registros ausentes"],
    technologies: ["Google Sheets", "Looker Studio", "Validação de dados"],
  },
];

const homeOrder: Project["slug"][] = ["curriculo-pronto", "chrstack-tickets", "automacao-sisreg"];
const portfolioOrder: Project["slug"][] = ["curriculo-pronto", "chrstack-tickets", "automacao-sisreg", "analise-dados-dash-sgu", "settz"];

export const featuredProjects = homeOrder.map((slug) => projects.find((project) => project.slug === slug) as Project);
export const portfolioProjects = portfolioOrder.map((slug) => projects.find((project) => project.slug === slug) as Project);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
