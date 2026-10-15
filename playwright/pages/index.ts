import { Page } from '@playwright/test';
import { MainMenuPage } from './mainMenu.page';


export class Pages {
    private readonly page: Page;
    private _mainMenu?: MainMenuPage

    constructor(page: Page) {
        this.page = page;
    }

    get mainMenu(): MainMenuPage {
        return (this._mainMenu ??= new MainMenuPage(this.page));
    }
}

export { MainMenuPage };
