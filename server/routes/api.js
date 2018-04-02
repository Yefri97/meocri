const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://node:node@ds259778.mlab.com:59778/meocri-db');

const Form = require('../form');

// GET api listing.
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all the forms
router.get('/forms', (req, res) => {
  Form.find({}, function(err, form) {
    if (err)
      res.send(err);

    res.json(form);
  });
});

// Get the form with the id
router.get('/form/:id', (req, res) => {
  Form.findById(req.params.id, function(err, form) {
    if (err)
      res.send(err);

    res.json(form);
  });
});

// Create a form with a name and a description
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

// Save the form with the id
router.post('/form/:id', (req, res) => {
  Form.findById(req.params.id, function(err, form) {
    if (err)
      res.send(err);

    form.name = req.body.form.name;
    form.description = req.body.form.description;
    form.fields = req.body.form.fields;

    form.save((err) => {
      if (err)
        throw err;
      // Saved
    });
    res.json(form);
  });
});

module.exports = router;
