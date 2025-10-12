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
await loadHTML('formular', './src/partials/formular.html');

await loadHTML('footer', './src/partials/footer.html');

// Section rendering
makeAdvantagesSectionMarkup(
  'advantages-glr',
  './src/template/advantage-cards.hbs'
);

fetchVideos();
