const { By, until } = require("selenium-webdriver"); // Tambahkan 'until'

class TextBoxLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async locateTextBoxByPlaceholder(placeholder) {
        const xpathExpression = `//input[@placeholder='${placeholder}']`;
        try {
            const element = await this.driver.wait(
                until.elementLocated(By.xpath(xpathExpression)),
                5000, 
                `Timed out waiting for text box with placeholder '${placeholder}'` 
            );

            return element;

        } catch (error) {
            throw new Error(`Text box with placeholder '${placeholder}' not found.`); // Lempar error yang lebih bermakna
        }
    }
}

module.exports = TextBoxLocator;
