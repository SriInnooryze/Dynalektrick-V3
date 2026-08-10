const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT = path.resolve(__dirname, '../../');
const BIN_DIR = path.join(ROOT, '.bin');
const IS_WIN = process.platform === 'win32';
const FFMPEG_BIN = IS_WIN ? path.join(BIN_DIR, 'ffmpeg.exe') : path.join(BIN_DIR, 'ffmpeg');

function checkSystemFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return 'ffmpeg';
  } catch (err) {
    if (fs.existsSync(FFMPEG_BIN)) {
      return FFMPEG_BIN;
    }
    return null;
  }
}

async function getFFmpegPath() {
  const sysPath = checkSystemFFmpeg();
  if (sysPath) return sysPath;

  console.log('[ensure-ffmpeg] System ffmpeg not found. Installing static ffmpeg binary to .bin...');
  if (!fs.existsSync(BIN_DIR)) {
    fs.mkdirSync(BIN_DIR, { recursive: true });
  }

  // Use @ffmpeg-installer static binaries if available or fetch
  try {
    const pkg = IS_WIN ? '@ffmpeg-installer/win32-x64' : '@ffmpeg-installer/linux-x64';
    const installedPath = require.resolve(`${pkg}/ffmpeg${IS_WIN ? '.exe' : ''}`);
    if (fs.existsSync(installedPath)) {
      console.log(`[ensure-ffmpeg] Found static ffmpeg via ${pkg} at: ${installedPath}`);
      return installedPath;
    }
  } catch (e) {
    console.warn('[ensure-ffmpeg] @ffmpeg-installer module not found:', e.message);
  }

  return null;
}

module.exports = { getFFmpegPath, FFMPEG_BIN };
