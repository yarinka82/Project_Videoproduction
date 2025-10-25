export function initFormularModal() {
  const modal = document.getElementById("formular-modal");
  const closeBtn = modal?.querySelector(".close-button");
  if (!modal || !closeBtn) return;

  const openModal = () => {
    modal.classList.remove("modal-hidden");

    requestAnimationFrame(() => modal.classList.add("show"));
    history.pushState({}, "", "/formular");
  };

  const closeModal = () => {
    modal.classList.remove("show");

    setTimeout(() => modal.classList.add("modal-hidden"), 300);
    history.pushState({}, "", "/html");
  };


  if (window.location.pathname === "/formular" || window.location.pathname === "/formular/") {
    openModal();
  }


  document.querySelectorAll('a[href="/formular"], a[href="/formular/"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });


  closeBtn.addEventListener("click", closeModal);


  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });


  window.addEventListener("popstate", () => {
    if (window.location.pathname === "/formular" || window.location.pathname === "/formular/") {
      openModal();
    } else {
      closeModal();
    }
  });
}
