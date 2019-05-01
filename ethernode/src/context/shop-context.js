import React from 'react';

const ShopContext =  React.createContext({
  products: [
        { itemId: 1, itemName: "Starter", itemDesc: "500GB", itemCost: "399.99" },
        { itemID: 2, itemName: "Advanced", itemDesc: "1TB", itemCost: "499.99" },
        { itemId: 3, itemName: "Boss", itemDesc: "2TB", itemCost: "629.99" },
      ]
});

export default ShopContext;
