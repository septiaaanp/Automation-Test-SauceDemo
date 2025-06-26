const { When, Then } = require("@cucumber/cucumber");
const ButtonLocator = require("../locators/button_locator");
const Button = require("../component/button");

/**
 * @param buttonText The text contained in the button
 */
When("I click the {string} button", async function (buttonText) {
    // Initialize the locator
    const btnLocator = new ButtonLocator(this.driver);

    // Locate the element
    const btnElement = await btnLocator.locateEnableButton(buttonText);

    // Initialize the component
    const button = new Button(this.driver, btnElement);

    await button.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
});