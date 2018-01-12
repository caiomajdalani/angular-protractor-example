'use strict'

exports.config = {
    framework: 'jasmine2',
    onPrepare: () => {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true, //display stacktrace for each failed assertion
                displayErrorMessages: true, //display error messages for each failed assertion
                displayFailed: true, //display each failed spec
                displayDuration: true //display each spec duration
            },
            summary: {
                displayErrorMessages: true, //display error messages for each failed assertion
                displayStacktrace: false, //display stacktrace for each failed assertion
                displaySuccessful: true, //display summary of all successes after execution
                displayFailed: true, //display summary of all failures after execution
                displayDuration: true //display execution duration
            },
            colors: {
                enabled: true
            }
        }));
    },
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function () {
        }
    }
}