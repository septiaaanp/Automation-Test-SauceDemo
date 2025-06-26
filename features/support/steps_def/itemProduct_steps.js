const { When } = require("@cucumber/cucumber");
const ItemProduct = require("../component/itemProduct");
const ItemProductLocator = require("../locators/itemProduct_locator");


/**
 * @param {string} productName The name of the product to add to the cart.
 */
When('I add {string} to the cart', async function (productName) {
    const itemProduct_locator = new ItemProductLocator(this.driver);
    const itemProductElement = await itemProduct_locator.itemProductList();

    const getProduct = new ItemProduct(this.driver, itemProductElement);
    await getProduct.addToCartByProductName(productName);

    await new Promise((resolve) => setTimeout(resolve, 1000));
})
