const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newContext({ viewport: { width: 1440, height: 1000 } }).then(c => c.newPage());
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

  await page.goto('http://localhost:3000/alfabetizacion-mediatica', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '_hero.png', clip: { x: 0, y: 0, width: 1440, height: 1000 } });

  const total = await page.evaluate(() => document.body.scrollHeight);
  const steps = 10;
  for (let i = 0; i <= steps; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), Math.round((total / steps) * i));
    await page.waitForTimeout(400);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: '_full.png', fullPage: true });

  console.log('ERRORS:', JSON.stringify(errors.slice(0, 20)));
  await browser.close();
})();
