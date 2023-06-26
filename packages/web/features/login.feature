Feature: User login
  Background:
    Given a "registered" user within the home page 
    And a "registered" user is on my account tab

  Scenario: Login components sucessfully loaded
    Then login fields are loaded correctly

  Scenario Outline: Incorrect email
      When "registered" user tries to login with incorrect email <email>
      Then Message about <error> login is shown
    Examples:
        | email | error |
        | 222@ | Introduce una dirección de correo electrónico válida. |
        | 22 | Introduce una dirección de correo electrónico válida. |

  Scenario: Login with incorrect values
      When "registered" tries to login with incorrect data
      Then Error message about incorrect login data introduced

  Scenario: Login with correct values
      When "RegisteredUser" user tries to login with correct data
      Then Welcome login message is displayed


  

