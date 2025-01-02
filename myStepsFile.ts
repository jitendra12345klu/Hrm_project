import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LogInPage } from "../../pages/myPageFile";
import { Validation } from "../../pages/validationPage";
let loginpage : LogInPage;
let validation : Validation;


Given('I open OrangeHRM login page', async function () {
    loginpage = new LogInPage();
    await loginpage.navigateToLoginPage();
});

Then('User should see LogIn Page Elements', async function () {
    loginpage = new LogInPage();
    await loginpage.ValidateLogInPageWebElements();
});







When('User enters {string} and {string} Clicks on LogIn Button', async function (UserName:string,Password:string) {
    loginpage = new LogInPage();
    await loginpage.logInFunctionality(UserName,Password);
});

When('click on footer icons', async function () {
    console.log(' click on footer icons');
});

When('click on Forgot Password and enter {string}', async function (username:string) {
    loginpage = new LogInPage();
    await loginpage.forgetPasswordFunctionality(username);
});


When('User navigates to Apply Page', async function () {
    loginpage = new LogInPage();
    await loginpage.navigateToApplyPage();
});
//validate log in page elements


Then('User should redirect to respective pages', async function () {
    validation = new Validation();
    //validation.ValidateLandingPages('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_intro',await fixture.page.locator('#main div').filter({ hasText: 'Example Company Contact Country Alfreds Futterkiste Maria Anders Germany Centro ' }).getByRole('link', { name: 'Try it Yourself »' }));
});

Then('User should get reset password link', async function () {
    loginpage = new LogInPage();
    loginpage.forgetPasswordValidation();
});

Then('User should see Dashboard Elements', async function () {
    loginpage = new LogInPage();
    loginpage.ValidateDashboardPageWebElements();
});

Then('User should see Profile DropDown', async function () {
    loginpage = new LogInPage();
    loginpage.dashboardProfileDropDown();
});

Then('User should see Apply Page Elements', async function () {
    loginpage = new LogInPage();
    loginpage.dashboardProfileDropDown();
});