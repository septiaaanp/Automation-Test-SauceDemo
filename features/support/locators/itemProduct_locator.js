const { By } = require("selenium-webdriver");

class ItemProductLocator {
    constructor(driver) {
        this.driver = driver;
    }

    async itemProductList() {
        try {
            return this.driver.findElement(
                By.xpath(`//div[@class='inventory_list']`)
            );
        } catch (error) {
            throw new Error(`Container of item list not found.`);
        }
    }

    
}

module.exports = ItemProductLocator;
