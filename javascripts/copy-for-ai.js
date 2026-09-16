document.addEventListener("DOMContentLoaded", () => {
  for (const article of document.querySelectorAll("article.md-content__inner")) {
    const button = document.createElement("button");
    button.className = "copy-for-ai";
    button.dataset.copyForAi = "";
    button.type = "button";
    button.setAttribute("aria-label", "Copy content");
    button.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <rect x="8" y="8" width="12" height="12" rx="2"></rect>
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path>
      </svg>
      <span class="copy-for-ai__label">Copy content</span>
      <span class="copy-for-ai__chevron" aria-hidden="true"></span>
    `;
    const heading = article.querySelector("h1");
    if (!heading) {
      throw new Error("Copy content requires a page heading.");
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
        label.textContent = "Copy content";
      }, 2000);
    });
  }
});
