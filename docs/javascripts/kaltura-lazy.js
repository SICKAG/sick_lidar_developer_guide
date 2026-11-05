(() => {
  const frames = Array.from(document.querySelectorAll("iframe[data-kaltura-src]"));
  if (!frames.length) {
    return;
  }

  // Browsers only allow autoplay without user interaction when the video is muted.
  const AUTOPLAY_FLASHVARS = "&flashvars[autoPlay]=true&flashvars[autoMute]=true";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const load = (frame, autoplay) => {
    const source = frame.dataset.kalturaSrc;
    if (!source) {
      throw new Error("Deferred Kaltura iframe has no source URL.");
    }
    frame.src = autoplay && !reducedMotion ? source + AUTOPLAY_FLASHVARS : source;
    delete frame.dataset.kalturaSrc;
  };

  if (!("IntersectionObserver" in window)) {
    frames.forEach((frame) => load(frame, false));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        observer.unobserve(entry.target);
        load(entry.target, true);
      }
    },
    { threshold: 0.5 },
  );
  frames.forEach((frame) => observer.observe(frame));
})();
