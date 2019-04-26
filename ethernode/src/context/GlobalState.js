import React, { useReducer } from 'react';
import ShopContext from './shop-context';
import shopReducer from "../store/reducers/shop-reducer";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../store/actions"


const GlobalState = props => {
  const products = [
    { id:"1", name: "Starter", desc: "500GB", price: "$399.99" },
    { id:"2", name: "Advanced", desc: "1TB", price: "$499.99" },
    { id:"3", name: "Boss", desc: "2TB", price: "$629.99" },
  ];

  const paymentDetails = [
    { name: "Card type", detail: "dsf" },
    { name: "Card holder", detail: "cxdas" },
    { name: "Card number", detail: "sadfds" },
    { name: "Expiration date", detail: "sadafg" }
  ];

   //Reducer to go over all state items and spread them 
   //and add values to an state object
   const [state, setState] = useReducer(
     (state, newState) => ({ ...state, ...newState }),
       {address1: "", address2: "", city: "", homeState: "", 
        country:"", firstName:"", lastName:"", email:"", zip:"",
        cvv: "", cardType:"", cardHolder:"", cardNumber:"", expire:"",
        open: false, scroll: "paper"
     }
  );
  
  //add items to cartState
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT_TO_CART, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT_FROM_CART, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        paymentDetails: paymentDetails,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        setState: setState,
        state: state,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;