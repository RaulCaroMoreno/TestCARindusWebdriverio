const PageBase = require('../pageBase');

class MyAccountFrame extends PageBase {
	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	get registerNowAnchor() {
		return $("//a[@href='/es/es/shop/account/register']");
	}

	get emailInputField() {
		return $('#myaccount_login_email');
	}

	get passwordInputField() {
		return $('#myaccount_login_password');
	}

	get loginSubmitButton() {
		return $("//span[text()='Iniciar sesión']");
	}

	get loginErrorMessage() {
		return $(
			'div=¡Vaya! La dirección de correo electrónico o la contraseña indicada no es correcta.'
		);
	}

	get welcomeNotificationMessage() {
		return $("section[data-qa='AccountWelcomeTeaser']");
	}

	async setEmailValue(value) {
		await this.setValue(this.emailInputField, value);
	}

	async setPasswordValue(value) {
		await this.setValue(this.passwordInputField, value);
	}

	async openRegisterPage() {
		await this.click(this.registerNowAnchor);
	}

	async openMyAccountTab() {
		await this.click(this.accountButton);
	}

	async emailFieldIsShown() {
		return this.elementIsShown(this.emailInputField);
	}

	async passwordFieldIsShown() {
		return this.elementIsShown(this.passwordInputField);
	}

	async loginErrorMessageIsShown() {
		return this.elementIsShown(this.loginErrorMessage);
	}

	async loginSubmitButtonIsShown() {
		return this.elementIsShown(this.loginSubmitButton);
	}

	async clickLoginSubmitButton() {
		return this.click(this.loginSubmitButton);
	}

	async welcomeNotificationMessageIsShown() {
		return this.elementIsShown(this.welcomeNotificationMessage);
	}

	async login(username, password) {
		await this.setEmailValue(username);
		await this.setPasswordValue(password);
		await this.clickLoginSubmitButton();
	}
}

module.exports = new MyAccountFrame();
