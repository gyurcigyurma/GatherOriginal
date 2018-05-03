const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const pino = require('pino')();

/* GET home page. */
router.get('/', async (req, res) => {

  res.send('mocsok');
});



router.post('/:itemId/', async (req, res) => {
  pino.info('edit captured %%%%%%%%');
  res.send('ZSIR')
 //  const {
 //        ticketNo,
 //        status,
 //        assignee,
 //        verifier,
 //        startedOn,
 //        shortDesc,
 //        priority
 //    } = req.body;
 //
 //    const newItem = new Item({
 //      ticketNo,
 //      status,
 //      assignee,
 //      verifier,
 //      startedOn,
 //      shortDesc,
 //      priority
 //    });
 //
 //    newItem.validateSync();
 //
 //    if (newItem.errors) {
 //        const errorMsg = createErrorMessage(newItem.errors);
 //
 //        pino.info('Error occured in router');
 //        res.status(400).render('create', {
 //            newItem: newItem,
 //            errors: {
 //                message: errorMsg
 //            }
 //        });
 //
 //    } else {
 //        await newItem.save();
 //        res.redirect('/');
 //    }
});

function createErrorMessage (errorObj) {
    const errorsCount = Object.keys(errorObj);
    const missingFields = errorsCount.join(', ');
    return `The ${missingFields} fields are required.`;
}

module.exports = router;
