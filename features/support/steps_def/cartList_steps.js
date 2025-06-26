const { When, Then } = require("@cucumber/cucumber");
const CartListLocator = require("../locators/cartList_locator");
const CartList = require("../component/cartList");
const assert = require('assert');

/**
 * @param {string} productName The name of the product to check for in the cart list.
 */
Then('I see {string} in cart list', async function (productName) {
    const cartListLocator = new CartListLocator(this.driver);
    const cartListElement = await cartListLocator.cartListLocator();

    const cartList = new CartList(this.driver, cartListElement);
    const productNames = await cartList.getListCart();

    const productFound = productNames.includes(productName);

    assert.strictEqual(productFound, true, `Product "${productName}" not found in cart list.  Found: ${productNames.join(', ')}`);
});

/**
 * @param {DataTable} dataTable A Cucumber DataTable containing the expected product names in the cart.  The first column should contain the product names.
 */
Then('I see cart list contains product item:', async function (dataTable) {
    const expectedProducts = dataTable.raw().slice(1).map(row => row[0]); // Extract product names from table (skip header)

    const cartListLocator = new CartListLocator(this.driver);
    const cartListElement = await cartListLocator.cartListLocator();

    const cartList = new CartList(this.driver, cartListElement);
    const actualProducts = await cartList.getListCart();

    for (const expectedProduct of expectedProducts) {
        const productFound = actualProducts.includes(expectedProduct);
        assert.strictEqual(productFound, true, `Product "${expectedProduct}" not found in cart list. Found: ${actualProducts.join(', ')}`);
    }
});
