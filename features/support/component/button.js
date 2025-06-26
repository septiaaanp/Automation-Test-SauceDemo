class Button {
    constructor(driver, element) {
        this.driver = driver;
        this.element = element;
    }

    async click() {
        try {
            await this.element.click();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Button;
