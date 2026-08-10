/**
 * scripts/build/build-js.cjs — Dynalektric build-time JSX transpiler & bundler
 */

'use strict';

const { transformSync, buildSync } = require('esbuild');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const BUILD_DIR = path.join(ROOT, 'build');
const STYLES_DIR = path.join(ROOT, 'src/styles');

// Recover missing CSS files from V2 backup if necessary
const V2_ROOT = path.resolve(ROOT, '../../dynalektric-menu-Updated-main_V2/dynalektric-menu-Updated-main');
const REQUIRED_CSS = ['styles.css', 'page-styles.css', 'export-styles.css'];

if (!fs.existsSync(STYLES_DIR)) {
  fs.mkdirSync(STYLES_DIR, { recursive: true });
}

for (const cssFile of REQUIRED_CSS) {
  const targetPath = path.join(STYLES_DIR, cssFile);
  if (!fs.existsSync(targetPath)) {
    const v2Path = path.join(V2_ROOT, cssFile);
    if (fs.existsSync(v2Path)) {
      fs.copyFileSync(v2Path, targetPath);
      console.log(`[build-js] ✓ Restored missing ${cssFile} from backup (${fs.statSync(targetPath).size} bytes)`);
    } else {
      console.warn(`[build-js] ⚠️ Could not find backup for ${cssFile} at ${v2Path}`);
    }
  }
}

// Execute legacy root cleanup & assets migration
require('./cleanup-root.cjs');
require('./copy-favicons.cjs');
require('./sync-image-slot.cjs');

const JSX_MAPPING = [
  { output: 'tweaks-panel.js', bundle: false, candidates: [path.join(ROOT, 'src/components/layout/TweaksPanel.jsx')] },
  { output: 'shared.js', bundle: true, candidates: [path.join(ROOT, 'src/components/common/shared.jsx')] },
  { output: 'header.js', bundle: false, candidates: [path.join(ROOT, 'src/components/layout/Header.jsx')] },
  { output: 'page-home.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Home/index.jsx')] },
  { output: 'page-about.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/About/index.jsx')] },
  { output: 'page-contact.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Contact/index.jsx')] },
  { output: 'page-products.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Products/index.jsx')] },
  { output: 'page-rnd.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Innovation/index.jsx')] },
  { output: 'page-industries.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Industries/index.jsx')] },
  { output: 'page-export-data.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Export/data.jsx')] },
  { output: 'page-export.js', bundle: false, candidates: [path.join(ROOT, 'src/pages/Export/index.jsx')] },
  { output: 'app.js', bundle: true, candidates: [path.join(ROOT, 'src/app.jsx')] },
];

if (!fs.existsSync(BUILD_DIR)) {
  fs.mkdirSync(BUILD_DIR, { recursive: true });
}

let errorCount = 0;

for (const entry of JSX_MAPPING) {
  let sourcePath = null;
  for (const cand of entry.candidates) {
    if (fs.existsSync(cand)) {
      sourcePath = cand;
      break;
    }
  }

  if (!sourcePath) {
    console.warn(`[build-js] Skipping missing file for target: ${entry.output}`);
    continue;
  }

  const outputPath = path.join(BUILD_DIR, entry.output);

  try {
    if (entry.bundle) {
      buildSync({
        entryPoints: [sourcePath],
        outfile: outputPath,
        bundle: true,
        format: 'iife',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        target: 'es2017',
        sourcemap: false,
        minify: false,
      });
      console.log(`[build-js] ✓ [bundled] ${path.relative(ROOT, sourcePath)} → build/${entry.output} (${fs.statSync(outputPath).size} bytes)`);
    } else {
      const source = fs.readFileSync(sourcePath, 'utf8');
      const result = transformSync(source, {
        loader: 'jsx',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        target: 'es2017',
        sourcemap: false,
        minify: false,
      });
      let code = result.code;
      // Strip ES module exports from non-bundled scripts so plain <script> tags load without SyntaxError
      code = code.replace(/^export\s+default\s+[^;]+;?/gm, '')
                 .replace(/^export\s+\{[^}]*\};?/gm, '');
      fs.writeFileSync(outputPath, code, 'utf8');
      console.log(`[build-js] ✓ ${path.relative(ROOT, sourcePath)} → build/${entry.output} (${code.length} bytes)`);
    }
  } catch (err) {
    console.error(`[build-js] ✗ Failed to transpile/bundle ${sourcePath}:`, err.message);
    errorCount++;
  }
}

// Copy image-slot.js to build/ and public/
const imageSlotSrc = path.join(ROOT, 'src/components/media/image-slot.js');
if (fs.existsSync(imageSlotSrc)) {
  fs.copyFileSync(imageSlotSrc, path.join(BUILD_DIR, 'image-slot.js'));
  const publicDir = path.join(ROOT, 'public');
  if (fs.existsSync(publicDir)) {
    fs.copyFileSync(imageSlotSrc, path.join(publicDir, 'image-slot.js'));
  }
  console.log('[build-js] ✓ Copied image-slot.js to build/ and public/');
}

// Sync build/ outputs and src/styles/ CSS files into public/ for Live Server / dev preview compatibility
const PUBLIC_DIR = path.join(ROOT, 'public');
if (fs.existsSync(PUBLIC_DIR)) {
  const publicBuildDir = path.join(PUBLIC_DIR, 'build');
  if (!fs.existsSync(publicBuildDir)) {
    fs.mkdirSync(publicBuildDir, { recursive: true });
  }
  fs.cpSync(BUILD_DIR, publicBuildDir, { recursive: true });
  console.log('[build-js] ✓ Synced build/ output to public/build/');

  if (fs.existsSync(STYLES_DIR)) {
    const cssFiles = fs.readdirSync(STYLES_DIR).filter(f => f.endsWith('.css'));
    for (const cssFile of cssFiles) {
      fs.copyFileSync(path.join(STYLES_DIR, cssFile), path.join(PUBLIC_DIR, cssFile));
    }
    console.log('[build-js] ✓ Synced src/styles/ CSS files to public/');
  }
}

if (errorCount > 0) {
  console.error(`[build-js] Build failed with ${errorCount} error(s).`);
  process.exitCode = 1;
} else {
  console.log('[build-js] All JSX files transpiled/bundled and synced successfully.');
}


