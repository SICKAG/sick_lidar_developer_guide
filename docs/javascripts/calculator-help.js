(() => {
  // Calculator help ("?") popups: only one open at a time; close on outside click or Escape.
  const HELP = ".calculator__help";
  const closeAll = (except) => {
    document.querySelectorAll(`${HELP}[open]`).forEach((details) => {
      if (details !== except) details.open = false;
    });
  };

  const initialize = () => {
    if (document.documentElement.dataset.calculatorHelp === "true") return;
    document.documentElement.dataset.calculatorHelp = "true";
    document.addEventListener("click", (event) => closeAll(event.target.closest(HELP)));
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const open = document.querySelector(`${HELP}[open]`);
      if (!open) return;
      closeAll();
      open.querySelector("summary")?.focus();
    });
  };

  if (typeof document === "undefined") return;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
