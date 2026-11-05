(() => {
  const script = document.currentScript;
  const root = new URL("../", script.src).pathname;
  const results = document.querySelector(".md-search-result__list");
  if (!results) return;

  const update = () => {
    for (const link of results.querySelectorAll(".md-search-result__link")) {
      const article = link.querySelector(".md-search-result__article");
      if (!article || article.querySelector(".search-result-path")) continue;
      const url = new URL(link.href);
      if (!url.pathname.startsWith(root)) continue;
      const path = url.pathname.slice(root.length).replace(/\/$/, "");
      const label = document.createElement("div");
      label.className = "search-result-path";
      label.textContent = path ? decodeURI(path).split("/").join(" / ") : "Home";
      article.prepend(label);
    }
  };

  new MutationObserver(update).observe(results, { childList: true, subtree: true });
  update();
})();
