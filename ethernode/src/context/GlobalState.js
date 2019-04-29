

export const initialState = {
  userEmail: "",
  userRole: "",
  userFirst: "",
  userLast: "",
  message:"",
  order: {
    orderId: 0,
    payType: "",
    items: {
      itemID: "",
      itemName: "",
      itemDesc: "",
      itemQty: 0,
      itemCost: 0
    },
    orderTotal: 0,
    orderStatus: "",
    cardNumber: 0,
    expiration: 0,
    cvv: 0
  },
  address: {
    billing: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      postal: 0,
      country: ""
    },
    shipping: {
      address1: "",
      address2: "",
      city: "",
      state: "",
      postal: 0,
      country: ""
    }
  }
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "MAKE_ORDER":
      return {
        ...state,
        userFirst: action.userFirst,
        userLast: action.lastName,
        userEmail: action.email,
        address1: action.address1,
        address2: action.address2,
        city: action.city,
        homeState: action.homeState,
        country: action.country,
        zip: action.zip,
        cvv: action.cvv,
        cardType: action.cardType,
        cardNumber: action.cardNumber,
        expire: action.expire,
        items: {
          itemID: action.itemID,
          itemName: action.itemName,
          itemDesc: action.itemDesc,
          itemQty: action.itemQty,
          itemCost: action.itemCost
        }
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        userFirst: action.userFirst,
        userLast: action.userLast,
        userEmail: action.userEmail,
        message: action.message
      };
    default:
      return state;
  }
}

export default userReducer;
