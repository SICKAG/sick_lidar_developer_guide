(() => {
  const revealTarget = () => {
    if (!location.hash) return;
    let id;
    try {
      id = decodeURIComponent(location.hash.slice(1));
    } catch (error) {
      console.error("Invalid reference link:", location.hash, error);
      return;
    }
    const target = document.getElementById(id);
    if (!target || !target.closest(".openapi-reference, .cola-telegram")) return;
    let parent = target.closest("details");
    while (parent) {
      parent.open = true;
      parent = parent.parentElement.closest("details");
    }
    // Let Material's fragment handling and responsive header layout settle.
    setTimeout(() => {
      const header = document.querySelector(".md-header");
      if (header) {
        target.style.scrollMarginTop = `${header.getBoundingClientRect().height + 16}px`;
      }
      target.scrollIntoView({ block: "start", behavior: "instant" });
    }, 0);
  };

  const initialize = () => {
    revealTarget();
  };

  window.addEventListener("hashchange", revealTarget);
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    const link = event.target.closest?.("a[href]");
    if (
      link &&
      link.origin === location.origin &&
      link.pathname === location.pathname &&
      link.hash === location.hash
    ) {
      setTimeout(revealTarget, 0);
    }
  });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
  if (typeof document$ !== "undefined") document$.subscribe(initialize);
})();
