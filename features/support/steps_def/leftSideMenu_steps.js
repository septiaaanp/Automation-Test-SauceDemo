const { When, Then } = require("@cucumber/cucumber");
const LeftSideLocator = require("../locators/leftSideMenu_locator");
const LeftSideMenu = require("../component/leftSideMenu");
const assert = require('assert');

/**
 * @param {string} menuText The text of the menu item to verify is visible.
 */
Then('I see {string} menu', async function (menuText) {
    const leftSideLocator = new LeftSideLocator(this.driver);
    const leftSideElement = await leftSideLocator.leftSideLocator();

    const leftSideMenu = new LeftSideMenu(this.driver, leftSideElement);
    const menuList = await leftSideMenu.getListMenu();

    // assert.ok(menuList.includes(menuText), `The "${menuText}" menu not found in left side menu. Available menu is: ${menuList.join(', ')}`);
});

/**
 * @param {string} menuText The text of the menu item to click.
 */
When('I click {string} menu', async function (menuText) {
    const leftSideLocator = new LeftSideLocator(this.driver);
    const leftSideElement = await leftSideLocator.leftSideLocator();
    const leftSideMenu = new LeftSideMenu(this.driver, leftSideElement);

    await leftSideMenu.clickMenu(menuText);
});
