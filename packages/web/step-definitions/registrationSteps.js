const { Given, When, Then } = require('@wdio/cucumber-framework');

const homePage = require('../pageObjects/homePage');
const registrationPage = require('../pageObjects/registrationPage');

const names = ["Raul", "Rindus", "Maria", "Francisco", "Paco", "Antonio"];
const surnames = ["Perez", "Gonzalez", "Garcia", "Jimenez", "Moreno", "Caro"];

Given(/^a (.*) user within the home page$/, async (user) => {
	console.log(`User ${user} is on home page`)
	await homePage.openHomePage();
});

Given(/^a (.*) user is on my account tab$/, async (user) => {
	console.log(`User ${user} is on my account tab`)
	await homePage.accountFrame.openMyAccountTab();
});

When('"Non_Registered" user starts registration process', async () => {	
	await homePage.accountFrame.openRegisterPage();
});

When('"Non_Registered" tries to create the account with empty data', async () => {	
	await registrationPage.clickCreateAccountButton();
});

When('"Non_Registered" tries to create the account with correct data', async () => {
	const currentName = names[Math.floor(Math.random() * names.length)];
	const currentSurname = surnames[Math.floor(Math.random() * names.length)];
	await registrationPage.fillRegistrationForm(currentName,currentSurname, "Sr.");
});

When(/^"Non_Registered" tries to create the account with incorrect name (.*)$/, async (name) => {	
	await registrationPage.setFirstNameValue(name);
});

When(/^"Non_Registered" tries to create the account with incorrect surname (.*)$/, async (surname) => {	
	await registrationPage.setLastNameValue(surname);
});

When(/^"Non_Registered" tries to create the account with incorrect email (.*)$/, async (email) => {	
	await registrationPage.setEmailValue(email);
});

When(/^"Non_Registered" tries to create the account with password (.*)$/, async (password) => {	
	await registrationPage.setPasswordFieldValue(password);
});

Then(/^(.*) message is shown$/, async (error) => {	
	await registrationPage.clickHeadline();
	expect(await registrationPage.errorMessageIsShown(error)).toBe(true);
});

Then(/green tick is (.*) for (.*)$/, async (check_visibility, check) => {
	expect(await registrationPage.tickMessageIsShown(check)).toBe(check_visibility === "true");
});

Then('registration page is loaded successfully', async () => {	
	expect(await registrationPage.registeringFormIsShown()).toBe(true);
	expect(await registrationPage.firstNameFieldIsShown()).toBe(true);
	expect(await registrationPage.lastNameFieldIsShown()).toBe(true);
	expect(await registrationPage.emailFieldIsShown()).toBe(true);
	expect(await registrationPage.passwordIsShown()).toBe(true);
	expect(await registrationPage.suscriptionCheckboxIsShown()).toBe(true);
});

Then('Error about complete empty fields is shown', async () => {	
	expect(await registrationPage.emptyFieldWarningIsShown()).toBe(true);
});

Then('Account is created successfully', async () => {
	expect(await registrationPage.welcomeMessageIsShown()).toBe(true);
});

//8 caracteres bug en vez de 6
//CON 1 en pass no se enciende ni 111
//en el login aaaaaaaa@test 
//&&@2.com entra en el login


//mailinator 
//readme  
//android lunes
//simulacion lunes 
//meter suites  domingo
//login domingo
//certificados



//METER CHECKBOXES PARA CLICKAR

//METER OPCIONES PRIMERO