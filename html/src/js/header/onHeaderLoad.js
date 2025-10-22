import { onHeaderMenuBtnClick } from "./onHeaderMenuBtnClick.js";
import { onHeaderLinksClick } from "./onHeaderLinksClick.js";
import { fixHeaderPosition } from "./fixHeaderPosition.js";

export async function onHeaderLoad() {
  fixHeaderPosition();
  onHeaderMenuBtnClick();
  onHeaderLinksClick();

  window.addEventListener('resize', fixHeaderPosition);
  window.addEventListener('resize', onHeaderMenuBtnClick);
}



