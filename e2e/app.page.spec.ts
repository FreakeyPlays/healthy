import { expect, test } from '@playwright/test';

test('Website has Title', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page).toHaveTitle('Healthy');
});
