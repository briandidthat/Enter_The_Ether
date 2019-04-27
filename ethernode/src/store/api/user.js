import { post } from ".";

const user = {
  saveOrder(
    firstName,
    lastName,
    email,
    address1,
    address2,
    city,
    homeState,
    country,
    zip,
    cvv,
    cardType,
    cardNumber,
    expire
  ) {
    return post("auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address1: address1,
      address2: address2,
      city: city,
      homeState: homeState,
      country: country,
      zip: zip,
      cvv: cvv,
      cardType: cardType,
      cardNumber: cardNumber,
      expire: expire,
    });
  }
};

export default user;
