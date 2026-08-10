const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const srcFile = path.join(ROOT, 'src/components/media/image-slot.js');

const targets = [
  path.join(ROOT, 'public', 'image-slot.js'),
  path.join(ROOT, 'public', 'build', 'image-slot.js'),
  path.join(ROOT, 'build', 'image-slot.js'),
  path.join(ROOT, 'dist', 'image-slot.js')
];

if (fs.existsSync(srcFile)) {
  const content = fs.readFileSync(srcFile, 'utf8');
  targets.forEach((t) => {
    const dir = path.dirname(t);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(t, content, 'utf8');
    console.log(`[sync-image-slot] Synced to ${path.relative(ROOT, t)}`);
  });
}
