export function onClick(elem) {
  const menuRef = document.getElementById('header-menu');
  const logoLinkRef = document.querySelector('.header-logo-link');

  if (window.innerWidth < 1280) {
    const isOpenedMenu = menuRef.classList.contains('isOpened');

    if (elem === logoLinkRef && !isOpenedMenu) {
      return;
    }

    menuRef.classList.toggle('isOpened');
  }
}
