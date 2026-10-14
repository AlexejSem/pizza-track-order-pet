import { test, expect } from '@playwright/test';

test('should load the home page', async ({ page }) => {
  // This will navigate to http://localhost:5173/
  await page.goto('/'); 
  await expect(page).toHaveTitle(/Pizza Pet/i);
});