const { until } = require("selenium-webdriver");

class Label {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async getText() {
        return await this.element.getText();
    }

    async isPresent() {
        try {
            await this.driver.wait(until.elementIsVisible(this.element), 5000);
            return true;
        } catch (error) {
            if (error.name === "TimeoutError") {
                throw new Error(`Timeout waiting for element to be visible`);
            } else if (error.name === "NoSuchElementError") {
                throw new Error(`Element not found in the DOM`);
            } else {
                throw error;
            }
            return false;
        }
    }
}

module.exports = Label;
