import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LogInPage } from "../../pages/myPageFile";
let loginpage : LogInPage;

//navigate to url
Given('User Navigate to {string}', async function (url:string) {
    loginpage = new LogInPage();
    await loginpage.navigateToLoginPage(url);
});
//console for log in page
When('User is on LogIn Page', async function () {
    console.log(' User is on log in page');
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
//validate log in page elements
Then('User should see LogIn Page Elements', async function () {
    loginpage = new LogInPage();
    await loginpage.ValidateLogInPageWebElements();
});

Then('User should redirect to respective pages', async function () {
    loginpage = new LogInPage();
    loginpage.logInPageFooterIcons();
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