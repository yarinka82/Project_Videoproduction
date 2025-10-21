export function toggleNavVisibility() {
  const navRef = document.getElementById('nav');
  const menuRef = document.getElementById('header-menu');

  if (window.innerWidth < 1200) {
    navRef.classList.add('visually-hidden');
  } else {
    navRef.classList.remove('visually-hidden');
  }

  menuRef.classList.remove('isOpened');
}
