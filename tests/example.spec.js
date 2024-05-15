// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 6,796,000+ articles' }).click();
  await page.getByRole('link', { name: 'Chariot manned torpedoes' }).click();
  await page.getByText('Official development of the').click();
  await page.getByText('From Wikipedia, the free').click();
  await page.screenshot({path: `wiki_screen.png`});
});
