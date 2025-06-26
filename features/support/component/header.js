const { By } = require("selenium-webdriver");
class Header {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async getCartBadge() {
        const xpathExpression = `.//div[@id='shopping_cart_container']/a/span[@class='shopping_cart_badge']`;
        try {
            const getProduct = await this.element.findElement(By.xpath(xpathExpression));
            return getProduct;
        } catch (error) {
            return null; // Return null if the badge is not found
        }
    }

    async getCartCount() {
        const badge = await this.getCartBadge();
        if (badge) {
            return parseInt(await badge.getText(), 10); // Parse the text as an integer
        } else {
            return 0; // Return 0 if the badge is not present
        }
    }

    async clickCartIcon() {
        const badge = await this.getCartBadge();
        await badge.click();
    }

    async clickHamburgerIcon() {
        const xpathExpression = `.//div[@class='bm-burger-button']/button`;
        try {
            const getButton = await this.element.findElement(By.xpath(xpathExpression));
            await getButton.click();
        } catch (error) {
            return null; 
        }
    }
}

module.exports = Header;
