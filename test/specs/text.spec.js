describe('Getting text', () => {
    beforeEach(() => {
        // Wait for the tab bar to be displayed
        $('~Swipe').waitForDisplayed(15000);

        // Open the Swipe menu
        $('~Swipe').click();

        // Wait for the screen to be displayed
        $('~Swipe-screen').waitForDisplayed(15000);
    });

    it('should NOT be able to get the text of iOS and Android in the same way', () => {
        const firstCard = $$('~card')[0].$('~slideTextContainer');
        const text = firstCard.getText();

        console.log(`${driver.isIOS ? 'iOS' : 'Failing Android'} getText =`, `'${text}'`);

        expect(text).toEqual('FULLY OPEN SOURCE WebdriverIO is fully open source and can be found on GitHub');
    });

    it('should BE able to get the text of iOS and Android in the same way', () => {
        const firstCard = $$('~card')[0].$('~slideTextContainer');

        // @TODO: Fix this implementation to make it cross-platform
        const text = firstCard.getText();

        console.log(`${driver.isIOS ? 'iOS' : 'Fixed Android'} getText =`, `'${text}'`);

        expect(text).toEqual('FULLY OPEN SOURCE WebdriverIO is fully open source and can be found on GitHub');

    });
});
