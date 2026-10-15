// Fileira de cards (scroll-snap nativo). As setas andam um card por vez; os pontos mostram o card mais
// próximo da borda esquerda. No fim da fileira, a seta "próximo" desliga.
export function initRails(reduce: boolean) {
  document.querySelectorAll<HTMLElement>("[data-rail]").forEach((rail) => {
    const section = rail.closest("section");
    const items = Array.from(rail.querySelectorAll<HTMLElement>("[data-rail-item]"));
    const prev = section?.querySelector<HTMLButtonElement>("[data-rail-prev]");
    const next = section?.querySelector<HTMLButtonElement>("[data-rail-next]");
    const dots = Array.from(section?.querySelectorAll<HTMLElement>("[data-rail-dot]") ?? []);
    if (!items.length) return;

    const padStart = () => parseFloat(getComputedStyle(items[0].parentElement!).paddingLeft) || 0;
    const atual = () => {
      const x = rail.scrollLeft;
      let best = 0;
      let dist = Infinity;
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft - padStart() - x);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      return best;
    };
    const fim = () => rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;

    const update = () => {
      const i = fim() ? items.length - 1 : atual();
      dots.forEach((d, k) => d.toggleAttribute("data-active", k === i));
      if (prev) prev.disabled = rail.scrollLeft <= 4;
      if (next) next.disabled = fim();
    };
    const ir = (i: number) => {
      const alvo = items[Math.max(0, Math.min(items.length - 1, i))];
      rail.scrollTo({ left: alvo.offsetLeft - padStart(), behavior: reduce ? "auto" : "smooth" });
    };

    prev?.addEventListener("click", () => ir(atual() - 1));
    next?.addEventListener("click", () => ir(atual() + 1));
    let raf = 0;
    rail.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
      },
      { passive: true }
    );
    window.addEventListener("resize", update, { passive: true });
    update();
  });
}
