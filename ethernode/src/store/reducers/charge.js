import * as actionTypes from "../actions/actionTypes";

const initialState = {
    state: 'none',
    totalPrice: 0,
    paymentInfo: ''
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.SUBMIT_CHARGE:
        return {
            ...state,
            state: 'loading'
        };
      case actionTypes.SUBMIT_CHARGE_SUCCESS:
        return {
            ...state,
            state: 'none',
        };
      case actionTypes.SUBMIT_CHARGE_ERROR:
        return {
          ...state,
          state: 'none'
        };
      case actionTypes.GET_PRICE_SUCCESS:
        return {
          ...state,
          price: action.payload.totalPrice,
          paymentInfo: action.payload.paymentInfo
        };

      default:
        return state;
    }
  }
  