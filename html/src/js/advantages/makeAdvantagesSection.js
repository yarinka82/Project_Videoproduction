import { cards } from '../../../db/data.js';
import loadTemplate from './loadTemplate.js';
import addMarkup from './addMarkup.js';
import { startObserver } from '../common/observer.js';

export async function makeAdvantagesSectionMarkup(containerId, tmpLink) {
  const ref = document.getElementById(containerId);
  const cardsTmp = await loadTemplate(tmpLink);

  if (!cards) return;

  addMarkup(ref, cardsTmp, cards);
  startObserver('.slide-item');
}
