const { Given, When, Then } = require("@cucumber/cucumber");
const { Utils } = require("../utils/utils");
const LabelLocator = require("../locators/label_locator");
const Label = require("../component/label");
const assert = require("chai").assert;

/**
 * Navigates to the Saucedemo login page.
 */
Given("I am on the Saucedemo login page", async function () {
    await this.driver.get(Utils.URL);
});

/**
 * @param {int} waitTime The number of seconds to wait.
 */
When("I wait for {int} seconds", async function (waitTime) {
    // Convert waitTime to milliseconds
    const millisecondsToWait = waitTime * 1000;

    // Use setTimeout to wait for the specified time
    await new Promise((resolve) => setTimeout(resolve, millisecondsToWait));
});

/**
 * Verifies successful login by checking for a label and URL.
 */
Then('I should be logged in successfully', async function () {
    // Add a sleep to screen update properly
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const labelLocator = new LabelLocator(this.driver);
    const labelElement = await labelLocator.locateLabel("Swag Labs");
    const isLabelPresent = labelElement !== null;

    if (isLabelPresent) {
        const label = new Label(this.driver, labelElement);
        await label.isPresent();
    }

    // Assertion label of "Swag Labs is Present as parameter user successfully logged in"
    assert.strictEqual(
        isLabelPresent,
        true,
        `The 'Swag Labs' label should be present, but is not`
    );


    // Ensure the url is correct when user logged in
    // Get the current driver instance
    const driver = this.driver;

    // Get the current URL
    const currentUrl = await driver.getCurrentUrl();

    // Assert that the current URL contains the expected substring
    assert.strictEqual(
        currentUrl,
        'https://www.saucedemo.com/inventory.html',
        `Expected URL to contain 'https://www.saucedemo.com/inventory.html' but it did not`
    );
});

/**
 * Verifies that the current URL matches the expected "About" page URL.
 */
Then('I go to about page', async function () {
    // Ensure the url is correct when user logged in
    // Get the current driver instance
    const driver = this.driver;

    // Get the current URL
    const currentUrl = await driver.getCurrentUrl();

    // Assert that the current URL contains the expected substring
    assert.strictEqual(
        currentUrl,
        'https://saucelabs.com/',
        `Expected URL to be 'https://saucelabs.com/' but it was '${currentUrl}'`
    );
});
