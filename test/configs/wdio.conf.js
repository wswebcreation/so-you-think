const {join} = require('path');

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        text: ['./test/specs/text.spec.js'],
    },
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [
        /**
         * IOS
         */
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/
            'appium:deviceName': 'iPhone 11',
            'appium:platformVersion': '13.0',
            'appium:orientation': 'PORTRAIT',
            // `automationName` will be mandatory, see
            // https://github.com/appium/appium/releases/tag/v1.13.0
            'appium:automationName': 'XCUITest',
            // The path to the app
            'appium:app': join(process.cwd(), './apps/wdioDemoApp.zip'),
            // Read the reset strategies very well, they differ per platform, see
            // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
        },
        /**
         * ANDROID
         */
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // http://appium.io/docs/en/writing-running-appium/caps/
            // This is `appium:` for all Appium Capabilities which can be found here
            'appium:deviceName': 'Pixel_8.1',
            'appium:platformVersion': '8.1',
            'appium:orientation': 'PORTRAIT',
            // `automationName` will be mandatory, see
            // https://github.com/appium/appium/releases/tag/v1.13.0
            'appium:automationName': 'UiAutomator2',
            // The path to the app
            'appium:app': join(process.cwd(), './apps/wdioDemoApp.apk'),
            // Read the reset strategies very well, they differ per platform, see
            // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,
        },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    appium: {
        command: 'appium',
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
    },
    reporters: ['spec'],
    //
    // =====
    // Hooks
    // =====
    before: function () {
        require('@babel/register')
    },
};
