const { Key, By, until } = require("selenium-webdriver");

class Textbox {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async enterText(text) {
        // Check if the element does not have a value before entering text
        const value = await this.element.getAttribute("value");
        if (!value) {
            await this.element.sendKeys(text);
        } else {
            // Element already has a value, so clear it and enter new text
            await this.element.clear();
            await this.element.sendKeys(text); // Enter new text
        }
    }

    async clearText() {
        await this.element.sendKeys(Key.chord(Key.CONTROL, "a")); // Select all
        await this.element.sendKeys(Key.DELETE); // Delete the selected text
    }
}

module.exports = Textbox;
