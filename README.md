# Automation Test - Initial Recruitment Test

Running Cucumber Selenium Tests

To run the Cucumber Selenium tests, follow these steps:


1. Install Node.js: Ensure you have Node.js version 22.16.0 or higher installed. You can download it from https://nodejs.org/.

2. Extract Project and Install Dependencies:

 * Extract the contents of the project's ZIP archive.

 * Open a terminal or command prompt.

 * Navigate to the root directory of the extracted project.

 * Run the following command to install the required dependencies:
   npm install

3. Run Tests: After the dependencies are installed, execute the following command to run all tests and automatically generate a report: npm run test

4. Run Specific Scenario Tests: To run tests for specific features or scenarios, use the following command format: npm run testWithFlag --tags="<tag_expression>"

Examples:

To run tests for a specific feature (e.g., the "SauceDemo" feature):
npm run testWithFlag --tags="@SauceDemo"

To run a specific scenario based on its scenario ID (e.g., the scenario with ID "TEST001"):
npm run testWithFlag --tags="@TEST001"


# Important Notes:


# Directory Cleanup: Before the automation tests execute, the script will check for the existence of the test-results and report folders within the project directory. If these folders exist, it will be deleted. If do not exist, the test run will proceed. If you experience issues with this process (potentially due to using a non-Windows operating system), please adjust the "pretest" script in package.json to use commands compatible with your OS.

# Troubleshooting: If you encounter any difficulties, please contact me via email at septianpp.work@gmail.com.
