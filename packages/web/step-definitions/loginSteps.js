const { When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageObjects/homePage');
const registrationPage = require('../pageObjects/registrationPage');
const userHandler  = require('../core/userHandler');

When(/^"registered" user tries to login with incorrect email (.*)$/, async (email) => {
	await homePage.accountFrame.setEmailValue(email);
});

When(/^"registered" tries to login with incorrect data$/, async () => {
	await homePage.accountFrame.login("testIncorrect@gmail.com", "FaskePassword");
	await homePage.accountFrame.clickLoginSubmitButton();
});

When(/^(.*) user tries to login with correct data$/, async (userName) => {
	const userData = userHandler.getUserInfoFromJson(userName);
	await homePage.accountFrame.login(userData.user, userData.password);
});

Then('login fields are loaded correctly', async () => {
	expect(await homePage.accountFrame.emailFieldIsShown()).toBe(true);
	expect(await homePage.accountFrame.passwordFieldIsShown()).toBe(true);
	expect(await homePage.accountFrame.loginSubmitButtonIsShown()).toBe(true);
});
 
Then(/^Message about (.*) login is shown$/, async (error) => {	
	expect(await registrationPage.errorMessageIsShown(error)).toBe(true);
});

Then('Error message about incorrect login data introduced', async () => {
	expect(await homePage.accountFrame.loginSubmitButtonIsShown()).toBe(true);
}); 

Then('Welcome login message is displayed', async () => {
	await homePage.clickHeadline();
	await homePage.accountFrame.openMyAccountTab();
	expect(await homePage.accountFrame.welcomeNotificationMessageIsShown()).toBe(true);
}); 