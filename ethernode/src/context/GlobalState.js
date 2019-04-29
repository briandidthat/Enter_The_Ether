import React from "react";

export const userContext = React.createContext({
  user: {},
  addUser: user => {}
});

const initialState = {
    userEmail: "",
    userRole: "",
    userFirst: "",
    userLast: "",
    message: "",
    order: {
      orderId: 0,
      payType: "",
      items: {
        itemID: "",
        itemName: "",
        itemDesc: "",
        itemQty: 0,
        itemCost: 0
      },
      orderTotal: 0,
      orderStatus: "",
      cardNumber: 0,
      expiration: 0,
      cvv: 0
    },
    address: {
      billing: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        postal: 0,
        country: ""
      },
      shipping: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        postal: 0,
        country: ""
      }
    }

};

export default initialState;