import { onClick } from "./onClick.js";
import { smoothMenuOpening } from "./smoothMenuOpening.js";

export function onHeaderMenuBtnClick() {
  const btnRef = document.getElementById('menu-btn');

  if (!btnRef) return;

  btnRef.addEventListener('click', onClick);

  smoothMenuOpening(btnRef);
}
