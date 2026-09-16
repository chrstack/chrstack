export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  sections: { title: string; paragraphs: string[]; points?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "automatizar-sem-retirar-validacao-humana",
    title: "Automatizar sem retirar a validação humana",
    description: "Como separar tarefas repetitivas de decisões que ainda exigem contexto, cuidado e responsabilidade.",
    category: "Python · Automação",
    readingTime: "4 min",
    publishedAt: "16 set. 2026",
    sections: [
      { title: "O ponto de partida", paragraphs: ["Nem toda etapa manual precisa continuar manual. Pesquisar registros, abrir telas e comparar descrições são atividades que consomem tempo, mas seguem regras observáveis. O primeiro passo é identificar o que pode ser repetido com segurança e o que depende de interpretação humana.", "Em processos sensíveis, automação não deve significar decisão automática. A ferramenta pode organizar informações, destacar semelhanças e reduzir cliques, enquanto a confirmação permanece com a pessoa responsável."] },
      { title: "Uma abordagem segura", paragraphs: ["No case de automação apresentado neste portfólio, Python coordena o fluxo, Playwright controla a navegação e RapidFuzz ajuda a comparar textos que podem aparecer com pequenas variações."], points: ["Automatizar apenas etapas previsíveis", "Registrar exceções em vez de escondê-las", "Manter confirmação humana nos pontos críticos", "Nunca expor credenciais ou dados pessoais em logs e demonstrações"] },
      { title: "O resultado que importa", paragraphs: ["O ganho não está apenas em executar mais rápido. Um fluxo bem desenhado reduz repetição, torna as exceções mais visíveis e permite que a atenção humana seja usada onde realmente agrega valor."] },
    ],
  },
  {
    slug: "cruzando-bases-com-confianca",
    title: "Cruzando bases sem esconder divergências",
    description: "Princípios usados para localizar duplicidades, ausências e inconsistências entre fontes diferentes.",
    category: "Dados · Analytics",
    readingTime: "5 min",
    publishedAt: "16 set. 2026",
    sections: [
      { title: "Comparar começa antes do cruzamento", paragraphs: ["Duas bases podem representar a mesma informação com formatos diferentes. Espaços, pontuação, tipos de dado e valores incompletos transformam uma comparação aparentemente simples em uma fonte de falsos resultados.", "Por isso, a preparação precisa vir antes das fórmulas e dos painéis: normalizar campos, entender as chaves disponíveis e definir o que será considerado igualdade, divergência ou ausência."] },
      { title: "Classificar para conseguir revisar", paragraphs: ["Em vez de entregar uma lista única de problemas, o processo separa cada exceção por natureza."], points: ["Registros encontrados nas duas fontes", "Registros ausentes em uma das bases", "Possíveis duplicidades", "Campos relacionados com valores divergentes"] },
      { title: "Visualização não substitui validação", paragraphs: ["Planilhas e dashboards ajudam a enxergar padrões, mas precisam preservar o caminho até o dado de origem. Uma boa análise permite revisar a regra, entender por que um item foi sinalizado e corrigir o processo quando necessário."] },
    ],
  },
  {
    slug: "de-ideia-a-produto-web",
    title: "Da ideia a um produto web utilizável",
    description: "O que muda quando o desenvolvimento começa pelo problema e pelo caminho de quem vai usar.",
    category: "Produto · Desenvolvimento",
    readingTime: "4 min",
    publishedAt: "16 set. 2026",
    sections: [
      { title: "Começar pela fricção", paragraphs: ["Uma lista de funcionalidades não explica por que um produto deve existir. No Currículo Pronto, o problema central não era apenas gerar um arquivo: era ajudar alguém a organizar informações profissionais sem depender de ferramentas complexas de edição.", "Essa definição orienta decisões de interface, linguagem, ordem das etapas e funcionamento no celular."] },
      { title: "Decisões que conectam produto e código", paragraphs: ["A arquitetura técnica precisa sustentar a experiência desejada."], points: ["Dividir o preenchimento em etapas compreensíveis", "Preservar os dados enquanto a pessoa avança", "Adaptar a interface para telas pequenas", "Gerar um documento consistente no final do fluxo"] },
      { title: "Publicar também faz parte", paragraphs: ["Um projeto só começa a revelar problemas reais quando pode ser usado. Build, deploy, domínio, acessibilidade, desempenho e análise de uso fazem parte do produto — não são tarefas separadas deixadas para depois."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
