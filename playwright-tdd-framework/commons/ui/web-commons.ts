import { Page, Locator, expect } from '@playwright/test';

export class WebCommons {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // common method to generate web element from the locator
    element(locator: string): Locator {
        return this.page.locator(locator);
    }

    //common method to launch the application
    async launchApplication(url: string, title: string): Promise<void> {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle(title);
    }

    //common method to scroll to the element
    async scrollToElement(locator: string): Promise<void> {
        const element = this.element(locator);
        await element.scrollIntoViewIfNeeded();
    }

    //common method to click on the element
    async clickElement(locator: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.click();
    }

    //common method to perform mouse hover action on the element
    async hoverOnElement(locator: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.hover();
    }

    //common method to perform right click action on the element
    async rightClickOnElement(locator: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.click({ button: 'right' });
    }

    //common metho to perfomr force click action on the element
    async forceClickOnElement(locator: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.click({ force: true });
    }   
    
    //common method to type text in the input field
    async typeText(locator: string, text: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.clear();
        await element.fill(text);
    } 
    
    //common methos to clear the text from the input field
    async clearText(locator: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.clear();
    }  
    
    //common method to get the text entered in the text box
    async getText(locator: string): Promise<string> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.inputValue();
    }

    //common method to select the an option from the dropdown
    async selectOption(locator: string, option: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.selectOption(option);
    }
    
    //common method to get the selected option from the dropdown
    async getSelectedOption(locator: string): Promise<string> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.inputValue();
    }

    //common method to press a key on the keyboard
    async pressKey(locator: string, key: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.press(key);
    }

    //common method to get the text from an element
    async getElementText(locator: string): Promise<string> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.textContent() || '';
    }

    //common metho to extract the attribute value from the element
    async getElementAttribute(locator: string, attribute: string): Promise<string> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.getAttribute(attribute) || '';
    }

    //common method to uploa a file to an element
    async uploadFile(locator: string, filePath: string): Promise<void> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        await element.setInputFiles(filePath);
    }
    //common method to check if the element is visible on the page
    async isElementVisible(locator: string): Promise<boolean> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.isVisible();
    }   

    //common method to check if the element is enabled on the page
    async isElementEnabled(locator: string): Promise<boolean> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.isEnabled();
    }       

    //common method to verify element is disappeared from the page
    async isElementDisappeared(locator: string): Promise<boolean> {
        const element = this.element(locator);
        await this.scrollToElement(locator);
        return await element.isHidden();
    }  

    //commmon metho to handle the alert pop up
    async handleAlert(action: 'accept' | 'dismiss', texttoenter?: string): Promise<void> {
        this.page.on('dialog', async (dialog) => {
            if (action === 'accept') {
                await dialog.accept(texttoenter);
            } else {
                await dialog.dismiss();
            }
        });
    }
    //common metho to take screenshot of the page
    async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }






}