# chrstack

Site oficial de Christian Lima e hub dos produtos construídos sob a identidade **chrstack**.

## Tecnologias

- Next.js (App Router)
- TypeScript
- CSS responsivo
- Lucide Icons
- Vercel Analytics

## Execução local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

## Estrutura

- `src/app`: rotas, metadata, SEO e páginas
- `src/components`: componentes reutilizáveis
- `src/data`: projetos, tecnologias e redes sociais
- `public/brand`: ativos oficiais da marca

## Adicionando um projeto

Inclua o projeto em `src/data/projects.ts`. As listagens e a rota individual são geradas a partir dessa fonte central.

## Deploy

O projeto está pronto para implantação na Vercel com o preset Next.js e sem variáveis de ambiente obrigatórias.
