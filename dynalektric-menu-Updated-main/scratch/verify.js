const puppeteer = require('c:/Users/SriBalaji/Pictures/dynalektric-menu-Updated-main_V2/dynalektric-menu-Updated-main/node_modules/puppeteer');

async function testMaps() {
  const browser = await puppeteer.launch({ headless: true });
  
  // Test 1: Current URL in codebase
  const page1 = await browser.newPage();
  const url1 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.2830804704245!2d77.62583052848488!3d12.769318741084197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae69fde1bc74cd%3A0x9dbf3aaa6f14c1c7!2sDynalektric%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1781670618586!5m2!1sen!2sin';
  await page1.goto(url1, { waitUntil: 'networkidle0' });
  const content1 = await page1.content();
  const cardExists1 = content1.includes('place-card') || content1.includes('address') || content1.includes('rating');
  console.log('Current Map URL - Contains place details:', cardExists1);
  
  // Test 2: Alternate URL from Jigani search results
  const page2 = await browser.newPage();
  const url2 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.967812919106!2d77.62534577507348!3d12.753381987455822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b3b55555555%3A0x8677c7d41334005e!2sDynalektric%20Equipment%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1720615569429!5m2!1sen!2sin';
  await page2.goto(url2, { waitUntil: 'networkidle0' });
  const content2 = await page2.content();
  const cardExists2 = content2.includes('place-card') || content2.includes('address') || content2.includes('rating');
  console.log('Jigani Map URL - Contains place details:', cardExists2);
  
  // Dump text content of both to see what is rendered
  const text1 = await page1.evaluate(() => document.body.innerText);
  const text2 = await page2.evaluate(() => document.body.innerText);
  console.log('\n=== Rendered Text Current Map ===');
  console.log(text1);
  console.log('\n=== Rendered Text Jigani Map ===');
  console.log(text2);
  
  await browser.close();
}

testMaps().catch(console.error);
