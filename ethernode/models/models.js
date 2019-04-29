const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountsSchema = mongoose.Schema({
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
      itemID: { type: String },
      itemName: { type: String },
      itemDesc: { type: String },
      itemQty: { type: String },
      itemCost: { type: String }
    },
    orderTotal: { type: String },
    orderStatus: { type: String }
  },
  address: {
    type: Object,
    billing: {
      type: Object,
      company: { type: String },
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      state: { type: String },
      postal: { type: String },
      country: { type: String },
      phone: { type: String }
    },
    shipping: {
      type: Object,
      company: { type: String },
      address1: { type: String },
      address2: { type: String },
      city: { type: String },
      state: { type: String },
      postal: { type: String },
      country: { type: String },
      phone: { type: String }
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
