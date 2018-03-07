const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://node:node@ds259778.mlab.com:59778/meocri-db');

const Form = require('../form');

// GET api listing.
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/forms', (req, res) => {
  Form.find({}, function(err, form) {
    if (err)
      res.send(err);

    res.json(form);
  });
});

module.exports = router;
