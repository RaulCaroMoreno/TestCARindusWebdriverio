# TestCARindusWebdriverio

This is a tech test about CA for rindus. It has 2 kind of execution:
1. Web execution for login&registration features in Web (chrome and edge)
2. Mobile execution for Android.

   
Both executions share the same code.

# Tools
- NodeJS v18.16.1
- WebdriverIO v8
- ESLint (quality code)
- Prettier (quality code)
- Lint Staged & Husky (pre commit hook)
- Allure reports
  
 # How to install
1. Download repo ````git clone https://github.com/RaulCaroMoreno/TestCARindusWebdriverio.git ````
2. ```` npm install ````

 # How to execute WEB mode
   ```` npm run wdio SUITE ````.

    Where Suite:
    1. Suite = login to execute login suite. For ex: ```` npm run wdio login ````
    2. Suite = registration to execute registration suite ```` npm run wdio registration ````


 # How to execute Mobile mode
   ```` npm run wdioAndroid SUITE ````.

    Where Suite:
    1. Suite = login to execute login suite. For ex: ```` npm run wdioAndroid login ````
    2. Suite = registration to execute registration suite ```` npm run wdioAndroid registration ````

# Scenarios
   Scenarios for Login.feature:
   ````
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
   ````
Scenarios for Registration feature:
   ````Feature: User registration
 
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


  



   ````
  

 
 

   
