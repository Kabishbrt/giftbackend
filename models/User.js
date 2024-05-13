// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  address: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  state: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
