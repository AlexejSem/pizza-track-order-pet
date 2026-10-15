import { Page } from '@playwright/test';

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async reload(): Promise<void> {
        await this.page.reload();
    }

    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    async getUrl(): Promise<string> {
        return this.page.url();
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async waitForLoadState(
        state:
            | 'load'
            | 'domcontentloaded'
            | 'networkidle'
            = 'load'
    ): Promise<void> {
        await this.page.waitForLoadState(state);
    }

    async waitForUrl(url: string | RegExp): Promise<void> {
        await this.page.waitForURL(url);
    }


    async takeScreenshot(name: string): Promise<void> {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true,
        });
    }
}