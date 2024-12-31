@LogInPageFeature
Feature: LogIn Page
    Background:
        Given User Navigate to LogIn Page

    @LogInPageElements @tc01
    Scenario: Verify LogIn Page Elements
        When User is on LogIn Page
        Then User should see LogIn Page Elements
    @LogInPageFunctionality @tc02
    Scenario Outline: LogIn with credentials
        When User is on LogIn Page
        And User enters "<UserName>" and "<Password>" Clicks on LogIn Button
        Examples:
            | UserName | Password |
            | Admin    | admin123 |
            | Nothing  | Nothing  |
    @LogInPageElements @tc03
    Scenario: Verify LogIn Page Elements
        When User is on LogIn Page
        And click on footer icons
        Then User should redirect to respective pages
    @ForgotPassword @tc04
    Scenario Outline: Forgot Password Functionality
        When User is on LogIn Page
        And click on Forgot Password and enter "<username>"
        Then User should get reset password link
        Examples:
            | username |
            | Admin    |
