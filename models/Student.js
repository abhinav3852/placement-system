const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  company: String,
  status: String,
  photo: String
});

module.exports = mongoose.model('Student', studentSchema);