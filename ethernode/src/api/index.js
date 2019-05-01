const axios = require("axios");

export default function makeCharge(user) {
  const data = {
    jsonrpc: "2.0",
    method: "processcc",
    params: [
      "true",
      user.cardNumber,
      user.expirationDate,
      user.cvv,
      "EtherNode",
      user.userFirst,
      user.userLast,
      "ETC",
      user.shippingAddress1,
      user.shippingAddress2,
      user.shippingZip,
      user.shippingCountry,
      user.cart,
      user.orderTotal,
      user.userFirst,
      user.userLast,
      "ETC",
      user.billingAddress1,
      user.billingCity,
      user.BillingZip,
      user.billingZip,
      user.billingCountry,
      user.shippingCost,
      "USPS Ground"
    ],
    id: 15
  };

  axios
    .post("https://enpay.ethernode.io/authRPC/authnet", { data })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  console.log(data);
}
