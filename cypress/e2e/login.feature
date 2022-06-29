Feature: Login
  
  Scenario: Login as a CEO
    When I open the "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com"
    And I input "artem.vepryk@selectoglobal.com" into the "email_address_input" field
    And I input "007007bo" into the "password_input" field
    And I click Sign In button 
    Then I see I am logged in
    And the url is "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com/accounting/reports/company"

Scenario: Login with the wrong creds
    When I open the "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com"
    And I input "artem.vepryk@selectoglobal.com" into the "email_address_input" field
    And I input "wrongPass" into the "password_input" field
    And I click Sign In button 
    Then I see I am NOT logged in
    And I see Invalid Credentials error message
    And the url is "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com/login"
