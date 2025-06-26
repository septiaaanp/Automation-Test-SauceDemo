const { By, until } = require("selenium-webdriver");

class LeftSideMenu {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async getListMenu() {
        const xpathExpression = `./nav/a`;
        try {
            await this.driver.wait(until.elementLocated(By.xpath(xpathExpression)), 10000, 'Timed out waiting for menu elements to be located');

            const menuElements = await this.element.findElements(By.xpath(xpathExpression));

            const visibleMenuElements = await Promise.all(menuElements.map(async (el) => {
                await this.driver.wait(until.elementIsVisible(el), 5000, 'Timed out waiting for menu element to be visible');
                return el; // Return the element if it's visible
            }));

            const menuNames = await Promise.all(visibleMenuElements.map(async (el) => await el.getText()));
            return menuNames;
        } catch (error) {
            console.error("Error getting menu list:", error);
            return [];
        }
    }

    async clickMenu(menuText) {
        const xpathExpression = `./nav/a[text()='${menuText}']`;
        try {
            const menuElement = await this.element.findElement(By.xpath(xpathExpression));
            await menuElement.click();
        } catch (error) {
            throw new Error(`The "${menuText}" menu not found or can't click.`);
        }
    }
}

module.exports = LeftSideMenu;
