const { buildSync } = require('esbuild');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const srcApp = path.join(ROOT, 'src/app.jsx');
const buildApp = path.join(ROOT, 'build/app.js');
const publicApp = path.join(ROOT, 'public/build/app.js');
const distApp = path.join(ROOT, 'dist/build/app.js');

buildSync({
  entryPoints: [srcApp],
  outfile: buildApp,
  bundle: true,
  format: 'iife',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  target: 'es2017',
  sourcemap: false,
  minify: false,
});

fs.copyFileSync(buildApp, publicApp);
if (fs.existsSync(path.dirname(distApp))) {
  fs.copyFileSync(buildApp, distApp);
}

console.log('[bundle-app] ✓ Bundled app.js with About-Hero1.png');

delete require.cache[require.resolve('../prerender/prerender.cjs')];
process.argv = [process.argv[0], process.argv[1], 'production'];
require('../prerender/prerender.cjs');
