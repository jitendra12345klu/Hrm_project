@ApplyPageFeatures
Feature: Apply Page 
    Background:
        #  Given User Navigate to 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
         Given User Navigate to 'https://www.w3schools.com/html/html_tables.asp'

         When User is on LogIn Page
        # And User enters "Admin" and "admin123" Clicks on LogIn Button
        # And User navigates to Apply Page
        @ApplyPageElements @tc001
        Scenario: Verify Apply Page Elements
            # Then User should see Apply Page Elements
            And click on footer icons
            Then User should redirect to respective pages