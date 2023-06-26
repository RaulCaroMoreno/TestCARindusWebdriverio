/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class PageBase {
	/**
	 * Basic function to click to an element
	 */
	async click(element) {
		await element.waitForDisplayed();
		await element.click();
	}

	/**
	 * Basic function to double click to an element
	 */
	async doubleClick(element) {
		await element.waitForDisplayed();
		await element.doubleClick();
	}

	/**
	 * Basic function to set value to an element checking first that the element  exists
	 */
	async setValue(element, value) {
		await element.waitForExist();
		await element.clearValue();
		await element.setValue(value);
	}

	/**
	 * Basic function to check if the element is displayed
	 */
	async elementIsShown(element, options = {}) {
		let isShown = true;
		try {
			await element.waitForDisplayed(options);
			isShown = await element.isDisplayed();
		} catch (e) {
			isShown = false;
		}
		return isShown;
	}
};
