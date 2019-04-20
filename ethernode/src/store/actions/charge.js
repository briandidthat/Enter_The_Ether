import * as actionTypes from "./actionTypes";

export const submitCharge = payload => {
    return {
      type: actionTypes.CHARGE_SUBMIT_CHARGE,
      payload: payload
    };
  };

export const getTier = () => {
    return {
      type: actionTypes.CHARGE_GET_TIER,
    };
};

export const getTiers = () => {
  return {
    type: actionTypes.CHARGE_GET_TIERS,
  };
};