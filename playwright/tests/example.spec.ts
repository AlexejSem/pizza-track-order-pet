import { test, expect } from '@playwright/test';
import { Pages } from '../pages';


test.describe('Menu tests suite', () => {
  test('should load the menu page', async ({ page }) => {
    const pizzaOrder = new Pages(page);

    await pizzaOrder.mainMenu.openPage();
    await expect(page).toHaveTitle(/Pizza Pet/i);
    await pizzaOrder.mainMenu.checkIfMenuLinkDisplayed();
  });

})
