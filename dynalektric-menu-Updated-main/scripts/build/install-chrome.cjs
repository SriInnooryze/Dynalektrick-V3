/**
 * scripts/build/install-chrome.cjs
 * Installs Chrome browser for Puppeteer programmatically via Node.js
 * to avoid shell permission issues on Linux/Render.
 */
const { install, Browser, detectBrowserPlatform, resolveBuildId } = require('@puppeteer/browsers');
const path = require('path');
const os = require('os');

async function installChrome() {
  try {
    const platform = detectBrowserPlatform();
    if (!platform) {
      console.warn('[install-chrome] Could not detect browser platform.');
      return;
    }
    const cacheDir = process.env.PUPPETEER_CACHE_DIR || path.join(os.homedir(), '.cache', 'puppeteer');
    const buildId = await resolveBuildId(Browser.CHROME, platform, 'latest');
    console.log(`[install-chrome] Installing Chrome (${buildId}) to ${cacheDir}...`);
    await install({
      browser: Browser.CHROME,
      buildId,
      cacheDir,
    });
    console.log('[install-chrome] Chrome installed successfully.');
  } catch (err) {
    console.error('[install-chrome] Warning/Error installing Chrome:', err.message);
  }
}

installChrome();
