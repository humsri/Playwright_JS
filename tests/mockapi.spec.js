import { test, expect } from '@playwright/test';

test('Mock API response', async ({ page }) => {
  // Intercept API call
  await page.route('**/api/users', async route => {
    const fakeResponse = {
      users: [
        { id: 1, name: 'Mock User 1' },
        { id: 2, name: 'Mock User 2' }
      ]
    };

    // Respond with fake data instead of calling the real API
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(fakeResponse)
    });
  });

  await page.goto('https://example.com/users');

  // Check that mocked data appears
  const firstUser = page.locator('.user-name').first();
  await expect(firstUser).toHaveText('Mock User 1');
});

// monitoring network requests and responses
test('log all network requests', async ({ page }) => {
  page.on('request', req => console.log('➡️', req.method(), req.url()));
  page.on('response', res => console.log('⬅️', res.status(), res.url()));

  await page.goto('https://example.com');
});