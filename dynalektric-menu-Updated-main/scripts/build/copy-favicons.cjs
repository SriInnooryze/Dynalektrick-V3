const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const PUBLIC_ASSETS = path.join(ROOT, 'public', 'assets');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');

// Use the actual Dynalektric logo PNG (84KB — the real logo, not favicon1.png which is a 2.2MB photo)
const LOGO_PNG = path.join(PUBLIC_ASSETS, 'dynalektric-logo.png');

// Favicon config: filename -> width x height
const FAVICON_CONFIG = [
  { name: 'dynalektric-favicon-32x32.svg',         w: 32,  h: 32,  label: 'Dynalektric favicon 32x32' },
  { name: 'dynalektric-favicon-192x192.svg',        w: 192, h: 192, label: 'Dynalektric favicon 192x192' },
  { name: 'dynalektric-apple-touch-icon-180x180.svg', w: 180, h: 180, label: 'Dynalektric apple touch icon 180x180' }
];

if (!fs.existsSync(LOGO_PNG)) {
  console.error(`[copy-favicons] ❌ Logo PNG not found: ${LOGO_PNG}`);
  process.exit(1);
}

const logoBase64 = fs.readFileSync(LOGO_PNG).toString('base64');

for (const { name, w, h, label } of FAVICON_CONFIG) {
  // Generate a clean SVG that only embeds the logo PNG — no C2PA overlays, no path elements
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <image width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${logoBase64}"/>
</svg>`;

  // Write to public/assets/ (source of truth)
  fs.writeFileSync(path.join(PUBLIC_ASSETS, name), svg, 'utf8');
  console.log(`[copy-favicons] ✓ Generated clean ${name} → public/assets/`);

  // Copy to public/ (for local dev when Live Server serves public/ as root)
  fs.writeFileSync(path.join(PUBLIC_DIR, name), svg, 'utf8');
  console.log(`[copy-favicons] ✓ Wrote ${name} → public/`);

  // Copy to project ROOT (for local dev when Live Server serves project root)
  fs.writeFileSync(path.join(ROOT, name), svg, 'utf8');
  console.log(`[copy-favicons] ✓ Wrote ${name} → project root`);

  // Copy to dist/ (for production deployment)
  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(path.join(DIST_DIR, name), svg, 'utf8');
    console.log(`[copy-favicons] ✓ Wrote ${name} → dist/`);
  }
}

console.log('[copy-favicons] ✅ All clean favicons generated and deployed.');
