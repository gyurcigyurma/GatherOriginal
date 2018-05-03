const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const pino = require('pino')();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const items = await Item.find({});
  res.render('index', {items});
});

router.get('/items/create', async (req, res, next) => {
    res.render('create');
});

router.post('/items/:itemId/delete/', async (req, res, next) => {
  const items = await Item.find({_id:  req.params.itemId}).remove();
  //await newItem.save();
  res.redirect('/');
});

router.post('/items/:itemId/edit/', async (req, res, next) => {
  const itemTo = await Item.findOne({_id:  req.params.itemId});
  //await newItem.save();
  //pino.info('!!!!!!!!>>>>>>>', itemTo);
  res.render('edit', {itemTo});
})


router.post('/items/create', async (req, res, next) => {
  pino.info('POST CREATE OK')
    const {
        ticketNo,
        status,
        assignee,
        verifier,
        startedOn,
        shortDesc,
        priority
    } = req.body;

    const newItem = new Item({
      ticketNo,
      status,
      assignee,
      verifier,
      startedOn,
      shortDesc,
      priority
    });

    newItem.validateSync();

    if (newItem.errors) {
        const errorMsg = createErrorMessage(newItem.errors);

        pino.info('Error occured in router');
        res.status(400).render('create', {
            newItem: newItem,
            errors: {
                message: errorMsg
            }
        });

    } else {
        await newItem.save();
        res.redirect('/');
    }
});

function createErrorMessage (errorObj) {
    const errorsCount = Object.keys(errorObj);
    const missingFields = errorsCount.join(', ');
    return `The ${missingFields} fields are required.`;

}


module.exports = router;
