const { When, Then } = require("@cucumber/cucumber");
const Textbox = require("../component/textbox");
const TextBoxLocator = require("../locators/textbox_locator");

/**
 * Enters the specified text into the text box with the provided placeholder.
 * 
 * @param text The text to be entered into the text box.
 * @param placeholder The placeholder of the text box.
 * 
 * This function locates the text box by its placeholder and enters the provided text into the text box.

 */
When(
    "I enter text {string} into text box with placeholder {string}",
    async function (text, placeholder) {
        // Initialize the locator
        const textboxLocator = new TextBoxLocator(this.driver);
        // Locate the element
        const getelement = await textboxLocator.locateTextBoxByPlaceholder(
            placeholder
        );

        // Initialize the component
        const inputText = new Textbox(this.driver, getelement);

        await inputText.enterText(text);
    }
);