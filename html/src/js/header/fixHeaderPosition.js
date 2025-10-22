export function fixHeaderPosition() {
  const headerRef = document.getElementById('header');

  if (!headerRef) return;

  if (window.innerWidth >= 1200) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    headerRef.style.transform = `translateX(calc(-50% - ${scrollbarWidth / 2}px))`;
  }
}
