export async function onHeaderLoad() {
  toggleNavVisibility();
  fixHeaderPosition();

  window.addEventListener('resize', toggleNavVisibility);
  window.addEventListener('resize', fixHeaderPosition);
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

function fixHeaderPosition() {
  const headerRef = document.getElementById('header');

  if (!headerRef) return;

  if (window.innerWidth >= 1200) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    headerRef.style.transform = `translateX(calc(-50% - ${scrollbarWidth/2}px))`;
  }
}
