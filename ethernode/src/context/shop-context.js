import React from 'react';

const ShopContext =  React.createContext({
  steps: ["Shipping address", "Payment details", "Review your order"],
  products: [
        { id: 1, name: "Starter", desc: "500GB", price: "$399.99" },
        { id: 2, name: "Advanced", desc: "1TB", price: "$499.99" },
        { id: 3, name: "Boss", desc: "2TB", price: "$629.99" },
      ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});

export default ShopContext;


