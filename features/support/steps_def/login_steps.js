const { When, Then } = require("@cucumber/cucumber");
const Textbox = require("../component/textbox");
const TextBoxLocator = require("../locators/textbox_locator");

/**
 * Enters the specified text into the text box with the provided placeholder.
 *
 * @param {string} username The username to be entered into the username text box.
 * @param {string} password The password to be entered into the password text box.
 *
 * This function locates the username and password text boxes by their respective placeholders and enters the provided values.
 */
When('I enter valid username {string} and password {string}', async function (username, password) {
    // Initialize the locator
    const textboxLocator = new TextBoxLocator(this.driver);

    // Locate the username element
    const usernameElement = await textboxLocator.locateTextBoxByPlaceholder('Username'); //Hardcode
    // Initialize the username component
    const usernameInput = new Textbox(this.driver, usernameElement);
    // Enter the username
    await usernameInput.enterText(username);

    // Locate the password element
    const passwordElement = await textboxLocator.locateTextBoxByPlaceholder('Password'); //Hardcode
    // Initialize the password component
    const passwordInput = new Textbox(this.driver, passwordElement);
    // Enter the password
    await passwordInput.enterText(password);
});
