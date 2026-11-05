document.addEventListener(
  "DOMContentLoaded",
  () => {
    const scrollKey = "sick-guide-primary-nav-scroll";
    const scrollWrap = document.querySelector(
      ".md-sidebar--primary .md-sidebar__scrollwrap",
    );
    if (!scrollWrap) {
      return;
    }

    const saved = window.sessionStorage.getItem(scrollKey);
    if (saved !== null) {
      window.sessionStorage.removeItem(scrollKey);
      const separator = saved.indexOf("\n");
      const path = saved.slice(0, separator);
      const scrollTop = Number(saved.slice(separator + 1));
      if (separator !== -1 && path === window.location.pathname && Number.isFinite(scrollTop)) {
        window.requestAnimationFrame(() => {
          scrollWrap.scrollTop = scrollTop;
        });
      }
    }

    document.addEventListener("click", (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest(".md-sidebar--primary a.md-nav__link");
      if (!link || (link.target && link.target !== "_self")) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname
      ) {
        return;
      }

      window.sessionStorage.setItem(
        scrollKey,
        `${destination.pathname}\n${scrollWrap.scrollTop}`,
      );
    });
  },
  { once: true },
);
