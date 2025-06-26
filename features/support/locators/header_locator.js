const { By, until } = require("selenium-webdriver");

class HeaderLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async primaryHeader() {
        try {
            return this.driver.findElement(
                By.xpath(`//div[@class='primary_header']`)
            );
        } catch (error) {
            throw new Error(`Primary Header not Present.`);
        }
    }

    async secondaryHeader() {
        try {
            return this.driver.findElement(
                By.xpath(`//div[@class='header_secondary_container']`)
            );
        } catch (error) {
            throw new Error(`Secondary Header not Present.`);
        }
    }
}

module.exports = HeaderLocator;