const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');
const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');


describe(' - - - - - SERVER TESTS - - - - - ', () => {
  describe('Server path: /', () => {

      beforeEach(connectDatabaseAndDropData);

      afterEach(diconnectDatabase);

      describe('GET', () => {
          it('renders an item with specific ticketNo', async () => {
              const item = await seedItemToDatabase();

              const response = await request(app)
                  .get('/');

              assert.include(parseTextFromHTML(response.text, 'body'), 'ALM-1234');
          });
      });
  });

});
