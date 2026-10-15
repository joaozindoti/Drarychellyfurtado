# Dra. Rychelly Furtado, Saúde e Estética

Landing page da Dra. Rychelly Furtado (enfermeira harmonizadora, Pedreiras-MA).
Objetivo único: levar a pessoa ao WhatsApp com a mensagem de agendamento pronta (cada procedimento abre a
conversa já citando o procedimento).

Visual no estilo Slush, na mesma pegada da LP da Dra. Carla, nas cores da logo da Dra. (índigo e coral) e com
cards em tons bem leves. Detalhes em `design/DIRECAO.md` e `design/ESTILO-SLUSH.md`.

Stack: Astro 5 (site estático) + Tailwind CSS v4 + TypeScript + ícones Phosphor. Sem biblioteca de animação.
Fontes self-host: Archivo condensada 800 (display, instância estática de 13 kB gerada por `npm run fonts`, que
usa Python com fonttools e brotli) e Instrument Sans (texto, via @fontsource).

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
| Dados (endereço, horário, WhatsApp, Instagram, mensagens) | `src/config/site.ts` |
| Procedimentos e descrições | `src/data/procedimentos.ts` |
| Casos de antes/depois | `src/data/casos.ts` (+ recortes em `scripts/prepare-images.mjs`) |
| Fases do preenchimento labial | `src/components/Labial.astro` |
| Cores, fontes, botões, adesivos, tons dos cards | `src/styles/global.css` (comentário no topo) |
| Seções | `src/components/*.astro`, montadas em `src/pages/index.astro` |
| Comportamento (comparador, fileira, botão flutuante) | `src/scripts/*.ts` |

As imagens otimizadas saem de `assets-originais/` (fora do git, nunca é alterada) com `npm run images`.
O Astro gera AVIF/WebP em vários tamanhos no build.

## Pendências

- Número do COREN da Dra. (entra na "ficha" da seção Sobre e no JSON-LD).
- Endereço: a bio diz "Av. Otávio Passos, 269" e o Google Maps "R. Otávio Passos, 271". O site usa o da bio;
  o mapa e o "Como chegar" usam o pino do perfil. Confirmar com a Dra. e acertar um dos dois.
- Confirmar com a Dra.: o produto usado no caso "Queixo e mandíbula" e o texto da fase "Dias 1 e 2" do
  preenchimento labial (o slide 1 do carrossel não veio; o texto é o que os outros slides deixam implícito).
- Fotos em resolução maior: o retrato de estúdio (854px), as fotos de divulgação e os casos de sorriso gengival e
  Golden Bum vieram de artes do Instagram e ficam um pouco moles em telas grandes de alta densidade.
- Logo vetorial (SVG). Hoje o selo usa o ícone de borboleta mais próximo e o favicon é o PNG de 150px do perfil.
- Vídeo: não havia. Se aparecer, o card do hero comporta um vídeo no lugar do retrato (como na LP da Dra. Carla).
- Avaliações: o perfil do Google ainda não tem nenhuma. Quando tiver, entra a fileira de avaliações da LP da Dra. Carla.
