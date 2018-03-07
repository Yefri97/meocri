const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var formSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
	fields: [{
    'question': { type: String },
    'required': { type: Boolean },
    'options': [String],
	}],
});

const Form = mongoose.model('forms', formSchema);

module.exports = Form;
