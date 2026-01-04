import { animateSpark } from "./animation.js";
import { fetchFaq } from "./fetchFaq.js";

export async function faqRender() {
  const listContainer = document.querySelector(".faq-right");
  const { list } = await fetchFaq();

  listContainer.innerHTML = list
    .map(
      (faq) =>
        `<div class="faq-accordion">
            <div class="spark"></div>
        <button class="faq-accordion-toggle">
          <h6 class="faq-accordion-title">
            ${faq.question}
          </h6>

          <div class="faq-icon">
            <svg class="faq-icon" width="24" height="24">
              <use href="./src/img/sprite.svg#icon-plus"></use>
            </svg>
          </div>
        </button>
        <div class="faq-accordion-content">
          <p>
           ${faq.answer}
          </p>
        </div>
       </div> 
         `
    )
    .join("");
  const items = document.querySelectorAll(".faq-accordion");
  items.forEach((item, i) => {
    setTimeout(() => {
      item.classList.remove("hidden");
      item.classList.add("visible");
    }, 300 + i * 600);
  });
  animateSpark();
}
