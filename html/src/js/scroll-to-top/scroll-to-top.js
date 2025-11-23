export const initScrollToTop = () => {
  const btnScrollUp = document.createElement('button');
  btnScrollUp.id = 'scrollToTop';
  btnScrollUp.className = 'scroll-to-top';
  btnScrollUp.title = 'Scroll to top';
  btnScrollUp.setAttribute('aria-label', 'Scroll to top');
  btnScrollUp.setAttribute('title', 'Scroll to top');

  btnScrollUp.innerHTML = `
    <svg class="icon-scroll-to-top" >
      <use xlink:href="./src/img/sprite.svg#select-up"></use>
    </svg>
  `;

  document.body.appendChild(btnScrollUp);

  btnScrollUp.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', () => scrollShow(btnScrollUp));
};

export const scrollShow = (btn) => {
  if (window.scrollY > 500) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
