import { cards } from '../../../db/services-data.js';
import loadTemplate from '../common/loadTemplate.js';
import addMarkup from '../common/addMarkupFromTemplate.js';

export async function makeServicesSectionMarkup(containerId, tmpLink) {
  const ref = document.getElementById(containerId);
  const cardsTmp = await loadTemplate(tmpLink);

  if (!cards) return;

  addMarkup(ref, cardsTmp, cards);
}
