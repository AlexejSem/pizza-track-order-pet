import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { TimeoutHelper } from '../helpers/timeoutHelper';

export class MainMenuPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private get menuLink(): Locator {
        return this.page.getByRole('link', {
            name: 'Menu',
        })
    }

    async openPage(): Promise<void> {
        await this.page.goto('http://localhost:5173/');
    }

    async checkIfMenuLinkDisplayed(): Promise<void> {
        await expect(this.menuLink).toBeVisible({
            timeout: TimeoutHelper.tenSeconds,
        });
    }


}
