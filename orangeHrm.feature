@orangehrm
Feature: OrangeHRM
  Background:
    Given I open OrangeHRM login page
  @LogInPageElements @testcase01
  Scenario: Verify LogIn Page Elements
    Then User should see LogIn Page Elements


  Scenario: OrangeHRM Login Functionality
    Given I open OrangeHRM login page
    When I enter username as "Admin" and password as "admin123"
    And I click on login button
    Then I successfully logged in
  Scenario: OrangeHRM Dashboard Functionality
    Given I open OrangeHRM login page
    When I enter username as "Admin" and password as "admin123"
    And I click on login button
    Then I successfully logged in
    And I should see the dashboard
  Scenario: OrangeHRM Logout Functionality
    Given I open OrangeHRM login page
    When I enter username as "Admin" and password as "admin123"
    And I click on login button
    Then I successfully logged in
    And I should see the dashboard
    When I click on logout button
    Then I successfully logged out