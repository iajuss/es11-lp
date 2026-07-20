# projeto de LP

Landing page de Felipe Soares (ES11 Capital), construída com Next.js 16 (React 19) sobre
[vinext](https://github.com/vitejs/vinext) — um adaptador que roda o app Next.js/RSC em cima do
Vite e o publica como Cloudflare Worker.

## Stack

- **Next.js 16 / React 19** — App Router, componentes de servidor (`app/`).
- **vinext + Vite** — build e dev server; gera um worker (`dist/server/index.js`) para deploy no
  Cloudflare Workers.
- **Tailwind CSS 4** — estilos (`app/globals.css`, `postcss.config.mjs`).
- **Drizzle ORM + Cloudflare D1** (`db/`, `drizzle.config.ts`) — infraestrutura opcional para
  banco de dados. Não está em uso hoje: o site é inteiramente estático, e `db/schema.ts` está
  vazio de propósito. Só é necessário mexer aqui se o site passar a precisar de persistência.

## Scripts

```bash
npm install       # instala as dependências
npm run dev        # inicia o servidor de desenvolvimento (vinext dev)
npm run build       # gera o build de produção
npm run start       # sobe o build de produção localmente
npm run test        # build + testes (tests/rendered-html.test.mjs)
npm run lint        # eslint
npm run db:generate  # gera migrations do Drizzle a partir de db/schema.ts (só relevante se o banco for usado)
```

## Deploy

O build gera um Cloudflare Worker em `dist/server/index.js`. Configuração de deploy/hosting fica
em `.openai/hosting.json` e é gerenciada pelo control plane (ex.: bindings de D1/R2, quando
aplicável).
