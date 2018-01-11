'use strict'

//first test
describe('Protractor Demo App', () => {
	it('should have a title', () => {
		browser.get('http://juliemr.github.io/protractor-demo/');

		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});

//interacting with elements
describe('Protractor Demo App', function () {
	it('should add one and two', function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);

		element(by.id('gobutton')).click();
		browser.sleep(3000);
		expect(element(by.binding('latest')).getText()).
			toEqual('5'); // This is wrong!
	});
});

//writing multiple scenarios
describe('Protractor Demo App 2', function () {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	beforeEach(function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	it('should have a title', function () {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add one and two', function () {
		firstNumber.sendKeys(1);
		secondNumber.sendKeys(2);

		goButton.click();
		browser.sleep(3000);
		expect(latestResult.getText()).toEqual('3');
	});

	it('should add four and six', function () {
		firstNumber.sendKeys(4);
		secondNumber.sendKeys(6);

		goButton.click();
		browser.sleep(3000);
		expect(latestResult.getText()).toEqual('10');
	});
});

//lists of elements
describe('Protractor Demo App', function () {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
		browser.sleep(3000);
	}

	beforeEach(function () {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	it('should have a history', function () {
		add(1, 2);
		add(3, 4);

		expect(history.last().getText()).toContain('1 + 2');
		expect(history.first().getText()).toContain('foo'); // This is wrong!
	});
});