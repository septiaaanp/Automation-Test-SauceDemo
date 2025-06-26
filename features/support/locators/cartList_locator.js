const { By, until } = require("selenium-webdriver");

class CartListLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async cartListLocator() {
        try {
            return this.driver.findElement(
                By.xpath(`//div[@class="cart_list"]`)
            );
        } catch (error) {
            throw new Error(`Cart List not Present.`);
        }
    }
}

module.exports = CartListLocator;