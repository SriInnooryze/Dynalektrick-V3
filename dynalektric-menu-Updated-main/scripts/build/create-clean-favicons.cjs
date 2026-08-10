const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.join(ROOT, 'public');
const PUBLIC_ASSETS = path.join(ROOT, 'public', 'assets');
const FAVICON_PNG = path.join(PUBLIC_ASSETS, 'favicon1.png');

if (!fs.existsSync(FAVICON_PNG)) {
  console.error('[create-clean-favicons] favicon1.png not found at:', FAVICON_PNG);
  process.exit(1);
}

const base64Png = fs.readFileSync(FAVICON_PNG).toString('base64');
const dataUri = `data:image/png;base64,${base64Png}`;

// Clean SVGs embedding only the 3-bar Dynalektric logo (no C2PA black vector overlays)
const svg32 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" role="img" aria-label="Dynalektric favicon">
  <image width="32" height="32" preserveAspectRatio="xMidYMid meet" href="${dataUri}" />
</svg>`;

const svg192 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" role="img" aria-label="Dynalektric favicon">
  <image width="192" height="192" preserveAspectRatio="xMidYMid meet" href="${dataUri}" />
</svg>`;

const svg180 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" role="img" aria-label="Dynalektric favicon">
  <image width="180" height="180" preserveAspectRatio="xMidYMid meet" href="${dataUri}" />
</svg>`;

fs.writeFileSync(path.join(PUBLIC_ASSETS, 'dynalektric-favicon-32x32.svg'), svg32, 'utf8');
fs.writeFileSync(path.join(PUBLIC_ASSETS, 'dynalektric-favicon-192x192.svg'), svg192, 'utf8');
fs.writeFileSync(path.join(PUBLIC_ASSETS, 'dynalektric-apple-touch-icon-180x180.svg'), svg180, 'utf8');

fs.writeFileSync(path.join(PUBLIC_DIR, 'dynalektric-favicon-32x32.svg'), svg32, 'utf8');
fs.writeFileSync(path.join(PUBLIC_DIR, 'dynalektric-favicon-192x192.svg'), svg192, 'utf8');
fs.writeFileSync(path.join(PUBLIC_DIR, 'dynalektric-apple-touch-icon-180x180.svg'), svg180, 'utf8');

const DIST_DIR = path.join(ROOT, 'dist');
if (fs.existsSync(DIST_DIR)) {
  fs.writeFileSync(path.join(DIST_DIR, 'dynalektric-favicon-32x32.svg'), svg32, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'dynalektric-favicon-192x192.svg'), svg192, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'dynalektric-apple-touch-icon-180x180.svg'), svg180, 'utf8');
}

console.log('[create-clean-favicons] ✓ Successfully created clean Dynalektric favicons from favicon1.png!');
