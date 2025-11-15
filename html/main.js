import { loadHTML } from './src/js/common/htmlBundler.js';
import { makeAdvantagesSectionMarkup } from './src/js/advantages/makeAdvantagesSection.js';
import { onHeaderLoad } from './src/js/header/onHeaderLoad.js';
import { BLOCK_TYPE } from './src/js/common/constants.js';
//import { fetchVideos } from './src/js/portfolio/fetchVideos.js';
import { initializeCategoryToggle } from './src/js/portfolio/toggleCategoriesVisibility.js';
import { initFaq } from './src/js/faq/faq.js';
import { initPortfolio } from './src/js/slaider/portfolio.js';
import { btnRedirect } from './src/js/utils/btnRedirect.js';
import { baseUrl } from './src/js/service.js';
import { makeProblemsSectionMarkup } from './src/js/problems/makeProblemsSection.js';
import { loadSvgSafely } from './src/js/presentation/presentation.js';
import { initFormularModal } from './src/js/formular/formular.js';
import { flipWorkStepCard } from './src/js/work-steps/flipWorkStepCard.js'
import { makeServicesSectionMarkup } from './src/js/services/makeServicesSection.js';

// Partials bundlingh
await loadHTML(BLOCK_TYPE.HEADER, './src/partials/header.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/hero.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/problems.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/presentation.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/advantages.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/portfolio.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/work_steps.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/services.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/our_company.html');
// await loadHTML(BLOCK_TYPE.SECTION, './src/partials/blog.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/faq.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/formular.html');
await loadHTML(BLOCK_TYPE.FOOTER, './src/partials/footer.html');


// Header
onHeaderLoad();

initFormularModal();

// Section rendering
makeProblemsSectionMarkup('problems-glr', './src/template/problems-cards.hbs');
makeAdvantagesSectionMarkup(
  'advantages-glr',
  './src/template/advantage-cards.hbs'
);
makeServicesSectionMarkup('services-glr','./src/template/services-cards.hbs');

// Portfolio
//fetchVideos();
initializeCategoryToggle();
// initFormularModal();

// Formular 
initFormularModal();


setTimeout(() => {
  initFaq();
  initPortfolio();
  loadSvgSafely();
}, 2500);

const buttons = document.querySelectorAll('.direct');
btnRedirect(buttons, baseUrl);

//Work steps section
flipWorkStepCard();
