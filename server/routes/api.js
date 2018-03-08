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

router.post('/form/create', (req, res) => {
  var form = new Form;
  form.name = req.body.name;
  form.description = req.body.description;
  form.save((err) => {
    if (err)
      throw err;
    // Saved
  });
  res.json(form);
});

router.get('/form/:id', (req, res) => {
  Form.findById(req.params.id, function(err, form) {
    if (err)
      res.send(err);

    res.json(form);
  });
});

router.post('/form/:id', (req, res) => {
  Form.findById(req.params.id, function(err, form) {
    if (err)
      res.send(err);

    form.fields = req.body.fields;

    form.save((err) => {
      if (err)
        throw err;
      // Saved
    });
  });
  res.json(form);
});

router.get('/form-save/:id', (req, res) => {

  fields = [{
    "question": "What is your name",
    "required": true,
    "options": [],
  }, {
    "question": "How óld are you?",
    "required": false,
    "options": [
      "15",
      "20",
      "69",
    ],
  }];

  var id = +req.params.id;
  Form.findOne({ "id": id }, function(err, form) {
    if (err)
      res.send(err);

    form.fields = fields;

    form.save((err) => {
      if (err)
        throw err;
      // Saved
    });

    res.json(form);

  });
  //res.json({ "msg": "err" });
});

module.exports = router;
