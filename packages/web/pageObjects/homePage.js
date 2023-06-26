const PageBase = require('./pageBase');
const myAccountFrame = require('./frame/myAccountFrame');

class HomePage extends PageBase {

	constructor() {
		super();
		this.accountFrame = myAccountFrame;
	}

	get cookiesButton() {
		return $("//button[@id='onetrust-accept-btn-handler']");
	}

	async acceptCookiesButton() {
		await this.click(this.cookiesButton);
	}

	async openHomePage() {
		await browser.url('https://www.c-and-a.com/es/es/shop');
		await browser.maximizeWindow();
		if(await this.elementIsShown(this.cookiesButton, {timeout:2500}) === true) {
			await this.acceptCookiesButton();
		}
	}

	
}

module.exports = new HomePage();
