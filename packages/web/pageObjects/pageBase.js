/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class PageBase {
	
	
	/**
	 * Basic function to click to an element
	 */
	async click(element) {
		await element.waitForDisplayed(element);
		await element.click();
		await browser.pause(240000);
	}
};
