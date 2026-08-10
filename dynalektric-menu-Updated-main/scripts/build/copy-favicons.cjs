const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const PUBLIC_ASSETS = path.join(ROOT, 'public', 'assets');
const PUBLIC_DIR = path.join(ROOT, 'public');

const FAVICONS = [
  'dynalektric-favicon-32x32.svg',
  'dynalektric-favicon-192x192.svg',
  'dynalektric-apple-touch-icon-180x180.svg'
];

for (const fav of FAVICONS) {
  const src = path.join(PUBLIC_ASSETS, fav);
  const dest = path.join(PUBLIC_DIR, fav);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[copy-favicons] Copied ${fav} to public/`);
  } else {
    console.warn(`[copy-favicons] Could not find ${src}`);
  }
}
