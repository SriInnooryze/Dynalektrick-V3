/**
 * copy-css.cjs — Recover original CSS files from V2 backup
 */
const fs = require('fs');
const path = require('path');

const V2_ROOT = path.resolve(__dirname, '../../../dynalektric-menu-Updated-main_V2/dynalektric-menu-Updated-main');
const DEST = path.resolve(__dirname, '../src/styles');

const FILES = ['styles.css', 'page-styles.css', 'export-styles.css'];

if (!fs.existsSync(DEST)) {
  fs.mkdirSync(DEST, { recursive: true });
}

for (const f of FILES) {
  const src = path.join(V2_ROOT, f);
  const dst = path.join(DEST, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
    const stats = fs.statSync(dst);
    console.log(`✓ Copied ${f} (${stats.size} bytes)`);
  } else {
    console.error(`✗ Source not found: ${src}`);
  }
}

console.log('\nDone. Files in src/styles/:');
fs.readdirSync(DEST).forEach(f => {
  const st = fs.statSync(path.join(DEST, f));
  console.log(`  ${f} (${st.size} bytes)`);
});
