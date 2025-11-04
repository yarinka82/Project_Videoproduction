import { onClick } from "./onClick.js";

export function onHeaderLinksClick() {
  const navLinksRef = document.querySelectorAll('.header-navigation-link');
  const toFormularLink = document.querySelector('.header-formular-link');
  const contactsRef = document.querySelectorAll('.header-contacts-link');

  if (!navLinksRef || !toFormularLink || !contactsRef) return;

  [...navLinksRef, toFormularLink, ...contactsRef].forEach(link => {
    link.addEventListener('click', onClick);
  });
}
