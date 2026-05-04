import { Page } from "@playwright/test";
import cookiesPage from '../page-elements/cookies-page-elements.json' with { type: "json" };
import { WebCommons } from "../../commons/ui/web-commons.ts";
import config from '../../config/config.json' with { type: "json" };

export class CookiesPageSteps {
    page: Page;
    webCommons: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.webCommons=new WebCommons(this.page);
    }
    //method to verify the cookies page is displayed
    async verifyCookiesPageDisplayed() {
        await this.webCommons.isElementVisible(cookiesPage.cookiesHea);
    }
    //method to verify the content of the cookies page
    async verifyCookiesPopupContent() {
        await this.webCommons.isElementVisible(cookiesPage.cookiesContent);
    }
}
