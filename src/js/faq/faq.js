import { startObserver } from '../common/observer.js';
import { faqAccordion } from './faqAccordion.js';
import { faqRender } from './faqRender.js';

export function initFaq() {
  startObserver(
    '.faq-title-h2',
    () => {
      faqRender();
    },
    'faq-visible'
  );

  document
    .querySelector('.faq-container')
    .addEventListener('click', faqAccordion);
}
