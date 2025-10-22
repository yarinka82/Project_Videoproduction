export function onClick() {
  const menuRef = document.getElementById('header-menu');

  if (window.innerWidth < 1200) {
    menuRef.classList.toggle('isOpened');
  }
}
