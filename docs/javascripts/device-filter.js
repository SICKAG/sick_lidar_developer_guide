(() => {
  // Selected devices; an empty selection (the default) shows every page.
  const storageKey = "sick-lidar-device-filter-v4";
  const deviceButtons = Array.from(document.querySelectorAll("[data-device-filter]"));
  const status = document.querySelector(".md-device-filter__status");
  const pageScopes = window.SICK_DEVICE_PAGE_SCOPES;

  if (!deviceButtons.length) {
    return;
  }
  if (!pageScopes) {
    throw new Error("Device page scope data is missing.");
  }

  const devices = new Set(deviceButtons.map((button) => button.dataset.deviceFilter));
  const content = document.querySelector(".md-content__inner");

  const scopeForPath = (pathname) => {
    const path = `/${pathname.split("/").filter(Boolean).join("/")}/`;
    const route = Object.keys(pageScopes)
      .filter((candidate) => path === candidate || path.endsWith(candidate))
      .sort((left, right) => right.length - left.length)[0];
    return route ? pageScopes[route] : null;
  };

  const scopeForHref = (href) => {
    try {
      const url = new URL(href, document.baseURI);
      return url.origin === window.location.origin ? scopeForPath(url.pathname) : null;
    } catch (error) {
      if (error instanceof TypeError) {
        return null;
      }
      throw error;
    }
  };

  const readSelection = () => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (!saved) {
        return new Set();
      }
      let parsed;
      try {
        parsed = JSON.parse(saved);
      } catch (error) {
        if (!(error instanceof SyntaxError)) {
          throw error;
        }
        parsed = null;
      }
      if (!Array.isArray(parsed) || parsed.some((device) => !devices.has(device))) {
        console.warn(`Ignoring invalid saved device filter: ${saved}.`);
        window.localStorage.removeItem(storageKey);
        return new Set();
      }
      return new Set(parsed);
    } catch (error) {
      if (error instanceof DOMException && error.name === "SecurityError") {
        console.warn("Device filter preference cannot be read in this browser.");
        return new Set();
      }
      throw error;
    }
  };

  const saveSelection = (selection) => {
    try {
      if (selection.size) {
        window.localStorage.setItem(storageKey, JSON.stringify(Array.from(selection)));
      } else {
        window.localStorage.removeItem(storageKey);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "SecurityError") {
        console.warn("Device filter preference cannot be saved in this browser.");
        return;
      }
      throw error;
    }
  };

  const matchesSelection = (scope, selection) =>
    !selection.size || !scope || scope.some((device) => selection.has(device));

  const currentPageScope = scopeForPath(window.location.pathname);
  const pageNotice = document.createElement("p");
  pageNotice.className = "md-device-filter__notice";
  pageNotice.setAttribute("role", "status");
  pageNotice.hidden = true;

  let pageContent;
  if (content) {
    const heading = content.querySelector(":scope > h1");
    if (currentPageScope && !heading) {
      throw new Error("A device-specific page is missing its main heading.");
    }
    if (currentPageScope) {
      heading.after(pageNotice);
      pageContent = document.createElement("div");
      pageContent.className = "device-page-content";
      pageNotice.after(pageContent);
      while (pageContent.nextElementSibling) {
        pageContent.append(pageContent.nextElementSibling);
      }
    }
  }

  const setHidden = (element, hidden) => {
    element.hidden = hidden;
    element.classList.toggle("device-page-filter-hidden", hidden);
  };

  const updatePageLinks = (selection) => {
    const scopedItems = new Set();
    for (const link of document.querySelectorAll(".md-nav a[href]")) {
      const scope = scopeForHref(link.href);
      if (scope) {
        const item = link.closest("li");
        if (item) {
          scopedItems.add(item);
          setHidden(item, !matchesSelection(scope, selection));
        }
      }
    }

    // Hide nav sections whose pages are all filtered out; children are visited before parents.
    const sections = Array.from(document.querySelectorAll(".md-nav__item--nested")).reverse();
    for (const section of sections) {
      if (scopedItems.has(section)) {
        continue;
      }
      const children = Array.from(section.querySelectorAll(":scope > nav > ul > li"));
      setHidden(section, children.length > 0 && children.every((child) => child.hidden));
    }

    const cards = new Set(
      Array.from(document.querySelectorAll(".md-typeset .grid.cards a[href]"))
        .map((link) => link.closest("li"))
        .filter(Boolean),
    );
    for (const card of cards) {
      const links = Array.from(card.querySelectorAll("a[href]"));
      const scopes = links.map((link) => scopeForHref(link.href));
      const hasScopedLinks = scopes.some(Boolean);
      const hidden = hasScopedLinks && !scopes.some((scope) => matchesSelection(scope, selection));
      setHidden(card, hidden);
    }

    for (const result of document.querySelectorAll(".md-search-result__list li")) {
      const scopes = Array.from(result.querySelectorAll("a[href]"))
        .map((link) => scopeForHref(link.href))
        .filter(Boolean);
      const hidden = scopes.length > 0 && !scopes.some((scope) => matchesSelection(scope, selection));
      setHidden(result, hidden);
    }
  };

  const applySelection = (selection) => {
    const pageVisible = matchesSelection(currentPageScope, selection);
    pageContent?.classList.toggle("device-page-content-hidden", !pageVisible);
    pageNotice.hidden = pageVisible || !currentPageScope;
    if (!pageVisible && currentPageScope) {
      pageNotice.textContent =
        `This page applies to ${currentPageScope.join(", ")}. Add one of these devices to the filter, or clear the filter, to view it.`;
    }

    updatePageLinks(selection);

    for (const button of deviceButtons) {
      button.setAttribute(
        "aria-pressed",
        String(selection.has(button.dataset.deviceFilter)),
      );
    }

    if (status) {
      status.textContent = selection.size
        ? `Showing pages for ${Array.from(selection).join(" or ")} and shared pages.`
        : "Showing pages for all devices.";
    }
  };

  let selection = readSelection();
  applySelection(selection);

  for (const button of deviceButtons) {
    button.addEventListener("click", () => {
      // The first press narrows to that device, later presses add or remove devices;
      // removing the last one shows everything again.
      const device = button.dataset.deviceFilter;
      selection = new Set(selection);
      if (selection.has(device)) {
        selection.delete(device);
      } else {
        selection.add(device);
      }
      saveSelection(selection);
      applySelection(selection);
    });
  }

  const observeSearchResults = () => {
    const searchResults = document.querySelector(".md-search-result__list");
    if (!searchResults) {
      return;
    }
    const observer = new MutationObserver(() => updatePageLinks(selection));
    observer.observe(searchResults, { childList: true, subtree: true });
  };
  observeSearchResults();
})();
