export async function onHeaderLoad() {
  toggleNavVisibility();

  window.addEventListener('resize', toggleNavVisibility);
}

function toggleNavVisibility() {
  const navRef = document.getElementById('nav');
  const menuBtnRef = document.getElementById('menu-btn');

  if (!nav) return;

  if (window.innerWidth < 1200) {
    navRef.classList.add('visually-hidden');
    menuBtnRef.classList.remove('visually-hidden');
  } else {
    navRef.classList.remove('visually-hidden');
    menuBtnRef.classList.add('visually-hidden');
  }
}
