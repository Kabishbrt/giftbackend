const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  customerFirstName: String,
  customerLastName: String,
  date: Date,
  distributor: String,
  postcode: String,
  state: String,
  itemName: String,
  itemImage: String,
  itemPrice: String,
  phoneNumber: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
