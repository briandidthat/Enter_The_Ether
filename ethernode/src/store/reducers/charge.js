import * as actionTypes from "../actions/actionTypes";

const initialState = {
    state: 'none',
    tier: null,
    tiers: [],
    paymentInfo: false
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
    case actionTypes.GET_TIER_SUCCESS:
      return {
        ...state,
        tier: action.payload.tier,
        paymentInfo: action.payload.paymentInfo
      };
    case actionTypes.GET_TIERS_SUCCESS:
      return {
        ...state,
        tiers: action.payload.tiers
      };
    default:
      return state;
  }
}
