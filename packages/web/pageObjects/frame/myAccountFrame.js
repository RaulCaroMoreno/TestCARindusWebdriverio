const PageBase = require('../pageBase');

class MyAccountFrame extends PageBase {

	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	get registerNowAnchor() {
		return $("//a[@href='/es/es/shop/account/register']");
	}
	
	get emailInputField() {
		return $("#myaccount_login_email");
	}
	
	get passwordInputField() {
		return $("#myaccount_login_password");
	}

	get loginSubmitButton() {
		return $("//span[text()='Iniciar sesión']");
	}

	async openRegisterPage() {
		await this.click(this.registerNowAnchor);
	}
 
	async openMyAccountTab() { 
		await this.click(this.accountButton);
	}

	async emailFieldIsShown() { 
		return await this.elementIsShown(this.emailInputField);
	}

	async passwordFieldIsShown() { 
		return await this.elementIsShown(this.passwordInputField);
	}

	async loginSubmitButtonIsShown() { 
		return await this.elementIsShown(this.loginSubmitButton);
	}

}

module.exports = new MyAccountFrame();
