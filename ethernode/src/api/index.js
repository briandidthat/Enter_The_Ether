export const PAY_URL = "https://enpay.ethernode.io/authRPC/authnet";
export const API_URL = "https://enpay.ethernode.io/accountRPC/accounts";

export const checkoutUser = user => {
  let userData = {
    jsonrpc: "2.0",
    method: "processcc",
    params: [
      user.difShipping,
      user.cardNumber,
      user.expirationDate,
      "EtherNode",
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
    ]
  };
  return userData;
};

export const signUpUser = user => {
  let userInfo = {
    jsonrpc: "2.0",
    method: "processcc",
    params: [
      user.userEmail,
      user.userFirst,
      user.userLast,
      user.userPassword,
      user.userRole
    ]
  };
  return userInfo;
};
