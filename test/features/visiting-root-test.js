const {assert} = require('chai');

describe('User visits root', () => {
    describe('without existing items', () => {
        it('should starts blank', () => {
            browser.url('/');
            assert.equal(browser.getText('#items-container'), '');
        });
    });
});
