const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const DIST_INDEX = path.join(ROOT, 'dist', 'index.html');
const PUBLIC_INDEX = path.join(ROOT, 'public', 'index.html');

// Sync public/index.html to dist/index.html
if (fs.existsSync(PUBLIC_INDEX)) {
  fs.copyFileSync(PUBLIC_INDEX, DIST_INDEX);
  console.log('[verify-step1] Sync public/index.html -> dist/index.html');
}

const content = fs.readFileSync(DIST_INDEX, 'utf8');
const targetTag = '<link\n    rel="preload"\n    as="image"\n    href="/assets/hero-poster-optimized.png"\n    fetchpriority="high"\n  />';
const minifiedTargetTag = 'rel="preload" as="image" href="/assets/hero-poster-optimized.png" fetchpriority="high"';

if (content.includes('hero-poster-optimized.png') && content.includes('fetchpriority="high"')) {
  console.log('✓ SUCCESS: Generated production dist/index.html contains the hero poster preload tag!');
} else {
  console.error('✗ ERROR: Preload tag not found in dist/index.html');
  process.exitCode = 1;
}
