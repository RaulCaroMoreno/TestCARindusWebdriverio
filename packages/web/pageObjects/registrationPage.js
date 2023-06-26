const Page = require('./pageBase');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
	get registerForm() {
		return $('form[data-qa=RegisterAccountForm]');
	}

	get firstNameField() {
		return $('input[id=firstName]');
	}

	get lastNameField() {
		return $('input[id=lastName]');
	}

	get emailAddressField() {
		return $('input[id=emailAddress]');
	}

	get passwordField() {
		return $('input[id=password]');
	}

	get suscriptionCheckboxField() {
		return $('label[data-qa=Checkbox]');
	}

	get createAccountButtonField() {
		return $("//button[@data-qa='LoadingButton']");
	}

	get emptyFieldWarning() {
		return $('span=Este campo no puede estar vacío.');
	}

	get welcomeMessage() {
		return $("section[data-qa='AccountWelcomeTeaser']");
	}

	get headLine() {
		return $('div[data-qa=Headline]');
	}

	get genderRadioButtons() {
		return $('div[data-qa=Headline]');
	}

	async registeringFormIsShown() {
		return this.elementIsShown(this.registerForm);
	}

	async firstNameFieldIsShown() {
		return this.elementIsShown(this.firstNameField);
	}

	async lastNameFieldIsShown() {
		return this.elementIsShown(this.lastNameField);
	}

	async emailFieldIsShown() {
		return this.elementIsShown(this.emailAddressField);
	}

	async passwordIsShown() {
		return this.elementIsShown(this.passwordField);
	}

	async suscriptionCheckboxIsShown() {
		return this.elementIsShown(this.suscriptionCheckboxField);
	}

	async clickCreateAccountButton() {
		await this.doubleClick(this.createAccountButtonField);
	}

	async emptyFieldWarningIsShown() {
		return this.elementIsShown(this.emptyFieldWarning);
	}

	async setFirstNameValue(value) {
		await this.setValue(this.firstNameField, value);
	}

	async setLastNameValue(value) {
		await this.setValue(this.lastNameField, value);
	}

	async setEmailValue(value) {
		await this.setValue(this.emailAddressField, value);
	}

	async setPasswordFieldValue(value) {
		await this.setValue(this.passwordField, value);
	}

	async clickSuscriptionCheckboxFieldValue() {
		await this.click(this.suscriptionCheckboxField);
	}

	async clickHeadline() {
		await this.click(this.headLine);
	}

	async welcomeMessageIsShown() {
		return this.elementIsShown(this.welcomeMessage);
	}

	async errorMessageIsShown(message) {
		return this.elementIsShown($(`span=${message}`));
	}

	async tickMessageIsShown(checking) {
		return this.elementIsShown(
			$(`//span[text()='${checking}']//ancestor::span//*[local-name() = 'svg']`)
		);
	}

	async clickGenderRadioButtons(genderValue) {
		await this.click($(`//span[text()='${genderValue}']`));
	}

	async fillRegistrationForm(name, surname, gender) {
		await this.clickGenderRadioButtons(gender);
		await this.setFirstNameValue(name);
		await this.setLastNameValue(surname);
		await this.setEmailValue(
			`${name}_${surname}${Math.random() * (100 - 0) + 0}@testinator.com`
		);
		await this.setPasswordFieldValue(
			`${name}_${surname}${Math.random() * (100 - 0) + 0}@testinator.com`
		);
		await this.clickSuscriptionCheckboxFieldValue();
		await this.clickCreateAccountButton();
	}
}

module.exports = new RegistrationPage();
