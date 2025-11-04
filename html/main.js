import { loadHTML } from './src/js/common/htmlBundler.js';
import { makeAdvantagesSectionMarkup } from './src/js/advantages/makeAdvantagesSection.js';
import { fetchVideos } from './src/js/portfolio/fetchVideos.js';

// Partials bundlingh
await loadHTML('header', './src/partials/header.html');

await loadHTML('hero', './src/partials/hero.html');
await loadHTML('advantages', './src/partials/advantages.html');
await loadHTML('portfolio', './src/partials/portfolio.html');
await loadHTML('our_company', './src/partials/our_company.html');
await loadHTML('blog', './src/partials/blog.html');
await loadHTML('faq', './src/partials/faq.html');

await loadHTML('footer', './src/partials/footer.html');

// Section rendering
makeProblemsSectionMarkup('problems-glr', './src/template/problems-cards.hbs');
makeAdvantagesSectionMarkup(
  'advantages-glr',
  './src/template/advantage-cards.hbs'
);

// Portfolio
//fetchVideos();
initializeCategoryToggle();

setTimeout(() => {
  initFaq();
  initPortfolio();
}, 2500);

const buttons = document.querySelectorAll('.direct');
btnRedirect(buttons, baseUrl);

initFormularModal();