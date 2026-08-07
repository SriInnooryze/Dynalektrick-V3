/**
 * scripts/build/move-legacy-root.cjs
 * Moves assets to public/assets and removes legacy root files.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const ASSETS_SRC = path.join(ROOT, 'assets');
const ASSETS_DEST = path.join(ROOT, 'public/assets');

if (fs.existsSync(ASSETS_SRC)) {
  if (!fs.existsSync(ASSETS_DEST)) {
    fs.mkdirSync(ASSETS_DEST, { recursive: true });
  }
  fs.cpSync(ASSETS_SRC, ASSETS_DEST, { recursive: true });
  console.log('[move-legacy-root] ✓ Assets copied to public/assets');
}

const LEGACY_FILES_TO_REMOVE = [
  'page-home.jsx',
  'page-about.jsx',
  'page-products.jsx',
  'page-contact.jsx',
  'page-industries.jsx',
  'page-export.jsx',
  'page-export-data.jsx',
  'page-rnd.jsx',
  'header.jsx',
  'shared.jsx',
  'image-slot.js',
  'tweaks-panel.jsx',
  'app.jsx',
  'styles.css',
  'page-styles.css',
  'export-styles.css',
  'build-js.cjs',
  'prerender.cjs',
  '__verify_ind.cjs',
  'index.html',
  'about.html',
  'contact.html',
  'export.html',
  'products-solutions.html',
  'innovation-rd.html',
  'industries-applications.html',
  'robots.txt',
  'sitemap.xml',
  'ind-hero-full-1400.png'
];

let removedCount = 0;
for (const file of LEGACY_FILES_TO_REMOVE) {
  const filePath = path.join(ROOT, file);
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath, { force: true, recursive: true });
    removedCount++;
    console.log(`[move-legacy-root] Removed legacy root file: ${file}`);
  }
}

console.log(`[move-legacy-root] Cleanup complete. Removed ${removedCount} legacy file(s).`);
