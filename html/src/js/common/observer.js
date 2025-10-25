export function startObserver(selector, callback, classToAdd = "visible", delay=false) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (typeof callback === "function") callback(entry.target);

          if (delay) {
            entry.target.style.transitionDelay = `${index * 0.2}s`;
          }

          entry.target.classList.add(classToAdd);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
