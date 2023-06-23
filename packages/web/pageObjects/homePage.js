const PageBase = require('./pageBase');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends PageBase {
	

	//mter esto en un modal con su carpeta aparte 
	//poner el modal como atributo
	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	async clickOnAccountButton() {
		await this.click(this.accountButton);
	}

	async openHomePage() {
		await browser.url("https://www.c-and-a.com/es/es/shop");
		await browser.maximizeWindow();
	}
}

module.exports = new HomePage();
