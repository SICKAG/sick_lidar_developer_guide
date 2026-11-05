(() => {
  const productIdPattern =
    /^[A-Za-z0-9._~-]+(?:\/[A-Za-z0-9._~-]+)?$/;

  const normalizeProductId = (rawValue) => {
    const value = rawValue.trim();
    if (!value) {
      throw new Error("Enter the Product ID from the device label.");
    }

    let productId = value;
    if (/^https?:\/\//i.test(value)) {
      const url = new URL(value);
      if (url.hostname.toLowerCase() !== "pid.sick.com") {
        throw new Error("Use a Product ID or a pid.sick.com URL.");
      }
      productId = url.pathname;
    } else {
      productId = productId.replace(/^pid\.sick\.com\//i, "");
    }

    productId = productId.replace(/^\/+|\/+$/g, "");
    if (!productIdPattern.test(productId)) {
      throw new Error(
        "Use the part number and optional serial number, for example 1134610/25250710.",
      );
    }

    return productId;
  };

  const initializeLookup = (form) => {
    if (form.dataset.productIdInitialized === "true") {
      return;
    }

    const input = form.querySelector('input[name="product-id"]');
    const status = form.querySelector("[data-product-id-status]");
    if (!input || !status) {
      console.error("Product ID lookup is missing its input or status element.");
      return;
    }

    form.dataset.productIdInitialized = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";

      try {
        const productId = normalizeProductId(input.value);
        window.location.assign(`https://pid.sick.com/${productId}`);
      } catch (error) {
        status.textContent =
          error instanceof Error ? error.message : "The Product ID is invalid.";
        input.focus();
      }
    });
  };

  const initializeLookups = () => {
    document
      .querySelectorAll("[data-product-id-lookup]")
      .forEach(initializeLookup);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeLookups);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLookups);
  } else {
    initializeLookups();
  }
})();
