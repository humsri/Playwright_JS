import { test, expect } from '@playwright/test';

test.describe.parallel('parallel group', () => {
  test('test 1', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });

  test('test 2', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
  });
});