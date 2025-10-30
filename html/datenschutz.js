import { loadHTML } from './src/js/common/htmlBundler.js';
import { BLOCK_TYPE } from './src/js/common/constants.js';

// Partials bundlingh
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/datenschutz.html');
await loadHTML(BLOCK_TYPE.FOOTER, './src/partials/footer.html');

