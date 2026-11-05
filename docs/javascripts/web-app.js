(function () {
  const displayMode = window.matchMedia("(display-mode: standalone)");
  const notice = document.querySelector("[data-web-app-offline]");

  function update() {
    const standalone = displayMode.matches || window.navigator.standalone === true;
    document.documentElement.toggleAttribute("data-web-app", standalone);
    notice.hidden = !standalone || window.navigator.onLine !== false;
  }

  displayMode.addEventListener("change", update);
  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  window.addEventListener("pageshow", update);
  update();
})();
