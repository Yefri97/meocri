const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var formSchema = new Schema({
  name: String,
  description: String,
	fields: [{
    'type': { type: Number },
    'question': { type: String },
    'required': { type: Boolean },
    'options': [String],
	}],
});

const Form = mongoose.model('forms', formSchema);

module.exports = Form;
