const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let nhieSchema = new Schema({
  question: {type: String, required: true, unique: true},
  adult: {type: Boolean, default: false},
});

let Model = mongoose.model('nhie', nhieSchema);

module.exports = Model;