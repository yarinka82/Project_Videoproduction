import { loadHTML } from './src/js/common/htmlBundler.js';

await loadHTML('header', './src/partials/header.html');

await loadHTML('hero', './src/partials/hero.html');
await loadHTML('advantages', './src/partials/advantages.html');
await loadHTML('portfolio', './src/partials/portfolio.html');
await loadHTML('our_company', './src/partials/our_company.html');
await loadHTML('blog', './src/partials/blog.html');
await loadHTML('faq', './src/partials/faq.html');

await loadHTML('footer', './src/partials/footer.html');
