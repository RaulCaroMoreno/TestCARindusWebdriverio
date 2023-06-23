Feature: User registration
 
  Scenario: Registration page sucessfully
    Given a "Non_Registered" user within the home page 
    When "Non_Registered" user starts registration process
    Then registration page is loaded successfully
