import React from "react";

const initialState = {
  userEmail: "",
  userRole: "",
  userFirst: "",
  userLast: "",
  message: "",
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
  billing: [
    {
      address1: "",
      address2: "",
      city: "",
      homeState: "",
      zip: 0,
      country: ""
    }
  ],
  shipping: [
    {
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: 0,
      country: ""
    }
  ]
};

export const userContext = React.createContext({
  user: initialState,
  addUser: user => {}
});

export default initialState;
