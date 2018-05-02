const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const pino = require('pino')();

/* GET home page. */
router.get('/', async (req, res, next) => {
  const items = await Item.find({});
  res.render('index', {items});
});

module.exports = router;
