const { By, until } = require("selenium-webdriver");

class LeftSideLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async leftSideLocator() {
        const xpathExpression = `//div[@class='bm-menu']`;
        try {
            const element = await this.driver.wait(
                until.elementLocated(By.xpath(xpathExpression)),
                10000, 
                'Timed out waiting for left side menu to be located'
            );

            await this.driver.wait(
                until.elementIsVisible(element),
                5000, 
                'Timed out waiting for left side menu to be visible'
            );

            return element;

        } catch (error) {
            throw new Error(`Left Side Menu not Present or Visible.`); // Perbarui pesan error
        }
    }
}

module.exports = LeftSideLocator;