'use strict'

const Helper = require('./helper');
const helper = new Helper();

//first test
describe('Protractor Demo App: ', () => {

	afterEach(() => {
		helper.takeShot();
	});

	it('should have a title', () => {
		browser.get('http://juliemr.github.io/protractor-demo/');

		expect(browser.getTitle()).toEqual('Super Calculator');
	});

});

// interacting with elements
describe('Protractor Demo App 2: ', () => {

	afterEach(() => {
		helper.takeShot();
	})

	it('should add one and two', () => {
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
describe('Protractor Demo App 3: ', () => {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	beforeEach(() => {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	afterEach(() => {
		helper.takeShot();
	})

	it('should have a title', () => {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add one and two', () => {
		firstNumber.sendKeys(1);
		secondNumber.sendKeys(2);

		goButton.click();
		browser.sleep(3000);
		expect(latestResult.getText()).toEqual('3');
	});

	it('should add four and six', () => {
		firstNumber.sendKeys(4);
		secondNumber.sendKeys(6);

		goButton.click();
		browser.sleep(3000);
		expect(latestResult.getText()).toEqual('10');
	});
	
});

//lists of elements
describe('Protractor Demo App 4: ', () => {
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

	beforeEach(() => {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	afterEach(() => {
		helper.takeShot();
	})

	it('should have a history', () => {
		add(1, 2);
		add(3, 4);

		expect(history.last().getText()).toContain('1 + 2');
		expect(history.first().getText()).toContain('foo'); // This is wrong!
	});
	
});