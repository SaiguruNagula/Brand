// Optional local browser QA. No browser/test dependency is added to the app.
// node scripts/check-v1.mjs <playwright-module-dir> <screenshot-dir> [base-url]
import { createRequire } from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const [toolDir, output, base = 'http://127.0.0.1:3000'] = process.argv.slice(2);
if (!toolDir || !output) throw Error('Supply temporary Playwright module directory and screenshot directory.');
const { chromium } = createRequire(path.resolve(toolDir, 'package.json'))('playwright');
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage();
const errors = [];
const network = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
page.on('requestfailed', request => network.push({ url: request.url(), error: request.failure()?.errorText }));
page.on('response', response => { if (response.status() >= 400) network.push({ url: response.url(), status: response.status() }); });
const results = [];
try {
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  for (const width of [1440, 1280, 1024, 768, 430, 390]) {
    await page.setViewportSize({ width, height: width < 500 ? 844 : 900 });
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1100);
    const layout = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, title: document.title }));
    assert(layout.scrollWidth <= width, `Overflow at ${width}: ${layout.scrollWidth}`);
    await page.screenshot({ path: path.join(output, `hero-${width}.png`) });
    const missingAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')).filter(href => !href || !document.getElementById(href.slice(1))));
    assert.deepEqual(missingAnchors, []);
    if (width < 1024) {
      await page.getByRole('button', { name: 'Open navigation', exact: true }).click();
      await page.getByRole('navigation', { name: 'Mobile navigation', exact: true }).getByRole('link', { name: 'Work', exact: true }).click();
      assert.equal(await page.getByRole('navigation', { name: 'Mobile navigation', exact: true }).count(), 0);
    } else {
      await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'Work', exact: true }).click();
    }
    await page.waitForTimeout(600);
    assert(await page.locator('#selected-work').evaluate(el => Math.abs(el.getBoundingClientRect().top) < 180));
    await page.screenshot({ path: path.join(output, `work-${width}.png`) });
    const card = page.locator('#selected-work .project-card').first();
    await card.click();
    assert.equal(await page.locator('dialog[open]').count(), 1);
    await page.screenshot({ path: path.join(output, `modal-${width}.png`) });
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog[open]').count(), 0);
    assert(await card.evaluate(el => el === document.activeElement));
    results.push({ width, overflow: false, navigation: 'pass', modalEscapeAndFocus: 'pass' });
  }
  const filters = page.getByRole('group', { name: 'Filter portfolio' });
  for (const [name, count] of [['Social Media', 6], ['Print', 3], ['Web', 2], ['Branding', 1], ['All', 12]]) {
    await filters.getByRole('button', { name, exact: true }).click();
    assert.equal(await page.locator('#portfolio .project-card').count(), count);
  }
  for (const button of await page.getByRole('group', { name: 'Choose a service' }).getByRole('button').all()) {
    const name = await button.innerText();
    await button.click();
    assert.equal(await page.locator('#service-panel h3').innerText(), name);
  }
  for (const section of ['services', 'portfolio', 'about', 'clients', 'contact']) {
    await page.locator(`#${section}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(output, `${section}-390.png`) });
  }
  const manifest = JSON.parse(await fs.readFile(new URL('./v1-assets-manifest.json', import.meta.url), 'utf8'));
  for (const asset of manifest) {
    const response = await page.request.get(`${base}/${asset.output.replace(/^public\//, '')}`);
    assert.equal(response.status(), 200, asset.output);
    assert(response.headers()['content-type'].startsWith('image/'), asset.output);
  }
  const publicText = await page.locator('body').innerText();
  assert(!/150\+|99\.4|24\/7|2\.4M|200\+|\+168|Amazon|Google|24[–-]48|unlimited|Inquiry sent/i.test(publicText));
  assert.equal(await page.locator('form, input[type="file"], video, a[href="https://instagram.com"], a[href="https://linkedin.com"]').count(), 0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(await page.locator('.v1-marquee').evaluate(el => getComputedStyle(el).animationName), 'none');
  await page.setViewportSize({width:1440,height:900});
  await page.goto(base, {waitUntil:'networkidle'});
  for (const section of ['services','clients']) {
    await page.locator(`#${section}`).scrollIntoViewIfNeeded();
    await page.screenshot({path:path.join(output,`${section}-1440.png`)});
  }
  const result = { results, assets: manifest.length, filters: 'pass', services: 'pass', reducedMotion: 'pass', errors, network };
  await fs.writeFile(path.join(output, 'results.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  assert.deepEqual(errors, [], 'Browser console/runtime errors');
  assert.deepEqual(network, [], 'Failed browser requests');
} finally { await browser.close(); }
