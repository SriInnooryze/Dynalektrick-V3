const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../');
const INPUT_PATH = path.join(ROOT, 'public', 'videos', 'Dynalektric_Hero.mp4');
const OUTPUT_PATH = path.join(ROOT, 'public', 'videos', 'Dynalektric_Hero_opt.mp4');
const BACKUP_PATH = path.join(ROOT, 'public', 'videos', 'Dynalektric_Hero_original.mp4');
const REPORT_PATH = path.join(__dirname, 'optimization-report.json');

console.log('[optimize-video] Starting video optimization check...');

if (!fs.existsSync(INPUT_PATH)) {
  console.error('[optimize-video] Input file does not exist:', INPUT_PATH);
  process.exit(1);
}

const inputStats = fs.statSync(INPUT_PATH);

// Try running ffmpeg
const ffmpegCmd = `ffmpeg -y -i "${INPUT_PATH}" -an -c:v libx264 -preset medium -crf 27 -movflags +faststart -pix_fmt yuv420p "${OUTPUT_PATH}"`;

try {
  console.log('[optimize-video] Executing ffmpeg optimization...');
  execSync(ffmpegCmd, { stdio: 'inherit' });

  if (fs.existsSync(OUTPUT_PATH)) {
    const outputStats = fs.statSync(OUTPUT_PATH);
    const savedBytes = inputStats.size - outputStats.size;
    const savedPercent = ((savedBytes / inputStats.size) * 100).toFixed(2);

    const report = {
      success: true,
      originalSizeBytes: inputStats.size,
      originalSizeMB: (inputStats.size / (1024 * 1024)).toFixed(2),
      optimizedSizeBytes: outputStats.size,
      optimizedSizeMB: (outputStats.size / (1024 * 1024)).toFixed(2),
      savedPercent: `${savedPercent}%`
    };

    fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf8');
    console.log('[optimize-video] Optimization report:', JSON.stringify(report, null, 2));

    // Replace original video with optimized video (or keep backup)
    if (!fs.existsSync(BACKUP_PATH)) {
      fs.copyFileSync(INPUT_PATH, BACKUP_PATH);
    }
    fs.copyFileSync(OUTPUT_PATH, INPUT_PATH);
    console.log('[optimize-video] Replaced Dynalektric_Hero.mp4 with optimized version!');
  }
} catch (err) {
  console.error('[optimize-video] ffmpeg error:', err.message);
  fs.writeFileSync(REPORT_PATH, JSON.stringify({ success: false, error: err.message }, null, 2), 'utf8');
}
