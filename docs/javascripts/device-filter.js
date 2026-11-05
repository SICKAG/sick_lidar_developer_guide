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

  // List items that start with a link to a device-scoped page, and table rows
  // linking to device-scoped pages (for example the beginner-project overview).
  const overviewItems = [];
  const overviewLists = new Set();
  if (content) {
    for (const element of content.querySelectorAll(":is(ul, ol):not(.md-nav__list) > li")) {
      const first = element.firstChild;
      const link = first && first.nodeType === Node.ELEMENT_NODE && first.matches("a[href]") ? first : null;
      const scope = link ? scopeForHref(link.href) : null;
      if (scope) {
        overviewItems.push({ element, scope });
        overviewLists.add(element.parentElement);
      }
    }
    for (const element of content.querySelectorAll("table:not([class]) > tbody > tr")) {
      const scopes = Array.from(element.querySelectorAll("a[href]"))
        .map((link) => scopeForHref(link.href))
        .filter(Boolean);
      if (scopes.length) {
        overviewItems.push({ element, scope: Array.from(new Set(scopes.flat())) });
        overviewLists.add(element.parentElement);
      }
    }
  }

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

    // Overview lists on section index pages: "[Page](./page.md): description".
    for (const item of overviewItems) {
      setHidden(item.element, !matchesSelection(item.scope, selection));
    }
    for (const list of overviewLists) {
      const items = Array.from(list.children);
      setHidden(list, items.length > 0 && items.every((child) => child.hidden));
    }
  };

  const applySelection = (selection) => {
    // Shared with page tools, for example the mounting simulator's device list.
    window.SICK_DEVICE_FILTER = Array.from(selection);
    window.dispatchEvent(new CustomEvent("sick-device-filter", { detail: window.SICK_DEVICE_FILTER }));
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
      const added = !selection.has(device);
      if (added) {
        selection.add(device);
      } else {
        selection.delete(device);
      }
      saveSelection(selection);
      applySelection(selection);

      // Selecting a device also opens its overview page.
      const href = button.dataset.deviceHref;
      if (added && href) {
        const target = new URL(href, document.baseURI);
        if (target.pathname !== window.location.pathname) {
          window.location.assign(target.href);
        }
      }
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
