'use strict'

exports.config = {
    framework: 'jasmine2',
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        // browser.ignoreSynchronization = true;
    },
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    }
}