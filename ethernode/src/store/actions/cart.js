import * as actionTypes from "./actionTypes"

export const addProductToCart = product => {
    return dispatch => {
        dispatch({
          type: actionTypes.ADD_PRODUCT_TO_CART,
          payload: product
        });
    };
  };
  
  export const removeProductFromCart = productId => {
      return dispatch => {
          dispatch({
            type: actionTypes.REMOVE_PRODUCT_FROM_CART,
            payload: productId
          });
      };
  };
  
  
  