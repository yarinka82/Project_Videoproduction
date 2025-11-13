import { onClick } from "./onClick.js";

export function onHeaderLinksClick() {
  const navLinksRef = document.querySelectorAll('.header-navigation-link');
  const toFormularLinkRef = document.querySelector('.header-formular-link');
  const contactsRef = document.querySelectorAll('.header-contacts-link');
  const logoLinkRef = document.querySelector('.header-logo-link');

  if (!navLinksRef || !toFormularLinkRef || !contactsRef || !logoLinkRef) return;

  [...navLinksRef, toFormularLinkRef, ...contactsRef, logoLinkRef].forEach(link => {
    link.addEventListener('click', onClick);
  });
}
