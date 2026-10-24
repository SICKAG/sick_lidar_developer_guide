(() => {
  const button = document.querySelector("[data-google-translate]");
  const container = document.getElementById("google_translate_element");
  const label = button?.querySelector(".md-translate__label");

  if (!button || !container || !label) {
    return;
  }

  const commandPattern =
    /\b(?:s(?:RN|WN|MN|EN|RA|WA|AN|EA|SN|SI)(?:\/s(?:RN|WN|MN|EN|RA|WA|AN|EA|SN|SI))*\s+[A-Za-z][A-Za-z0-9_]*|(?:GET|POST|PUT|PATCH|DELETE)(?:\/(?:GET|POST|PUT|PATCH|DELETE))*\s+\/api\/[A-Za-z0-9_./{}<>:-]+(?:\?[A-Za-z0-9_=&.%{}<>:-]+)?|(?<=CoLa [AB]:\s)[A-Za-z][A-Za-z0-9_]*)/g;

  const markCommands = () => {
    const content = document.querySelector(".md-content");
    if (!content) {
      return;
    }

    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (
          !node.nodeValue?.trim() ||
          node.parentElement?.closest(".notranslate, [translate='no']")
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        commandPattern.lastIndex = 0;
        return commandPattern.test(node.nodeValue)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    for (const node of nodes) {
      const fragment = document.createDocumentFragment();
      let previousIndex = 0;
      commandPattern.lastIndex = 0;

      for (const match of node.nodeValue.matchAll(commandPattern)) {
        fragment.append(node.nodeValue.slice(previousIndex, match.index));
        const command = document.createElement("span");
        command.classList.add("notranslate");
        command.setAttribute("translate", "no");
        command.textContent = match[0];
        fragment.append(command);
        previousIndex = match.index + match[0].length;
      }

      fragment.append(node.nodeValue.slice(previousIndex));
      node.replaceWith(fragment);
    }
  };

  const markTechnicalContent = () => {
    const selector = [
      ".highlight",
      "code",
      "pre",
      "kbd",
      ".chip",
      ".md-device-filter",
      ".mermaid",
    ].join(",");
    for (const element of document.querySelectorAll(selector)) {
      element.classList.add("notranslate");
      element.setAttribute("translate", "no");
    }
    markCommands();
  };

  markTechnicalContent();

  // Instant navigation swaps the page content, so newly loaded technical
  // blocks have to be excluded from translation again.
  if (typeof document$ !== "undefined") {
    document$.subscribe(markTechnicalContent);
  }

  const showContainer = () => {
    container.hidden = false;
    button.setAttribute("aria-expanded", "true");
  };

  let showAfterLoad = false;

  const finishLoading = () => {
    button.disabled = false;
    label.textContent = "Translate";
    if (showAfterLoad) {
      showContainer();
    }
  };

  const waitForLanguages = () => {
    const hasLanguages = () =>
      container.querySelector(".goog-te-combo")?.options.length > 1;

    if (hasLanguages()) {
      finishLoading();
      return;
    }

    const observer = new MutationObserver(() => {
      if (hasLanguages()) {
        observer.disconnect();
        window.clearTimeout(timeout);
        finishLoading();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    const timeout = window.setTimeout(() => {
      observer.disconnect();
      button.disabled = false;
      label.textContent = "Unavailable";
      button.setAttribute("aria-expanded", "false");
    }, 15000);
  };

  window.googleTranslateElementInit = () => {
    markTechnicalContent();
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element",
    );
    waitForLanguages();
  };

  const loadGoogleTranslate = (openAfterLoad = false) => {
    showAfterLoad = openAfterLoad;
    if (document.querySelector('script[data-google-translate-script]')) {
      return;
    }

    button.disabled = true;
    label.textContent = "Loading…";
    const script = document.createElement("script");
    script.dataset.googleTranslateScript = "";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      button.disabled = false;
      label.textContent = "Unavailable";
      button.setAttribute("aria-expanded", "false");
    };
    document.head.append(script);
  };

  button.addEventListener("click", () => {
    if (window.google?.translate?.TranslateElement) {
      if (container.hidden) {
        showContainer();
      } else {
        container.hidden = true;
      }
      button.setAttribute("aria-expanded", String(!container.hidden));
      return;
    }

    loadGoogleTranslate(true);
  });

  const languageCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("googtrans="))
    ?.split("=")[1];
  const targetLanguage = languageCookie
    ? decodeURIComponent(languageCookie).split("/").at(-1)
    : "";

  if (targetLanguage && targetLanguage !== "en") {
    loadGoogleTranslate();
  }
})();
