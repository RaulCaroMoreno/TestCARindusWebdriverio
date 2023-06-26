Feature: User login
  Background:
    Given a "registered" user within the home page 
    And a "registered" user is on my account tab

  Scenario: Login components sucessfully loaded
    Then login fields are loaded correctly

  Scenario Outline: Incorrect email
    When "registered" tries to login with incorrect email <email>
    Then <error> message is shown
  Examples:
      | email | error |
      | 222@ | Vaya, los datos introducidos son incorrectos. |
      | &&@2.com | Vaya, los datos introducidos son incorrectos. |
      | aa@2. | Vaya, los datos introducidos son incorrectos. |

Scenario: Login with incorrect values
    When "registered" tries to create the account with incorrect data
    Then Error message about incorrect data is shown

 Scenario: Login with correct values
    When "registered" tries to create the account with correct data
    Then Succesful login message is shown


  

