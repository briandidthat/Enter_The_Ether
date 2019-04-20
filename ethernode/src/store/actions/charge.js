import * as actionTypes from "./actionTypes";

export const submitCharge = payload => {
    return {
      type: actionTypes.SUBMIT_CHARGE,
      payload: payload
    };
};

export const getTiers = () => {
    return {
      type: actionTypes.GET_TIERS,
    };
};

export const getTier = () => {
    return {
      type: actionTypes.GET_TIER,
    };
};

