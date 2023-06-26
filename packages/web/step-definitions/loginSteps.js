const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageObjects/homePage');
const registrationPage = require('../pageObjects/registrationPage');

const names = ["Raul", "Rindus", "Maria", "Francisco", "Paco", "Antonio"];
const surnames = ["Perez", "Gonzalez", "Garcia", "Jimenez", "Moreno", "Caro"];

Then('login fields are loaded correctly', async () => {
	expect(await homePage.accountFrame.emailFieldIsShown()).toBe(true);
	expect(await homePage.accountFrame.passwordFieldIsShown()).toBe(true);
	expect(await homePage.accountFrame.loginSubmitButtonIsShown()).toBe(true);
});
