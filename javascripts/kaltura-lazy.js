(() => {
  const frames = Array.from(document.querySelectorAll("iframe[data-kaltura-src]"));
  if (!frames.length) {
    return;
  }

  const load = (frame) => {
    const source = frame.dataset.kalturaSrc;
    if (!source) {
      throw new Error("Deferred Kaltura iframe has no source URL.");
    }
    frame.src = source;
    delete frame.dataset.kalturaSrc;
  };

  if (!("IntersectionObserver" in window)) {
    frames.forEach(load);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        observer.unobserve(entry.target);
        load(entry.target);
      }
    },
    { rootMargin: "200px 0px" },
  );
  frames.forEach((frame) => observer.observe(frame));
})();
