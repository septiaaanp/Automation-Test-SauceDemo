const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { Builder, Browser } = require("selenium-webdriver/");
const chrome = require('selenium-webdriver/chrome'); // Import chrome
const { CONSTANTS } = require("./constant");

//for handling timeout
setDefaultTimeout(140000);

let driver;

Before({ timeout: CONSTANTS.HOOK_TIMEOUTS.BEFORE }, async function () {
    // Create ChromeOptions object
    let options = new chrome.Options(); // Use chrome.Options()

    // Add arguments to disable password manager and popup blocking
    options.addArguments("--disable-password-manager-reauthentication");
    options.addArguments("--disable-default-apps");
    options.addArguments("--disable-popup-blocking");
    options.addArguments("--incognito"); // Optional: Run in incognito mode

    // Build the driver with the ChromeOptions
    driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .setChromeOptions(options)
        .build();

    driver.manage().window().maximize();
    this.driver = driver;
});

After({ timeout: CONSTANTS.HOOK_TIMEOUTS.AFTER }, async function () {
    if (driver) {
        // Capture screenshot
        const screenShot = await driver.takeScreenshot();
        // Attach screenshot to the scenario
        this.attach(screenShot, "image/png");
        // Quit the driver
        await driver.quit();
    }
});

module.exports = {
    driver,
};
