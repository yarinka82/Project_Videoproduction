import { onClick } from "./onClick.js";

export function onHeaderLinksClick() {
  const navLinksRef = document.querySelectorAll('.header-navigation-link');
  const toFormularLink = document.querySelector('.header-formular-link');

  if (!navLinksRef || !toFormularLink) return;

  [...navLinksRef, toFormularLink].forEach(link => {
    link.addEventListener('click', onClick);
  });
}
