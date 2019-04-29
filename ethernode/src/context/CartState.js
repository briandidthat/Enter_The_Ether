// import React, { useReducer } from "react";
// import ShopContext from "./shop-context";
// import shopReducer from "../store/reducers/shop-reducer";
// import {
//   ADD_PRODUCT_TO_CART,
//   REMOVE_PRODUCT_FROM_CART
// } from "../store/actions/actionTypes";

// const CartState = ({ children }) => {
//   //add items to cartState
//   const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

//   const addProductToCart = product => {
//       dispatch({ type: ADD_PRODUCT_TO_CART, product: product });
//   };

//   const removeProductFromCart = productId => {
//       dispatch({ type: REMOVE_PRODUCT_FROM_CART, productId: productId });
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         addProductToCart: addProductToCart,
//         cart: cartState.cart,
//         removeProductFromCart: removeProductFromCart
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default CartState;
