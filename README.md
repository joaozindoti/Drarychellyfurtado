# Dra. Rychelly Furtado, Saúde e Estética

Landing page da Dra. Rychelly Furtado (enfermeira harmonizadora, Pedreiras-MA).
Objetivo único: levar a pessoa ao WhatsApp com a mensagem de agendamento pronta (cada procedimento abre a
conversa já citando o procedimento).

Visual no estilo das páginas de produto da Apple (galeria branca, faixas `#f5f5f7`, cards de 28px sem sombra,
uma cor de destaque só para link e conversão). Detalhes e adaptações em `design/ESTILO-APPLE.md`.

Stack: Astro 5 (site estático) + Tailwind CSS v4 + TypeScript + ícones Phosphor. Sem biblioteca de animação.
Fonte: SF Pro nos aparelhos Apple (do sistema) e Inter Variable com eixo óptico no resto (self-host, via
@fontsource).

## Rodar

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve o dist/ localmente
```

## Deploy (Vercel)

1. Importar o repositório na Vercel (framework detectado: Astro). Build `npm run build`, saída `dist/`.
2. `vercel.json` já traz os cabeçalhos de segurança (CSP com o iframe do Google Maps liberado, HSTS etc.) e cache
   longo em `/_astro/`.
3. Domínio próprio: defina a variável `SITE_URL` (ex.: `https://www.seudominio.com.br`) para canonical, Open
   Graph, JSON-LD e sitemap. Sem ela, o build usa o domínio de produção da Vercel.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Dados (endereço, WhatsApp, Instagram, mensagens) | `src/config/site.ts` |
| Procedimentos e descrições | `src/data/procedimentos.ts` |
| Casos de antes/depois | `src/data/casos.ts` (+ recortes em `scripts/prepare-images.mjs`) |
| Fases do preenchimento labial | `src/components/Labial.astro` |
| Cores, fontes, botões, escala de tipo | `src/styles/global.css` (comentário no topo) |
| Seções | `src/components/*.astro`, montadas em `src/pages/index.astro` |
| Comportamento (nav, fileira, antes/depois, entrada ao rolar, botão flutuante) | `src/scripts/*.ts` |

As imagens otimizadas saem de `assets-originais/` (fora do git, nunca é alterada) com `npm run images`.
O Astro gera AVIF/WebP em vários tamanhos no build.

## Pendências

- Número do COREN da Dra. (entra na "ficha" da seção Sobre e no JSON-LD).
- Horário de atendimento (hoje a página não fala em horário).
- Confirmar com a Dra.: o produto usado no caso "Queixo e mandíbula" e o texto da fase "Dias 1 e 2" do
  preenchimento labial (o slide 1 do carrossel não veio; o texto é o que os outros slides deixam implícito).
- Fotos em resolução maior: o retrato de estúdio (854px), as fotos de divulgação e os casos de sorriso gengival e
  Golden Bum vieram de artes do Instagram e ficam um pouco moles em telas grandes de alta densidade.
- Logo vetorial (SVG). Hoje a nav usa o nome em texto e o favicon é o PNG de 150px do perfil.
- Vídeo: não havia. Se aparecer, o palco do hero comporta um vídeo no lugar do retrato.
