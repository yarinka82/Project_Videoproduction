const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // если хочешь, чтобы появлялся только один раз:
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2 // элемент виден хотя бы на 20%
});

export const startObserver = function (classNameToObserve) {
  document.querySelectorAll(classNameToObserve).forEach(el => observer.observe(el));
};
