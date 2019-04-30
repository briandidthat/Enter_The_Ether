const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  userEmail: { type: String, required: true, unique: true },
  userRole: { type: String, required: true },
  userFirst: { type: String },
  userLast: { type: String },
  orders: {
    type: Object,
    orderId: { type: String },
    payType: { type: String },
    items: {
      type: Object,
      itemID: { type: Number },
      itemName: { type: String },
      itemDesc: { type: String },
      itemQty: { type: Number },
      itemCost: { type: String }
    },
    orderTotal: { type: Number },
    orderStatus: { type: String },
    cardNumber: { type: Number },
    expiration: { type: Number },
    cvv: { type: Number }
  },
  billingAddress1: { type: String },
  billingAddress2: { type: String },
  billingCity: { type: String },
  billingState: { type: String },
  billingZip: { type: Number },
  billingCountry: { type: String },
  shippingAddress1: { type: String },
  shippingAddress2: { type: String },
  shippingCity: { type: String },
  shippingState: { type: String },
  shippingZip: { type: Number },
  shippingCountry: { type: String }
});

const User = mongoose.model("User", accountSchema);

module.exports = User;
