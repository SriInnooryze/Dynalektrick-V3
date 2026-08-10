const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const VIDEO_PATH = path.join(ROOT, 'public', 'videos', 'Dynalektric_Hero.mp4');
const OUT_INFO = path.join(__dirname, 'video-info.json');

const stats = fs.statSync(VIDEO_PATH);
const result = {
  filePath: VIDEO_PATH,
  sizeBytes: stats.size,
  sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
};

try {
  const probeOutput = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${VIDEO_PATH}"`, { encoding: 'utf8' });
  result.probe = JSON.parse(probeOutput);
} catch (err) {
  result.error = err.message;
}

fs.writeFileSync(OUT_INFO, JSON.stringify(result, null, 2), 'utf8');
console.log('[inspect-video] Wrote video info to video-info.json');
