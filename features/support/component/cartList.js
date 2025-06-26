const { By } = require("selenium-webdriver");

class CartList {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async getListCart() {
        const xpathExpression = `.//div[@class="inventory_item_name"]`; 
        try {
            const productElements = await this.element.findElements(By.xpath(xpathExpression));
            const productNames = await Promise.all(productElements.map(async (el) => await el.getText()));
            return productNames;
        } catch (error) {
            console.error("Error getting cart list:", error);
            return []; 
        }
    }
}

module.exports = CartList;
