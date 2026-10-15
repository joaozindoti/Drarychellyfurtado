// Prepara as imagens do site a partir de assets-originais/ (que nunca é alterada).
// Recorta e grava em src/assets/img/ e public/. O Astro (astro:assets) gera AVIF/WebP e tamanhos no build.
// Só entram fotos reais que a própria Dra. Rychelly publicou: o retrato de estúdio, as fotos de divulgação e
// os antes/depois. O paciente-perfil-3-4.jpg (foto avulsa, sem par) não é usado.
// Uso: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "assets-originais");
const OUT = path.join(root, "src", "assets", "img");
const PUB = path.join(root, "public");
const src = (f) => path.join(SRC, f);

await mkdir(OUT, { recursive: true });

const jpg = { quality: 90, mozjpeg: true, chromaSubsampling: "4:4:4" };

async function out(name, pipeline) {
  const file = path.join(OUT, name);
  await pipeline.jpeg(jpg).toFile(file);
  const m = await sharp(file).metadata();
  console.log(`${name.padEnd(28)} ${m.width}x${m.height}`);
}

// Máscara horizontal: opaco no meio, some nas bordas (largura `fade` em px de cada lado).
const fadeMask = (w, h, fade) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0" x2="1">` +
      `<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="${fade / w}" stop-color="#fff"/>` +
      `<stop offset="${1 - fade / w}" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>` +
      `</linearGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/></svg>`
  );

// 1. Hero. O retrato de estúdio (854x854, fundo cinza quente com vinheta) é o "produto" no palco branco.
// Celular: o quadrado original. Desktop: palco 2:1, com o fundo do estúdio continuado para os lados
// (a borda do estúdio esticada) e o retrato fundido nas bordas.
const RETRATO = src("estudio-blazer-lilas.jpg");
await out("hero-retrato.jpg", sharp(RETRATO));
{
  const H = 854;
  const W = H * 2;
  const fade = 150;
  const retrato = await sharp(RETRATO)
    .ensureAlpha()
    .composite([{ input: fadeMask(H, H, fade), blend: "dest-in" }])
    .png()
    .toBuffer();
  // Fundo: a coluna de borda do estúdio (média de 30 px, só até a altura onde ainda é parede) esticada para
  // cada lado. Assim a cor de cada altura bate com a borda do retrato, sem puxar a cor da roupa.
  const PAREDE = 560;
  // (sharp aplica um só resize por pipeline, por isso as etapas passam por buffer)
  const lado = async (left) => {
    const coluna = await sharp(RETRATO).extract({ left, top: 0, width: 30, height: PAREDE }).resize(1, PAREDE, { fit: "fill" }).toBuffer();
    const inteira = await sharp(coluna).extend({ bottom: H - PAREDE, extendWith: "copy" }).toBuffer();
    return sharp(inteira).resize((W - H) / 2 + fade, H, { fit: "fill" }).blur(6).toBuffer();
  };
  const [esq, dir] = await Promise.all([lado(0), lado(H - 30)]);
  const fundo = await sharp({ create: { width: W, height: H, channels: 3, background: "#4a4542" } })
    .composite([{ input: esq, left: 0, top: 0 }, { input: dir, left: W - ((W - H) / 2 + fade), top: 0 }])
    .png()
    .toBuffer();
  await out(
    "hero-palco.jpg",
    sharp(fundo).composite([{ input: retrato, left: (W - H) / 2, top: 0 }])
  );
}

// 2. Sobre: foto de divulgação de blusa branca (1080x1254). Só o retrato, sem a lista de procedimentos.
await out("sobre-retrato.jpg", sharp(src("flyer-procedimentos.webp")).extract({ left: 620, top: 70, width: 460, height: 690 }));

// 3. Preenchimento labial: foto de divulgação com a seringa (1080x1080), sem o texto da arte.
await out("labial-aplicacao.jpg", sharp(src("labial-capa.webp")).extract({ left: 700, top: 150, width: 380, height: 570 }));

// 4. Antes/depois. Cada recorte é quadrado; nas fotos empilhadas (metade de cima = antes, de baixo = depois)
// o ponto de referência fica na mesma posição relativa nas duas metades, para a troca Antes/Depois não "pular".
// Os recortes evitam a assinatura @drarychellyfurtado que fica na emenda.
const S = 1000;
// Rinomodelação (perfil, 2000x2000). Referência: ponta do nariz.
await out("rino-antes.jpg", sharp(src("antes-depois-rino-perfil.jpg")).extract({ left: 935, top: 125, width: 825, height: 825 }).resize(S, S));
await out("rino-depois.jpg", sharp(src("antes-depois-rino-perfil.jpg")).extract({ left: 915, top: 1035, width: 825, height: 825 }).resize(S, S));
// Mento e mandíbula (perfil, 2000x2000). Referência: lábios. O "depois" foi fotografado ~5% mais longe.
await out("mento-antes.jpg", sharp(src("antes-depois-mento.jpg")).extract({ left: 650, top: 70, width: 850, height: 850 }).resize(S, S));
await out("mento-depois.jpg", sharp(src("antes-depois-mento.jpg")).extract({ left: 624, top: 1014, width: 808, height: 808 }).resize(S, S));
// Sorriso gengival (arte 1080x1080 com as duas fotos lado a lado). Recorte por dentro das molduras.
await out("sorriso-antes.jpg", sharp(src("sorriso-gengival.jpg")).extract({ left: 166, top: 440, width: 356, height: 340 }).resize(700, 668));
await out("sorriso-depois.jpg", sharp(src("sorriso-gengival.jpg")).extract({ left: 584, top: 440, width: 356, height: 340 }).resize(700, 668));
// Golden Bum (arte 1080x1350, duas fotos lado a lado).
await out("bumbum-antes.jpg", sharp(src("golden-bum.jpg")).extract({ left: 150, top: 432, width: 350, height: 486 }).resize(560, 778));
await out("bumbum-depois.jpg", sharp(src("golden-bum.jpg")).extract({ left: 583, top: 432, width: 350, height: 486 }).resize(560, 778));

// 5. Open Graph 1200x630: retrato à direita sobre o fundo do estúdio, nome à esquerda.
{
  const W = 1200, H = 630;
  const retrato = await sharp(RETRATO).resize(H, H).ensureAlpha().composite([{ input: fadeMask(H, H, 110), blend: "dest-in" }]).png().toBuffer();
  const base = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#47423f"/>` +
      `<text x="72" y="270" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#d9cfe6">Enfermeira Harmonizadora</text>` +
      `<text x="72" y="342" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="58" font-weight="600" fill="#ffffff" letter-spacing="-1">Dra. Rychelly</text>` +
      `<text x="72" y="410" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="58" font-weight="600" fill="#ffffff" letter-spacing="-1">Furtado</text>` +
      `<text x="72" y="470" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#cfc8c3">Saúde e Estética · Pedreiras-MA</text></svg>`
  );
  await sharp(base).composite([{ input: retrato, left: W - H + 40, top: 0 }]).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(PUB, "og.jpg"));
  console.log("public/og.jpg");
}

// 6. Favicons a partir do logo (raster de 150px; provisório até o vetor oficial).
const logo = sharp(src("logo.jpg"));
await logo.clone().resize(180, 180, { kernel: "lanczos3" }).png().toFile(path.join(PUB, "apple-touch-icon.png"));
await logo.clone().extract({ left: 40, top: 38, width: 70, height: 70 }).resize(48, 48).png().toFile(path.join(PUB, "favicon-48.png"));
console.log("public/apple-touch-icon.png, public/favicon-48.png");
