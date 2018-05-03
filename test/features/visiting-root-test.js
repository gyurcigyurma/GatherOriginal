const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits root', () => {
    describe('without existing items', () => {
        it('should starts blank', () => {
            browser.url('/');
            assert.equal(browser.getText('#items-container'), '');
        });
    });

    describe('creating a new item', () => {
        it('is rendered on the root', () => {
            const itemToCreate = buildItemObject();
            browser.url('/items/create');
            browser.setValue('#ticket-number', itemToCreate.ticketNo);
            browser.click('#status_1');
            browser.setValue('#assignee', itemToCreate.assignee);
            browser.setValue('#verifier', itemToCreate.verifier);
            browser.setValue('#startedOn', itemToCreate.startedOn);
            browser.setValue('#shortDesc', itemToCreate.shortDesc);
            browser.click('#prio2');
            browser.click('#submit-button');

            const bodyAlltext = browser.getText('body');
            assert.include(bodyAlltext, itemToCreate.assignee);
            assert.include(bodyAlltext, itemToCreate.verifier);
            assert.include(bodyAlltext, 'open');
        });
    });
});
