import { test, devices } from '@playwright/test';

const iPhone = devices['iPhone 13'];

test.use({
  ...iPhone, // apply iPhone settings (viewport, user agent, etc.)
});

test('open page on iPhone view', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'iphone-view.png', fullPage: true });
});