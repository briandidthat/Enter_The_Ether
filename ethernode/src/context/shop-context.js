import React from 'react';


const ShopContext =  React.createContext({
  paymentDetails: [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Mr Aaron Lowry" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiration date", detail: "04/2024" }
      ],
  products: [
        { id: 1, name: "Starter", desc: "500GB", price: "$399.99" },
        { id: 2, name: "Advanced", desc: "1TB", price: "$499.99" },
        { id: 3, name: "Boss", desc: "2TB", price: "$629.99" },
      ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
  calculateCartTotal: products => {}

});

export default ShopContext;
