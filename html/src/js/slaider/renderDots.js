export function renderDots(currentPage, totalPages) {
  const container = document.getElementById("portfolio-dots");
  container.innerHTML = "";

  const createDot = (page) => {
    const btn = document.createElement("button");
    btn.textContent = page;
    btn.className =
      page === currentPage ? "dot active formular-link" : "formular-link dot";
    btn.dataset.page = page;
    container.appendChild(btn);
  };

  const addRange = (start, end) => {
    for (let i = start; i <= end; i++) {
      createDot(i);
    }
  };

  if (totalPages <= 11) {
    addRange(1, totalPages);
    return;
  }

  addRange(1, 3);

  if (currentPage > 5) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "dots-separator";
    container.appendChild(dots);
  }

  const startMiddle = Math.max(4, currentPage - 2);
  const endMiddle = Math.min(totalPages - 3, currentPage + 2);
  addRange(startMiddle, endMiddle);

  if (currentPage < totalPages - 4) {
    const dots = document.createElement("span");
    dots.textContent = "...";
    dots.className = "dots-separator";
    container.appendChild(dots);
  }

  addRange(totalPages - 2, totalPages);
}
