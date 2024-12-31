import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export class LogInPage {

    async navigateToLoginPage() {
        await fixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 10000 });
        // await fixture.page.waitForTimeout(4000);
    }

    async ValidateLogInPageElements() {
        // 15 web elements
        try {
            await fixture.page.getByRole('img', { name: 'company-branding' }).isVisible();
            await fixture.page.getByRole('img', { name: 'orangehrm-logo' }).isVisible();
            await fixture.page.getByRole('heading', { name: 'Login' }).isVisible();
            await fixture.page.getByText('Username : Admin').isVisible();
            await fixture.page.getByText('Password : admin123').isVisible();
            await fixture.page.locator('div').filter({ hasText: /^Username$/ }).nth(2).isVisible();
            await fixture.page.getByPlaceholder('Username').isVisible();
            await fixture.page.locator('div').filter({ hasText: /^Password$/ }).nth(2).isVisible();
            await fixture.page.getByPlaceholder('Password').isVisible();
            await fixture.page.getByRole('button', { name: 'Login' }).isVisible();
            await fixture.page.getByText('Forgot your password?').isVisible();
            await fixture.page.getByRole('link').first().isVisible();
            await fixture.page.getByRole('link').nth(1).isVisible();
            await fixture.page.getByRole('link').nth(2).isVisible();
            await fixture.page.getByRole('link').nth(3).isVisible();
            console.log(' Success! Web element found on the page');
        }
        catch {
            console.log(' Failure! Web element not found');
        }
    }

    async logInFunctionality(UserName: string, Password: string) {
        await fixture.page.getByPlaceholder('Username').fill(UserName);
        await fixture.page.getByPlaceholder('Password').fill(Password);
        await fixture.page.getByRole('button', { name: 'Login' }).click();
        if (await fixture.page.getByRole('heading', { name: 'Dashboard' }).isVisible()) {
            console.log(' Success! User is able to login');
        }
        else {
            console.log(' Failure! User is not able to login due to invalid credentials');
        }
    }

    async logInPageFooterIcons() {
        const [page1] = await Promise.all([
            fixture.page.waitForEvent('popup'),
            fixture.page.getByRole('link').nth(0).click()
        ]);
        await page1.waitForLoadState();
        const url1 = page1.url();
        expect(url1).toContain('linkedin.com');
        console.log(' Success! User is redirected to linkedin page');

        const [page2] = await Promise.all([
            fixture.page.waitForEvent('popup'),
            fixture.page.getByRole('link').nth(1).click()
        ]);
        await page2.waitForLoadState();
        const url2 = page2.url();
        expect(url2).toContain('facebook.com');
        console.log(' Success! User is redirected to facebook page');

        const [page3] = await Promise.all([
            fixture.page.waitForEvent('popup'),
            fixture.page.getByRole('link').nth(2).click()
        ]);
        await page3.waitForLoadState();
        const url3 = page3.url();
        expect(url3).toContain('twitter.com');
        console.log(' Success! User is redirected to twitter page');

        const [page4] = await Promise.all([
            fixture.page.waitForEvent('popup'),
            fixture.page.getByRole('link').nth(3).click()
        ]);
        await page4.waitForLoadState();
        const url4 = page4.url();
        expect(url4).toContain('youtube.com');
        console.log(' Success! User is redirected to youtube page');
    }

    async forgetPasswordFunctionality(username) {
        await fixture.page.getByText('Forgot your password?').click();

        if (await fixture.page.getByRole('heading', { name: 'Reset Password' }).isVisible()){
            console.log(' Success! User is redirected to reset password page');
        }
        else {
            console.log(' Failure! User is not redirected to reset password page');
        }
        await fixture.page.getByPlaceholder('Username').fill(username);
        await fixture.page.getByRole('button', { name: 'Reset Password' }).click();
    }
    async forgetPasswordValidation() {
        if (await fixture.page.getByRole('heading', { name: 'Reset Password link sent successfully' }).isVisible()) {
            console.log(' Success! Reset password link sent successfully');
        }
        else {
            console.log(' Failure! Reset password link not sent successfully');
        }
    }
}