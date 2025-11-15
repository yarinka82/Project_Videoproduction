import { cards } from '../../../db/data.js';
import loadTemplate from '../common/loadTemplate.js';
import addMarkup from '../common/addMarkupFromTemplate.js';
import { startObserver } from '../common/observer.js';

export async function makeAdvantagesSectionMarkup(containerId, tmpLink) {
  const ref = document.getElementById(containerId);
  const cardsTmp = await loadTemplate(tmpLink);

  if (!cards) return;

  Handlebars.registerHelper('alternatingClass', function (index, class1, class2) {
    return (index % 2 !== 0) ? class1 : class2;
  });

  addMarkup(ref, cardsTmp, cards);
  startObserver('.slide-item');
}
