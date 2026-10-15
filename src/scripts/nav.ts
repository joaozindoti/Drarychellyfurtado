// Nav: linha fina embaixo quando a página rola; no celular, o chevron abre e fecha o painel de seções
// (Esc e clique em um link também fecham).
export function initNav() {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;

  const onScroll = () => nav.toggleAttribute("data-stuck", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = nav.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const panel = nav.querySelector<HTMLElement>("[data-nav-panel]");
  if (!toggle || !panel) return;

  const set = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar seções" : "Abrir seções");
    panel.hidden = !open;
  };
  toggle.addEventListener("click", () => set(toggle.getAttribute("aria-expanded") !== "true"));
  panel.querySelectorAll("[data-nav-close]").forEach((a) => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) {
      set(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (e) => {
    if (!panel.hidden && !nav.contains(e.target as Node)) set(false);
  });
  window.matchMedia("(min-width: 768px)").addEventListener("change", (m) => m.matches && set(false));
}
