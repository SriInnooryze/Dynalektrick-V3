const { transformSync, buildSync } = require('esbuild');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const srcFile = path.join(ROOT, 'src/pages/About/index.jsx');
const buildFile = path.join(ROOT, 'build/page-about.js');
const publicBuildFile = path.join(ROOT, 'public/build/page-about.js');
const distBuildFile = path.join(ROOT, 'dist/build/page-about.js');

const code = fs.readFileSync(srcFile, 'utf8');
const result = transformSync(code, {
  loader: 'jsx',
  target: 'es2020',
  jsx: 'transform',
});

fs.writeFileSync(buildFile, result.code, 'utf8');
if (fs.existsSync(path.dirname(publicBuildFile))) {
  fs.writeFileSync(publicBuildFile, result.code, 'utf8');
}
if (fs.existsSync(path.dirname(distBuildFile))) {
  fs.writeFileSync(distBuildFile, result.code, 'utf8');
}

console.log('[force-rebuild] ✓ Updated page-about.js in build/, public/build/, and dist/build/');
