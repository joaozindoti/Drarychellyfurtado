// Entrada ao rolar ([data-reveal]): adiciona .is-in uma vez, quando o elemento entra na tela.
// O CSS só esconde os elementos com a classe .js no <html> e sem "reduzir movimento" (ver global.css).
export function initReveal(reduce: boolean) {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  els.forEach((el) => io.observe(el));
}
