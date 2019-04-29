// import * as actionTypes from "../actions/actionTypes";

// const initialState = {
//   address1: "",
//   address2: "",
//   city: "",
//   cardType: "",
//   cardNumber: "",
//   cvv: "",
//   expire: "",
//   email: "",
//   country: "",
//   firstName: "",
//   homeState: "",
//   lastName: "",
//   message: "",
//   zip: "",
//   orderNumber: 0,
// };

// export default function userReducer(state = initialState, action) {
//   switch(action.type) {
//     case actionTypes.SAVE_ORDER:
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         lastName: action.payload.lastName,
//         email: action.payload.email,
//         address1: action.payload.address1,
//         address2: action.payload.address2,
//         city: action.payload.city,
//         homeState: action.payload.homeState,
//         country: action.payload.country,
//         zip: action.payload.zip,
//         cvv: action.payload.cvv,
//         cardType: action.payload.cardType,
//         cardNumber: action.payload.cardNumber,
//         expire: action.payload.expire
//       };
//     case actionTypes.SEND_MESSAGE:
//       return {
//         ...state,
//         firstName: action.payload.firstName,
//         lastName: action.payload.lastName,
//         email: action.payload.email,
//         message: action.payload.message
//       };
//     default:
//       return state;
//   }
// };


const newUser = (user, state) => {
    const newMessage = {...state, user}
    return {
        ...state,
        user: newMessage
    }
}



export default function userReducer(state, action) {
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
        return newUser(action.payload, state)
        //   ...state,
        //   user: user
        //   userFirst: action.userFirst,
        //   userLast: action.userLast,
        //   userEmail: action.userEmail,
        //   message: action.message

      default:
        return state;
    }
  }
  

  