Feature: User registration
 
  Background:
    Given a "Non_Registered" user within the home page 
    And a "Non_Registered" user is on my account tab
    When "Non_Registered" user starts registration process

  Scenario: Registration page sucessfully loaded
    Then registration page is loaded successfully

  Scenario: Registration with empty values
    When "Non_Registered" tries to create the account with empty data
    Then Error about complete empty fields is shown

  Scenario Outline: Registration with incorrect name
    When "Non_Registered" tries to create the account with incorrect name <name>
    Then <error> message is shown
  Examples:
      | name | error |
      | a | Los datos introducidos son muy cortos. |
      | 22 | Vaya, los datos introducidos son incorrectos. |
      | @@ | Vaya, los datos introducidos son incorrectos. |

  Scenario Outline: Registration with incorrect surname
    When "Non_Registered" tries to create the account with incorrect surname <surname>
    Then <error> message is shown
  Examples:
      | surname | error |
      | a | Los datos introducidos son muy cortos. |
      | 22 | Vaya, los datos introducidos son incorrectos. |
      | @@ | Vaya, los datos introducidos son incorrectos. |

  Scenario Outline: Registration with incorrect email
    When "Non_Registered" tries to create the account with incorrect email <email>
    Then <error> message is shown
  Examples:
      | email | error |
      | a | Los datos introducidos son muy cortos. |
      | 222@ | Vaya, los datos introducidos son incorrectos. |
      | @2.com | Vaya, los datos introducidos son incorrectos. |
      | &&@2.com | Vaya, los datos introducidos son incorrectos. |
      | aa@2. | Vaya, los datos introducidos son incorrectos. |

  
  Scenario Outline: Checking password ticks
    When "Non_Registered" tries to create the account with password <password>
    Then green tick is <check_visibility> for <check>
  Examples:
      | password | check | check_visibility |
      | aaa | 6 caracteres  | false |
      | aaaaaaaa | 6 caracteres | true |
      | a1 | 1 cifra | true |
      | A | 1 mayúscula | true |
      | & | 1 símbolo especial | true |

 Scenario: Registration with correct values
    When "Non_Registered" tries to create the account with correct data
    Then Account is created successfully


  

