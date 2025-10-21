import { onHeaderMenuBtnClick } from "./onHeaderMenuBtnClick.js";
import { onHeaderLinksClick } from "./onHeaderLinksClick.js";
import { fixHeaderPosition } from "./fixHeaderPosition.js";
import { toggleNavVisibility } from "./toggleNavVisibility.js";

export async function onHeaderLoad() {
  fixHeaderPosition();
  onHeaderMenuBtnClick();
  onHeaderLinksClick();

  window.addEventListener('resize', toggleNavVisibility);
  window.addEventListener('resize', fixHeaderPosition);
  window.addEventListener('resize', onHeaderMenuBtnClick);
}

// function toggleNavVisibility() {
//   const navRef = document.getElementById('nav');
//   const menuRef = document.getElementById('header-menu');

//   if (window.innerWidth < 1200) {
//     navRef.classList.add('visually-hidden');
//   } else {
//     navRef.classList.remove('visually-hidden');
//   }

//   menuRef.classList.remove('isOpened');
// }

// function fixHeaderPosition() {
//   const headerRef = document.getElementById('header');

//   if (!headerRef) return;

//   if (window.innerWidth >= 1200) {
//     const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

//     headerRef.style.transform = `translateX(calc(-50% - ${scrollbarWidth / 2}px))`;
//   }
// }

// function onHeaderMenuBtnClick() {
//   const btnRef = document.getElementById('menu-btn');

//   if (!btnRef) return;

//   btnRef.addEventListener('click', onClick);

//   smoothMenuOpening(btnRef);
// }

// function onHeaderLinksClick() {
//   const navLinksRef = document.querySelectorAll('.header-navigation-link');
//   const toFormularLink = document.querySelector('.header-formular-link');

//   if (!navLinksRef || !toFormularLink) return;

//   [...navLinksRef, toFormularLink].forEach(link => {
//     link.addEventListener('click', onClick);

//     smoothMenuOpening(link);
//   });
// }

// function onClick() {
//   const menuRef = document.getElementById('header-menu');
//   const navRef = document.getElementById('nav');

//   if (window.innerWidth < 1200) {
//     menuRef.classList.toggle('isOpened');
//   }

//   navRef.classList.toggle('visually-hidden');
// }

// function smoothMenuOpening(elem) {
//   const menuRef = document.getElementById('header-menu');

//   elem.addEventListener('click', () => {
//     if (menuRef.style.maxHeight) {
//       // Закрытие
//       menuRef.style.maxHeight = null;
//     } else {
//       // Открытие — задаём реальную высоту контента
//       menuRef.style.maxHeight = menuRef.scrollHeight + 'px';
//     }
//   });
// }


