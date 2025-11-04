export function onClick() {
  const menuRef = document.getElementById('header-menu');

  if (window.innerWidth < 1280) {
    menuRef.classList.toggle('isOpened');
  }
}
