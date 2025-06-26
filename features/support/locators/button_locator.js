const { By, until } = require("selenium-webdriver");

class ButtonLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async locateEnableButton(labelText) {
        const xpathExpression =`//input[@type='submit' and @value='${labelText}'][not(@disabled)]`;

        try {
            const buttonElement = await this.driver.wait(
                until.elementLocated(By.xpath(xpathExpression)),
                5000
            );

            await this.driver.executeScript(
                "arguments[0].scrollIntoView({ block: 'center', inline: 'center' });",
                buttonElement
            );

            return await this.driver.findElement(By.xpath(xpathExpression));
        } catch (error) {
            return null;
        }
    }
}

module.exports = ButtonLocator;
