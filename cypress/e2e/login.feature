Feature: Login
  
  Scenario: Login as a CEO
    When I open the "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com"
    And I input "artem.vepryk@selectoglobal.com" into the "email_address_input" field
    And I input "007007bo" into the "password_input" field
    And I click "sign_in_button" 
    Then the url is "http://dvl-test-frontend.s3-website-us-east-1.amazonaws.com/accounting/reports/company"