import React from 'react';

const ShopContext =  React.createContext({
  products: [
        { itemId: 1, itemName: "Starter", itemDesc: "500GB",  itemQty: "1", itemCost: "399.99" },
        { itemId: 2, itemName: "Advanced", itemDesc: "1TB", itemQty: "1", itemCost: "499.99" },
        { itemId: 3, itemName: "Boss", itemDesc: "2TB", itemQty: "1", itemCost: "629.99" },
      ]
});

export default ShopContext;
