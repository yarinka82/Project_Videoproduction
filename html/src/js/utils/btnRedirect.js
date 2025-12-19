let initialized = false;

export function btnRedirect(buttons, baseUrl) {
  if (initialized) return;
  initialized = true;

  const clickCounts = new Map();
  let activeButton = null;

  buttons.forEach((button) => {
    clickCounts.set(button, 0);

    button.addEventListener('pointerdown', (e) => {
      if (!e.isPrimary) return;
      e.stopPropagation();

      if (activeButton !== button) {
        if (activeButton) clickCounts.set(activeButton, 0);
        activeButton = button;
      }

      let count = clickCounts.get(button) + 1;
      clickCounts.set(button, count);

      if (count === 5) {
        const endpoint = button.dataset.endpoint;
        window.open(
          `${baseUrl}/admin/${endpoint}`,
          '_blank',
          'noopener,noreferrer'
        );
        clickCounts.set(button, 0);
        activeButton = null;
      }
    });
  });

  document.addEventListener('pointerdown', () => {
    if (activeButton) {
      clickCounts.set(activeButton, 0);
      activeButton = null;
    }
  });
}
