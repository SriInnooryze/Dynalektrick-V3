/**
 * scripts/optimize/copy-assets.cjs
 * Copies static assets, public folder, and documents to build/dist outputs.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const ASSETS_DIR = path.join(ROOT, 'assets');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

if (fs.existsSync(ASSETS_DIR)) {
  fs.cpSync(ASSETS_DIR, path.join(DIST_DIR, 'assets'), { recursive: true });
  console.log('[copy-assets] ✓ Copied assets to dist/assets');
}

if (fs.existsSync(PUBLIC_DIR)) {
  fs.cpSync(PUBLIC_DIR, path.join(DIST_DIR, 'public'), { recursive: true });
  console.log('[copy-assets] ✓ Copied public to dist/public');
}
