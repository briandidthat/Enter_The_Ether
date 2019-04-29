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
  address: {
    type: Object,
    billing: {
      type: Object,
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      state: { type: String },
      postal: { type: Number },
      country: { type: String },
    },
    shipping: {
      type: Object,
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      state: { type: String },
      postal: { type: Number },
      country: { type: String },

    }
  }
});

const User = mongoose.model("User", accountSchema);

module.exports = User;
