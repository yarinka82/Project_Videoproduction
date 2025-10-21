export function startObserver(selector, callback, classToAdd = "visible") {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeof callback === "function") callback(entry.target);
          entry.target.classList.add(classToAdd);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
