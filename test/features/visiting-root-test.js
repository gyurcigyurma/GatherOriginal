const {assert} = require('chai');
const {buildItemObject, parseTextFromHTML} = require('../test-utils');

describe('- - - - - FEATURE TESTS - - - - -', () => {
  describe('User visits root', () => {
      describe('without existing items', () => {
          it('should starts blank', () => {
              browser.url('/');
              assert.equal(browser.getText('#items-container'), '');
          });
      });

      describe('on every case', () => {
        it('should have a rendered Create new button ', () => {
          browser.url('/');
          const newButton = browser.element('#create-new');
          assert.ok(newButton.value);
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

      describe('which contains an item', () => {
          it('should disappear on delete', () => {
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
              browser.click('.delete-button');
              const bodyAlltext = browser.getText('body');
              assert.notInclude(bodyAlltext, itemToCreate.assignee);
              assert.notInclude(bodyAlltext, itemToCreate.verifier);
              assert.notInclude(bodyAlltext, 'open');
          });
      });
  });

});
