var reporter = require("cucumber-html-reporter");

var options = {
    theme: "bootstrap",
    jsonFile: "features/support/test-results/cucumber-report.json",
    output: "features/support/report/cucumber_report.html",
    storeScreenshots: false,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    failedSummaryReport: true,
    brandTitle: "Automation Test - Initial Recruitment Test",
};

reporter.generate(options);
