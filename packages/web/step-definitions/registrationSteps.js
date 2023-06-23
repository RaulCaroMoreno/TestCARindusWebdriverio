const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageObjects/homePage');

//Here we should ask DB to see if the user exists or not
Given('a {string} user within the home page', async (user) => {
	await homePage.openHomePage();
	await homePage.clickOnAccountButton();
});

When('{string} user starts registration process', async (page) => {
	await homePage.clickOnAccountButton();
});
