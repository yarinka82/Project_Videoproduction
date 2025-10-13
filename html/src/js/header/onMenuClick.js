export async function onMenuClick() {
  const btnRef = document.getElementById('menu-btn');

  btnRef.addEventListener('click', clickByMenuBtn);

  smoothMenuOpening(btnRef);
}

function clickByMenuBtn() {
  const menuRef = document.getElementById('header-menu');
  const navRef = document.getElementById('nav');

  menuRef.classList.toggle('isOpened');
  navRef.classList.toggle('visually-hidden');
}

function smoothMenuOpening(btnRef) {
  const menuRef = document.getElementById('header-menu');

  btnRef.addEventListener('click', () => {
    if (menuRef.style.maxHeight) {
      // Закрытие
      menuRef.style.maxHeight = null;
    } else {
      // Открытие — задаём реальную высоту контента
      menuRef.style.maxHeight = menuRef.scrollHeight + 'px';
    }
  });

  menuRef.addEventListener('transitionend', () => {
  if (menuRef.classList.contains('isOpened')) {
    menuRef.style.height = 'auto';
  }
});
}

