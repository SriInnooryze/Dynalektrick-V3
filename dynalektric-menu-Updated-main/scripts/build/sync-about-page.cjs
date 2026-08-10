const fs = require('fs');
const path = require('path');

delete require.cache[require.resolve('../prerender/prerender.cjs')];
process.argv = [process.argv[0], process.argv[1], 'production'];
require('../prerender/prerender.cjs');

console.log('[sync-about-page] ✓ Prerender complete!');
