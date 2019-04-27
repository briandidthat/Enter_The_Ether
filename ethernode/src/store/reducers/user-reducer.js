import * as actionTypes from "../actions/actionTypes";

const initialState = {
  address1: "",
  address2: "",
  city: "",
  cardType: "",
  cardNumber: "",
  cvv: "",
  expire: "",
  email: "",
  country: "",
  firstName: "",
  homeState: "",
  lastName: "",
  message: "",
  zip: "",
  orderNumber: 0,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_ORDER:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        address1: action.payload.address1,
        address2: action.payload.address2,
        city: action.payload.city,
        homeState: action.payload.homeState,
        country: action.payload.country,
        zip: action.payload.zip,
        cvv: action.payload.cvv,
        cardType: action.payload.cardType,
        cardNumber: action.payload.cardNumber,
        expire: action.payload.expire
      };
    case actionTypes.SEND_MESSAGE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        message: action.payload.message
      };
    default:
      return state;
  }
};
