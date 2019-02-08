/* eslint-disable no-undef */
exports.config = {
  seleniumAddress: `http://localhost:4723/wd/hub`,
  capabilities: {
    automationName: `uiautomator2`,
    browserName: `chrome`,
    platformName: `Android`,
    deviceName: `device`
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 3000000
  },
  specs: [`test/specs.js`],
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  }
};
