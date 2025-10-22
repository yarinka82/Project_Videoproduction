import { cards } from '../../../db/problems.js';
import loadTemplate from '../common/loadTemplate.js';
import addMarkup from './addMarkup.js';
import { startObserver } from '../common/observer.js';

export async function makeProblemsSectionMarkup(containerId, tmpLink) {
  const ref = document.getElementById(containerId);
  const cardsTmp = await loadTemplate(tmpLink);

  if (!cards) return;

  addMarkup(ref, cardsTmp, cards);
  startObserver('.slide-problem-item', false, 'visible', true);
}
