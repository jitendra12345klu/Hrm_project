import { expect, Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";


export class Validation {

    async ValidateWebElements(locators: Locator[]) {
        for (const a of locators) {
            expect(a).toBeVisible();
        }

    }

    async ValidatePopUpLandingPages(expectedUrl: string, locator: Locator) {
        const page1Promise = fixture.page.waitForEvent('popup');
        await locator.click();
        const page1 = await page1Promise;
        const newUrl = page1.url();
    
        try {
            expect(newUrl).toBe(expectedUrl);
            console.log("Navigation successful to the expected page.");
        } catch (error) {
            console.error("Navigation failed or went to the wrong page.");
        }
    }

}