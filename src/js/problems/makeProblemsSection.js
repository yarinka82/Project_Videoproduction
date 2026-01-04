import { cards } from '../../../db/problems.js';
import loadTemplate from '../common/loadTemplate.js';
import addMarkup from '../common/addMarkupFromTemplate.js';
import { startObserver } from '../common/observer.js';
import { addImgContentToCard } from './addImgContentToCards.js';

const TMP_LINKS = {
  tmp1: 'src/template/problems-card1-img-content.hbs',
  tmp2: 'src/template/problems-card2-img-content.hbs',
  tmp3: 'src/template/problems-card3-img-content.hbs'
};

export async function makeProblemsSectionMarkup(containerId, tmpLink) {
  const ref = document.getElementById(containerId);
  const cardsTmp = await loadTemplate(tmpLink);

  if (!cards) return;

  await addMarkup(ref, cardsTmp, cards);
  startObserver('.slide-problem-item', false, 'visible', true);

  const contentThumbRefs = document.querySelectorAll('#problems-card-image-tmb');

  await addImgContentToCard(contentThumbRefs, Object.values(TMP_LINKS));
}
