import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LogInPage } from "../../pages/myPageFile";
let loginpage : LogInPage;

Given('User Navigate to LogIn Page', async function () {
    loginpage = new LogInPage();
    await loginpage.navigateToLoginPage();
});
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

Then('User should see LogIn Page Elements', async function () {
    loginpage = new LogInPage();
    await loginpage.ValidateLogInPageElements();
});

Then('User should redirect to respective pages', async function () {
    loginpage = new LogInPage();
    loginpage.logInPageFooterIcons();
});
Then('User should get reset password link', async function () {
    loginpage = new LogInPage();
    loginpage.forgetPasswordValidation();
});