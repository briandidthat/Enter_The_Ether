//set date for global state
let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

export const initialState = {
  userEmail: "",
  userRole: "",
  userFirst: "",
  userLast: "",
  cardHolder: "",
  cardNumber: "",
  cvv: "",
  expiration: "",
  orderTotal: "",
  orderId: "",
  orderStatus: "",
  orderDate: today,
  userPassword: "",
  cart: [],
  salesTax: "",
  payType: "Credit Card",
  billingAddress1: "",
  billingAddress2: "",
  billingCity: "",
  billingState: "",
  billingZip: "",
  billingCountry: "",
  shippingAddress1: "",
  shippingAddress2: "",
  shippingCity: "",
  shippingState: "",
  shippingZip: "",
  shippingcountry: "",
  shippingCost: 0,
  difShipping: false,
  madeOrder: false
};

export const checkoutInfo = user => {
  let userData = {
    jsonrpc: "2.0",
    method: "processcc",
    params: [
      user.difShipping,
      user.cardNumber,
      user.expirationDate,
      user.cvv,
      "",
      user.userFirst,
      user.userLast,
      "",
      user.shippingAddress1,
      user.shippingCity,
      user.shippingState,
      user.shippingZip,
      user.shippingCountry,
      user.cart,
      user.salesTax,
      user.userFirst,
      user.userLast,
      "",
      user.billingAddress1,
      user.billingCity,
      user.BillingState,
      user.billingZip,
      user.billingCountry,
      user.shippingCost,
      "USPS Ground",
      "USPS Priority Ground",
      "AUTHONLYTRANSACTION",
      user.orderTotal
    ],
    id: 2
  };
  return userData;
};
//Cleanse user before firing it off 
export const signUpInfo = user => {
  let userInfo = {
    jsonrpc: "2.0",
    method: "createUser",
    params: [
      user.userEmail,
      user.userFirst,
      user.userLast,
      user.userPassword,
      "customer"
    ],
    id: 4
  };
  return userInfo;
};