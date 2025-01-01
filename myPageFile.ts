import { expect, Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export class LogInPage {
    //Functionality - 1
    //Navigation to the login page
    async navigateToLoginPage(url) {
        await fixture.page.goto(url, { timeout: 5000 });
        await fixture.page.waitForLoadState();
    }

    //Functionality - 2
    //Validation of web element on the page
    async ValidatePageWebElement(locator: Locator): Promise<boolean> {
        console.log(`Validating`);
        const isVisible: boolean = await locator.isVisible();
        if (isVisible) {
            return true;
        }
        else {
            return false;
        }

    }

    //Validation of web elements on the page
    async ValidatePageWebElements(locators: Locator[]) {
        let visibleElements: number = 0;
        let totalElements: number = 0;
        for (const a of locators) {
            const isVisible: boolean = await a.isVisible();
            if (isVisible) {
                visibleElements = visibleElements + 1;
            }
            else {
                console.log(`Element ${a} is not visible on the page`);
            }
            totalElements = totalElements + 1;
        }
        console.log(`Found ${visibleElements} elements on the page out of ${totalElements} elements`);
    }

    //Functionality - 3
    //Log in functionality
    async logInFunctionality(UserName: string, Password: string) {
        await fixture.page.getByPlaceholder('Username').fill(UserName);
        await fixture.page.getByPlaceholder('Password').fill(Password);
        await fixture.page.getByRole('button', { name: 'Login' }).click();
        await fixture.page.waitForTimeout(2000);
        if (await fixture.page.getByRole('heading', { name: 'Dashboard' }).isVisible()) {
            console.log(' Success! User is able to login and redirected to dashboard page');
        }
        else if (await fixture.page.getByText('Invalid credentials').isVisible()) {
            console.log(' Failure! User is not able to login due to invalid credentials');
        }
        else {
            console.log(' Failure! User is not able to login due to some other reason');
        }
    }

    //Functionality - 4
    //Forget password functionality
    async forgetPasswordFunctionality(username) {

        await fixture.page.getByText('Forgot your password?').click();

        //Forget password button
        const forgetPasswordButton = await fixture.page.getByRole('button', { name: 'Reset Password' });
        if (this.ValidatePageWebElement(forgetPasswordButton)) {
            console.log(' Success! Forget password button Working');
        }
        else {
            console.log(' Failure! Forget password button not Working');
        }

        //cancel button
        await fixture.page.getByRole('button', { name: 'Cancel' }).click();
        const cancelButton = await fixture.page.getByRole('button', { name: 'Cancel' });
        if (this.ValidatePageWebElement(cancelButton)) {
            console.log(' Success! cancel button Working');
        }
        else {
            console.log(' Failure! cancel button not Working');
        }

        await fixture.page.getByText('Forgot your password?').click();

        //reset password button
        await fixture.page.getByPlaceholder('Username').fill(username);
        await fixture.page.getByRole('button', { name: 'Reset Password' }).click();
        const resetButton = await fixture.page.getByRole('button', { name: 'Reset Password' });
        if (this.ValidatePageWebElement(resetButton)) {
            console.log(' Success! reset button Working');
        }
        else {
            console.log(' Failure! Reset button not Working');
        }
    }
    //Forget password functionality validation
    async forgetPasswordValidation() {
        const Validation = await fixture.page.getByRole('heading', { name: 'Reset Password link sent successfully' });
        if (this.ValidatePageWebElement(Validation)) {
            console.log(' Success! Reset password link sent successfully');
        }
        else {
            console.log(' Failure! Reset password link not sent successfully');
        }
    }


    //log in page elements validation
    async ValidateLogInPageWebElements() {
        //List of web elements on the login page to be validated
        const locators = [
            fixture.page.getByRole('img', { name: 'company-branding' }),
            fixture.page.getByRole('img', { name: 'orangehrm-logo' }),
            fixture.page.getByRole('heading', { name: 'Login' }),
            fixture.page.getByText('Username : Admin'),
            fixture.page.getByText('Password : admin123'),
            fixture.page.getByText('Username', { exact: true }),
            fixture.page.getByPlaceholder('Username'),
            fixture.page.getByText('Password', { exact: true }),
            fixture.page.getByPlaceholder('Password'),
            fixture.page.getByRole('button', { name: 'Login' }),
            fixture.page.getByText('Forgot your password?'),
            fixture.page.getByRole('link').first(),
            fixture.page.getByRole('link').nth(1),
            fixture.page.getByRole('link').nth(2),
            fixture.page.getByRole('link').nth(3)
        ];
        await this.ValidatePageWebElements(locators);
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

    async ValidateDashboardPageWebElements() {

        //List of web elements on the dashboard page to be validated
        const elements = [
            //top 5 elements
            fixture.page.getByRole('heading', { name: 'Dashboard' }),
            fixture.page.getByRole('button', { name: 'Upgrade' }),
            fixture.page.getByRole('banner').getByRole('img', { name: 'profile picture' }),
            //fixture.page.getByText('OMAR Mohamed'),
            fixture.page.getByText('John Doe'),
            //fixture.page.getByRole('listitem').filter({ hasText: 'OMAR Mohamed' }).locator('i'),
            fixture.page.getByRole('listitem').filter({ hasText: 'John Doe' }).locator('i'),

            //left side 15 elements
            fixture.page.getByRole('button', { name: '' }),
            fixture.page.getByRole('link', { name: 'client brand banner' }),
            fixture.page.getByPlaceholder('Search'),
            fixture.page.getByRole('link', { name: 'Admin' }),
            fixture.page.getByRole('link', { name: 'PIM' }),
            fixture.page.getByRole('link', { name: 'Leave' }),
            fixture.page.getByRole('link', { name: 'Time' }),
            fixture.page.getByRole('link', { name: 'Recruitment' }),
            fixture.page.getByRole('link', { name: 'My Info' }),
            fixture.page.getByRole('link', { name: 'Performance' }),
            fixture.page.getByRole('link', { name: 'Dashboard' }),
            fixture.page.getByRole('link', { name: 'Directory' }),
            fixture.page.getByRole('link', { name: 'Maintenance' }),
            fixture.page.getByRole('link', { name: 'Claim' }),
            fixture.page.getByRole('link', { name: 'Buzz' })
        ];

        await this.ValidatePageWebElements(elements);
    }

    async dashboardProfileDropDown() {

        //Profile
        //fixture.page.getByText('Shehan user').click();
        await fixture.page.getByText('Shehan Doe').click();
        if (await fixture.page.getByRole('menuitem', { name: 'About' }).isVisible()) {
            console.log(' Success! ProfileDropDown is working');
        }
        else {
            console.log(' Failure! ProfileDropDown is not working');
        }

        //About
        await fixture.page.getByText('Shehan Doe').click();
        await fixture.page.getByRole('menuitem', { name: 'About' }).click();
        if (await fixture.page.getByRole('heading', { name: 'About' }).isVisible()) {
            console.log(' Success! About is working');
        }
        else {
            console.log(' Failure! About is not working');
        }
        const closeButton = fixture.page.getByRole('button', { name: '×' });
        await closeButton.click();

        //await fixture.page.getByText('John Doe').click();
        //Support
        console.log('Support 1');
        await fixture.page.getByRole('menuitem', { name: 'Support' }).click();
        //await fixture.page.waitForLoadState();
        console.log('Support 2');
        if (await fixture.page.getByRole('heading', { name: 'Getting Started with OrangeHRM' }).isVisible()) {
            console.log(' Success! Support is working');
        }
        else {
            console.log(' Failure! Support is not working');
        }

        await fixture.page.getByText('John Doe').click();
        console.log('Change Password');
        //Change Password
        await fixture.page.getByRole('menuitem', { name: 'Change Password' }).click();
        if (await fixture.page.getByRole('heading', { name: 'Update Password' }).isVisible()) {
            console.log(' Success! Change Password is working');
        }
        else {
            console.log(' Failure! Change Password is not working');
        }


        await fixture.page.getByText('John Doe').click();
        //logout
        fixture.page.getByRole('menuitem', { name: 'Logout' }).click();
        if (await fixture.page.getByRole('heading', { name: 'Login' }).isVisible()) {
            console.log(' Success! Logout is working');
        }
        else {
            console.log(' Failure! Logout is not working');
        }
    }
}