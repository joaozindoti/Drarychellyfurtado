// Seletor Antes/Depois de cada card de resultado. Começa em "Antes"; na primeira vez que o card aparece
// bem na tela, troca sozinho para "Depois" (se a pessoa ainda não mexeu). Tocar na foto também alterna.
// A foto que não está à vista sai da árvore de acessibilidade.
export function initCasos(reduce: boolean) {
  const cards = document.querySelectorAll<HTMLElement>("[data-caso]");
  if (!cards.length) return;

  const mexeu = new WeakSet<HTMLElement>();

  const mostrar = (card: HTMLElement, ver: "antes" | "depois") => {
    const media = card.querySelector<HTMLElement>(".caso-media");
    if (!media) return;
    card.dataset.verAtual = ver;
    media.dataset.estado = ver;
    card.querySelectorAll<HTMLButtonElement>("[data-ver]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ver === ver)));
    media.querySelector(".caso-antes")?.setAttribute("aria-hidden", String(ver !== "antes"));
    media.querySelector(".caso-depois")?.setAttribute("aria-hidden", String(ver !== "depois"));
  };

  cards.forEach((card) => {
    mostrar(card, "antes");
    card.querySelectorAll<HTMLButtonElement>("[data-ver]").forEach((b) =>
      b.addEventListener("click", () => {
        mexeu.add(card);
        mostrar(card, b.dataset.ver as "antes" | "depois");
      })
    );
    card.querySelector(".caso-media")?.addEventListener("click", () => {
      mexeu.add(card);
      mostrar(card, card.dataset.verAtual === "antes" ? "depois" : "antes");
    });
  });

  if (reduce || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const card = e.target as HTMLElement;
        io.unobserve(card);
        window.setTimeout(() => !mexeu.has(card) && mostrar(card, "depois"), 1100);
      });
    },
    { threshold: 0.7 }
  );
  cards.forEach((c) => io.observe(c));
}
