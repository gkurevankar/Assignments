import { Page } from "@playwright/test";
import loginPage from '../page-elements/login-page-elements.json' with { type: "json" };
import { WebCommons } from "../../commons/ui/web-commons.ts";
import config from '../../config/config.json' with { type: "json" };

export class LoginPageSteps {
    page: Page;
    webCommons: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.webCommons=new WebCommons(this.page);
    }
    //method to launch the application
    async launchApplication() {
        await this.webCommons.launchApplication(config.app.url, config.app.title);
    }
}
