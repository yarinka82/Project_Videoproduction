import { onClick } from "./onClick.js";

export function onHeaderLinksClick() {
  const navLinksRef = document.querySelectorAll('.header-navigation-link');
  const toFormularLinkRef = document.querySelector('.header-formular-link');
  const contactsRefs = document.querySelectorAll('.header-contacts-link');
  const logoLinkRef = document.querySelector('.header-logo-link');

  if (!navLinksRef || !toFormularLinkRef || !contactsRefs || !logoLinkRef) return;

  [...navLinksRef, toFormularLinkRef, ...contactsRefs, logoLinkRef].forEach(link => {
    link.addEventListener('click', event=>onClick(event.currentTarget));
  });
}
