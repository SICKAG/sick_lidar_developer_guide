document.addEventListener("DOMContentLoaded", () => {
  for (const feedback of document.querySelectorAll("[data-page-feedback]")) {
    const buttons = feedback.querySelectorAll("[data-feedback-rating]");
    const buttonGroup = feedback.querySelector(".page-feedback__buttons");
    const status = feedback.querySelector(".page-feedback__status");
    let submitted = false;

    buttonGroup.hidden = false;
    for (const button of buttons) {
      button.addEventListener("click", () => {
        if (submitted) {
          return;
        }
        if (!window._paq || typeof window._paq.push !== "function") {
          status.textContent = "Feedback is unavailable. Please try again later.";
          return;
        }

        window._paq.push([
          "trackEvent",
          "Page feedback",
          button.dataset.feedbackRating,
          feedback.dataset.pageFeedback,
        ]);
        submitted = true;
        for (const option of buttons) {
          option.disabled = true;
          option.setAttribute("aria-pressed", String(option === button));
        }
        status.textContent = "Thank you for your feedback.";
      });
    }
  }
}, { once: true });
