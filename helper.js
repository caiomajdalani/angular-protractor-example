'use strict'

class Helper {
    takeShot() {
        browser.sleep(1000);
        browser.takeScreenshot().then((png) => {
          allure.createAttachment('Screenshot', () => {
            return new Buffer(png, 'base64')
          }, 'image/png')();
        })
      }
}

module.exports = Helper;
