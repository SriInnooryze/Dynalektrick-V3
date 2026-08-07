/**
 * scripts/build/cleanup-root.cjs
 * Deletes legacy root files to complete enterprise migration.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');

// Ensure assets are copied to public/assets before deleting root assets directory
const ASSETS_SRC = path.join(ROOT, 'assets');
const ASSETS_DEST = path.join(ROOT, 'public/assets');
if (fs.existsSync(ASSETS_SRC)) {
  if (!fs.existsSync(ASSETS_DEST)) {
    fs.mkdirSync(ASSETS_DEST, { recursive: true });
  }
  fs.cpSync(ASSETS_SRC, ASSETS_DEST, { recursive: true });
  console.log('[cleanup-root] ✓ Assets copied to public/assets');
}

const FILES_TO_DELETE = [
  'Dynalektric.html',
  'HOSTING_INSTRUCTIONS.txt',
  '__verify_ind.cjs',
  'about.html',
  'app.jsx',
  'assets',
  'build-js.cjs',
  'contact.html',
  'export-styles.css',
  'export.html',
  'header.jsx',
  'image-slot.js',
  'ind-hero-full-1400.png',
  'index.html',
  'industries-applications.html',
  'innovation-rd.html',
  'page-about.jsx',
  'page-contact.jsx',
  'page-export-data.jsx',
  'page-export.jsx',
  'page-home.jsx',
  'page-industries.jsx',
  'page-products.jsx',
  'page-rnd.jsx',
  'page-styles.css',
  'prerender.cjs',
  'products-solutions.html',
  'robots.txt',
  'shared.jsx',
  'sitemap.xml',
  'styles.css',
  'tweaks-panel.jsx'
];

for (const f of FILES_TO_DELETE) {
  const target = path.join(ROOT, f);
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`[cleanup-root] Deleted ${f}`);
  }
}
