class UserHandler {
	get accountButton() {
		return $('button[data-qa=HeaderAccountButton]');
	}

	async clickOnAccountButton() {
		await this.click(this.accountButton);
	}

	async openHomePage() {
		await browser.url('https://www.c-and-a.com/es/es/shop');
		await browser.maximizeWindow();
	}
}

module.exports = new HomePage();
