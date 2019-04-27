import * as actionTypes from "./actionTypes"

export const submitCharge = payload => {
    return {
      type: actionTypes.SUBMIT_CHARGE,
      payload: payload
    };
  };
  
  export const getPrice = () => {
    return {
      type: actionTypes.GET_PRICE,
    };
  };