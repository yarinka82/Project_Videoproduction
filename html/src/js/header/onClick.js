export function onClick() {
  const menuRef = document.getElementById('header-menu');
  const navRef = document.getElementById('nav');

  if (window.innerWidth < 1200) {
    menuRef.classList.toggle('isOpened');
  }

  navRef.classList.toggle('visually-hidden');
}
