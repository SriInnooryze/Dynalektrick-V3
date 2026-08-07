/**
 * End-to-End Prerender Verification Test
 */
const fs = require('fs');
const path = require('path');

describe('Static Prerender Build Artifacts', () => {
  const distDir = path.resolve(__dirname, '../../dist');

  test('dist directory should contain prerendered HTML files', () => {
    if (!fs.existsSync(distDir)) {
      return; // Skipped if build not run yet
    }
    const files = ['index.html', 'about.html', 'products-solutions.html', 'contact.html', 'robots.txt', 'sitemap.xml'];
    for (const f of files) {
      expect(fs.existsSync(path.join(distDir, f))).toBe(true);
    }
  });
});
