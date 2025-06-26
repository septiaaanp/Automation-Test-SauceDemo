const { By } = require("selenium-webdriver");

class ItemProduct {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async getProductName(productName) {
        const xpathExpression = `.//div[contains(@class,"inventory_item_name") and text()='${productName}']`;
        try {
            const getProduct = await this.element.findElement(By.xpath(xpathExpression));
            return getProduct;
        } catch (error) {
            throw error;
        }
    }

    async clickProduct(productName) {
        try {
            const getProduct = await this.getProductName(productName);
            await getProduct.click();
        } catch (error) {
            throw error;
        }
    }

    async addToCartByProductName(productName) {
        const xpathExpression = `./ancestor::div[@class="inventory_item_label"]/following-sibling::div/button`;
        const getProduct = await this.getProductName(productName);

        try {
            const addToCart = await getProduct.findElement(By.xpath(xpathExpression));
            await addToCart.click();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ItemProduct;
