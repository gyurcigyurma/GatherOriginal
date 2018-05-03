const Item = require('../../models/item');
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

describe('- - - - - MODEL TESTS - - - - -', () => {
  describe('Model: Item', () => {
      beforeEach(async () => {
          await mongoose.connect(databaseUrl, options);
          await mongoose.connection.db.dropDatabase();
      });

      afterEach(async () => {
          await mongoose.disconnect();
      });

      describe('#ticketNo', function(){
          it('ticketNo should be string', function(){
              const invalidTicketNo = 123;
              const newItem = new Item({ticketNo:invalidTicketNo});

              assert.strictEqual(newItem.ticketNo, invalidTicketNo.toString());
          });

          it('ticketNo is required', function(){
              const newItem = new Item({ticketNo:null});
              newItem.validateSync();

              assert.equal(newItem.errors.ticketNo.message, 'Path `ticketNo` is required.');
          });
      });

      describe('#status', function(){
          it('status should be string', function(){
              const invalidStatus = 333;
              const newItem = new Item({status:invalidStatus});

              assert.strictEqual(newItem.status, invalidStatus.toString());
          });

          it('status is required', function(){
              const newItem = new Item({status:null});
              newItem.validateSync();

              assert.equal(newItem.errors.status.message, 'Path `status` is required.');
          });
      });
  });
});
