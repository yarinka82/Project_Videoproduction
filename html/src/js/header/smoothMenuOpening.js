export function smoothMenuOpening(elem) {
  const menuRef = document.getElementById('header-menu');

  elem.addEventListener('click', () => {
    if (menuRef.style.maxHeight) {
      // Закрытие
      menuRef.style.maxHeight = null;
    } else {
      // Открытие — задаём реальную высоту контента
      menuRef.style.maxHeight = menuRef.scrollHeight + 'px';
    }
  });
}
