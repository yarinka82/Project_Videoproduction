export function btnRedirect(buttons, baseUrl) {
  const clickCounts = new Map();
  let activeButton = null;

  buttons.forEach((button) => {
    clickCounts.set(button, 0);

    button.addEventListener("click", (e) => {
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
          "_blank",
          "noopener,noreferrer"
        );
        clickCounts.set(button, 0);
        activeButton = null;
      }
    });
  });

  document.addEventListener("click", () => {
    if (activeButton) {
      clickCounts.set(activeButton, 0);
      activeButton = null;
    }
  });
}
