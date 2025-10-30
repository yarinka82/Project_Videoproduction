export function toggleAdressDescriptionVisibility(descriptionsRefs) {
  if (descriptionsRefs.length === 0) return;

  descriptionsRefs.forEach(el => {
    const isHidden = el.classList.contains('visually-hidden');

    if (window.innerWidth < 450 && !isHidden) {
      el.classList.add('visually-hidden');
      return;
    }

    if (window.innerWidth >= 450 && isHidden) {
      el.classList.remove('visually-hidden');
      return;
    }
  });
}
