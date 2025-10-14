import { loadHTML } from './src/js/common/htmlBundler.js';
import { makeAdvantagesSectionMarkup } from './src/js/advantages/makeAdvantagesSection.js';
import { onMenuClick } from './src/js/header/onMenuClick.js';
import { onHeaderLoad } from './src/js/header/onHeaderLoad.js';
import { BLOCK_TYPE } from './src/js/common/constants.js';
import { fetchVideos } from './src/js/portfolio/fetchVideos.js';
import { initializeCategoryToggle } from './src/js/portfolio/toggleCategoriesVisibility.js';

// Partials bundlingh
await loadHTML(BLOCK_TYPE.HEADER, './src/partials/header.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/hero.html');
await loadHTML(BLOCK_TYPE.SECTION,'./src/partials/advantages.html');
await loadHTML(BLOCK_TYPE.SECTION,'./src/partials/portfolio.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/our_company.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/blog.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/faq.html');
await loadHTML(BLOCK_TYPE.FOOTER, './src/partials/footer.html');

// Section rendering
makeAdvantagesSectionMarkup('advantages-glr', './src/template/advantage-cards.hbs');
onHeaderLoad()
onMenuClick();

// Portfolio
fetchVideos();
initializeCategoryToggle();
