// Entrada única de JS da página. Sem biblioteca: o movimento é CSS (entrada do hero, troca antes/depois,
// entrada ao rolar) e tudo respeita prefers-reduced-motion.
import { initNav } from "./nav";
import { initReveal } from "./reveal";
import { initRails } from "./rail";
import { initCasos } from "./casos";
import { initCtaFloat } from "./cta-float";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

document.querySelectorAll<HTMLElement>("[data-ano]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

initNav();
initReveal(reduce);
initRails(reduce);
initCasos(reduce);
initCtaFloat();
