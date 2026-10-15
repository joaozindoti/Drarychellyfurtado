// Antes e depois publicados pela própria Dra. Rychelly (Instagram @drarychellyfurtado).
// Recortes gerados por scripts/prepare-images.mjs a partir de assets-originais/.
// O caso "mento" está legendado pelo que a foto mostra (queixo e mandíbula); confirmar com a Dra. o produto usado.
import type { ImageMetadata } from "astro";
import rinoAntes from "../assets/img/rino-antes.jpg";
import rinoDepois from "../assets/img/rino-depois.jpg";
import mentoAntes from "../assets/img/mento-antes.jpg";
import mentoDepois from "../assets/img/mento-depois.jpg";
import sorrisoAntes from "../assets/img/sorriso-antes.jpg";
import sorrisoDepois from "../assets/img/sorriso-depois.jpg";
import bumbumAntes from "../assets/img/bumbum-antes.jpg";
import bumbumDepois from "../assets/img/bumbum-depois.jpg";

export interface Caso {
  id: string;
  rotulo: string;
  titulo: string;
  texto: string;
  antes: ImageMetadata;
  depois: ImageMetadata;
  altAntes: string;
  altDepois: string;
  /** object-position da foto no quadro quadrado do card. */
  foco?: string;
  assinatura?: boolean;
}

export const CASOS: Caso[] = [
  {
    id: "rino",
    rotulo: "Rinomodelação",
    titulo: "Um perfil mais alinhado, sem cirurgia.",
    texto: "Preenchimento que corrige a linha do nariz vista de lado.",
    antes: rinoAntes,
    depois: rinoDepois,
    altAntes: "Antes: perfil do nariz com uma leve curva no dorso",
    altDepois: "Depois: perfil do nariz com o dorso mais reto",
  },
  {
    id: "mento",
    rotulo: "Queixo e mandíbula",
    titulo: "Contorno do rosto mais definido.",
    texto: "Projeção do queixo e linha da mandíbula, vistas de perfil.",
    antes: mentoAntes,
    depois: mentoDepois,
    altAntes: "Antes: perfil com o queixo mais recuado e a mandíbula pouco marcada",
    altDepois: "Depois: perfil com o queixo mais projetado e a linha da mandíbula definida",
  },
  {
    id: "sorriso",
    rotulo: "Sorriso gengival",
    titulo: "Menos gengiva, mais sorriso.",
    texto: "A toxina botulínica relaxa o músculo que levanta o lábio.",
    antes: sorrisoAntes,
    depois: sorrisoDepois,
    altAntes: "Antes: sorriso mostrando bastante gengiva acima dos dentes",
    altDepois: "Depois: sorriso mostrando pouca gengiva",
  },
  {
    id: "bumbum",
    rotulo: "Golden Bum",
    titulo: "A curva do bumbum, realçada.",
    texto: "Harmonização de bumbum, a assinatura da Dra. Rychelly.",
    antes: bumbumAntes,
    depois: bumbumDepois,
    altAntes: "Antes: glúteos vistos de costas, com menos volume na parte de cima",
    altDepois: "Depois: glúteos vistos de costas, com a curva mais arredondada",
    foco: "50% 72%",
    assinatura: true,
  },
];
