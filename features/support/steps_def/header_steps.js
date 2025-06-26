const { When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const HeaderLocator = require("../locators/header_locator");
const Header = require("../component/header");

/**
 * Verifies that the cart icon does not display a counter.
 */
Then("I see no counter on cart icon", async function () {
    const headerLocator = new HeaderLocator(this.driver);
    const headerPrimary = await headerLocator.primaryHeader();

    const getHeaderElement = new Header(this.driver, headerPrimary);
    const cartCount = await getHeaderElement.getCartCount();
    assert.strictEqual(cartCount, 0, "Cart count should be 0");
});

/**
 * @param {int} expectedCount The expected number of items displayed on the cart icon.
 */
Then("I see counter cart is {int}", async function (expectedCount) {
    const headerLocator = new HeaderLocator(this.driver);
    const headerPrimary = await headerLocator.primaryHeader();

    const getHeaderElement = new Header(this.driver, headerPrimary);
    const cartCount = await getHeaderElement.getCartCount();
    assert.strictEqual(
        cartCount,
        expectedCount,
        `Cart count should be ${expectedCount}`
    );
});

/**
 * Clicks the cart icon in the header.
 */
When('I click cart icon', async function () {
    const headerLocator = new HeaderLocator(this.driver);
    const headerPrimary = await headerLocator.primaryHeader();

    const cartIcon = new Header(this.driver, headerPrimary);
    await cartIcon.clickCartIcon();
})

/**
 * Clicks the hamburger icon in the header.
 */
When('I click hamburger icon', async function () {
    const headerLocator = new HeaderLocator(this.driver);
    const headerPrimary = await headerLocator.primaryHeader();

    const hamburgerIcon = new Header(this.driver, headerPrimary);
    await hamburgerIcon.clickHamburgerIcon();
})
