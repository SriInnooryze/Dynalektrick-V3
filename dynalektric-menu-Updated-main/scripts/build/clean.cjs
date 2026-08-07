/**
 * scripts/build/clean.cjs
 * Cleans the build/ output directory before a fresh build.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const BUILD_DIR = path.join(ROOT, 'build');

const PUBLIC_BUILD_DIR = path.join(ROOT, 'public/build');

if (fs.existsSync(BUILD_DIR)) {
  fs.rmSync(BUILD_DIR, { recursive: true, force: true });
  console.log('[clean] Cleared build/ directory.');
} else {
  console.log('[clean] build/ directory does not exist.');
}

if (fs.existsSync(PUBLIC_BUILD_DIR)) {
  fs.rmSync(PUBLIC_BUILD_DIR, { recursive: true, force: true });
  console.log('[clean] Cleared public/build/ directory.');
}

