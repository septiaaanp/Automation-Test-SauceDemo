const { By, until } = require("selenium-webdriver");

class LabelLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async locateLabel(labelText) {
        const xpathExpression = `(//p|//label|//li|//div|//h1|//h4|//span)[contains(text(),"${labelText}")]`;

        try {
            const labelElement = await this.driver.wait(
                until.elementLocated(By.xpath(xpathExpression)),
                5000
            );

            await this.driver.executeScript(
                "arguments[0].scrollIntoView(true);",
                labelElement
            );

            await this.driver.wait(until.elementIsVisible(labelElement), 5000);

            return labelElement;
        } catch (error) {
            console.error(
                `Label element with text "${labelText}" not found within the timeout period.`
            );
            return null;
        }
    }
}

module.exports = LabelLocator;
