document.addEventListener("DOMContentLoaded", () => {
  for (const article of document.querySelectorAll("article.md-content__inner")) {
    const button = document.createElement("button");
    button.className = "copy-for-ai";
    button.dataset.copyForAi = "";
    button.type = "button";
    button.setAttribute("aria-label", "Copy page content for AI");
    button.style.cssText = [
      "float:right",
      "display:inline-flex",
      "align-items:center",
      "justify-content:center",
      "gap:.35rem",
      "margin:0",
      "padding:.385rem .595rem",
      "border:1px solid #005aff",
      "border-radius:.3rem",
      "background:#fff",
      "color:#005aff",
      "font-family:Inter,sans-serif",
      "font-size:.56rem",
      "font-weight:700",
      "line-height:1",
      "cursor:pointer",
    ].join(";");
    button.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 21H8a2 2 0 0 1-2-2V7h2v12h11zm-3-4H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 3v12h12V3z"/></svg>
      <span>Copy for AI</span>
    `;
    const icon = button.querySelector("svg");
    icon.style.cssText = "width:.84rem;height:.84rem;min-width:.84rem;fill:currentColor";
    const heading = article.querySelector("h1");
    if (!heading) {
      throw new Error("Copy for AI requires a page heading.");
    }
    heading.append(button);

    const label = button.querySelector("span");

    button.addEventListener("click", async () => {
      if (!navigator.clipboard) {
        label.textContent = "Copy unavailable";
        return;
      }

      const content = article.cloneNode(true);
      content.querySelectorAll("[data-copy-for-ai], .headerlink, .md-code__nav").forEach((element) => element.remove());

      try {
        await navigator.clipboard.writeText(content.innerText.trim());
        label.textContent = "Copied";
      } catch (error) {
        if (error instanceof DOMException) {
          label.textContent = "Copy failed";
        } else {
          throw error;
        }
      }

      window.setTimeout(() => {
        label.textContent = "Copy for AI";
      }, 2000);
    });
  }
});
