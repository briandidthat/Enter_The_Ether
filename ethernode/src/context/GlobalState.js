import React from "react";

const initialState = {
  userEmail: "",
  userRole: "",
  userFirst: "",
  userLast: "",
  message: "",
  diffBilling: false,
  billingAddress1: "",
  billingAddress2: "",
  billingCity: "",
  billingState: "",
  billingZip: "",
  billingCountry: "",
  shippingAddress1: "",
  shippingAddress2: "",
  shippingCity: "",
  shippingState: "",
  shippingZip: "",
  shippingcountry: "",
  order: [
    {
      orderId: 0,
      payType: "",
      items: [
        {
          itemID: "",
          itemName: "",
          itemDesc: "",
          itemQty: 0,
          itemCost: 0
        }
      ],
      cardHolder: "",
      cardNumber: 0,
      cvv: 0,
      expiration: 0,
      orderTotal: 0,
      orderStatus: ""
    }
  ],
};

export const userContext = React.createContext({
  user: initialState,
  addUser: user => {}
});

export default initialState;
