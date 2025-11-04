import { renderDots } from "./renderDots.js";

export function updatePagination({ page, totalPages, hasPrev, hasNext }) {
  const prevBtn = document.getElementById("portfolio-prev-btn");
  const nextBtn = document.getElementById("portfolio-next-btn");

  prevBtn.style.visibility = hasPrev ? "visible" : "hidden";
  nextBtn.style.visibility = hasNext ? "visible" : "hidden";

  renderDots(page, totalPages);
}
