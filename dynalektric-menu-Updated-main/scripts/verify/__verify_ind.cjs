/**
 * scripts/verify/__verify_ind.cjs
 * Verification script for Industries page hero screenshot & layout.
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });
  await page.goto('http://localhost:8877/industries-applications.html', { waitUntil: 'networkidle0' });
  const sec = await page.waitForSelector('.page-hero--split');
  await sec.screenshot({ path: 'ind-hero-full-1400.png' });
  const el = await page.$('.page-hero-visual');
  const box = await el.evaluate(e => {
    const r = e.getBoundingClientRect();
    const img = e.querySelector('img');
    const ir = img.getBoundingClientRect();
    const parent = e.parentElement.getBoundingClientRect();
    return { box:[r.width,r.height,r.left,r.right], img:[ir.width,ir.height], parent:[parent.width, parent.left, parent.right] };
  });
  console.log(JSON.stringify(box));
  await browser.close();
})();
