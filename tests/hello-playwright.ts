import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://faithnguyen.vercel.app/');
  await page.getByRole('button', { name: 'About' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#projects div').filter({ hasText: 'E-Commerce Art NEXT.js | MongoDB | AxiosFull stack e-commerce site with an admin' }).nth(2).click();
  const page1 = await page1Promise;
  await page.locator('#projects div').filter({ hasText: 'E-Commerce Art NEXT.js | MongoDB | AxiosFull stack e-commerce site with an admin' }).nth(1).click();
  await page.getByPlaceholder('Name').click();
});