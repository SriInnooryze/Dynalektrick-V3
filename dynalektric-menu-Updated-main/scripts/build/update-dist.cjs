const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const PUBLIC_INDEX = path.join(ROOT, 'public', 'index.html');
const DIST_INDEX = path.join(ROOT, 'dist', 'index.html');

if (fs.existsSync(PUBLIC_INDEX)) {
  fs.copyFileSync(PUBLIC_INDEX, DIST_INDEX);
  console.log('[update-dist] ✓ Updated dist/index.html with latest preloads');
}
