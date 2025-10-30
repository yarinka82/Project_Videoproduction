import { onHeaderMenuBtnClick } from "./onHeaderMenuBtnClick.js";
import { onHeaderLinksClick } from "./onHeaderLinksClick.js";
import { fixHeaderPosition } from "./fixHeaderPosition.js";
import { toggleAdressDescriptionVisibility } from "./toggleAdressDescriptionVisibility.js";

export async function onHeaderLoad() {
  const headerRef = document.getElementById('header');
  const descriptionsRefs = document.querySelectorAll('.header-contacts-link-text');

  fixHeaderPosition(headerRef);
  onHeaderMenuBtnClick();
  onHeaderLinksClick();
  toggleAdressDescriptionVisibility(descriptionsRefs);

  window.addEventListener('resize', ()=>fixHeaderPosition(headerRef));
  window.addEventListener('resize', onHeaderMenuBtnClick);
  window.addEventListener('resize', ()=>toggleAdressDescriptionVisibility(descriptionsRefs));

}



