import { onHeaderMenuBtnClick } from "./onHeaderMenuBtnClick.js";
import { onHeaderLinksClick } from "./onHeaderLinksClick.js";
import { fixHeaderPosition } from "./fixHeaderPosition.js";

export async function onHeaderLoad() {
  const headerRef = document.getElementById('header');

  fixHeaderPosition(headerRef);
  onHeaderMenuBtnClick();
  onHeaderLinksClick();

  window.addEventListener('resize', ()=>fixHeaderPosition(headerRef));
  window.addEventListener('resize', onHeaderMenuBtnClick);
}



