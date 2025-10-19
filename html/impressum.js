import { loadHTML } from './src/js/common/htmlBundler.js';
import { onMenuClick } from './src/js/header/onMenuClick.js';
import { onHeaderLoad } from './src/js/header/onHeaderLoad.js';
import { BLOCK_TYPE } from './src/js/common/constants.js';

// Partials bundlingh
await loadHTML(BLOCK_TYPE.HEADER, './src/partials/header.html');
await loadHTML(BLOCK_TYPE.SECTION, './src/partials/impressum.html');
await loadHTML(BLOCK_TYPE.FOOTER, './src/partials/footer.html');

// Section rendering
onHeaderLoad()
onMenuClick();
