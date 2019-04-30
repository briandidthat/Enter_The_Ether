import React, { useReducer } from "react";
import findIndex from "lodash/findIndex";

export const CheckoutContext = React.createContext();

const initialState = {
  userEmail: "",
  userRole: "",
  userFirst: "",
  userLast: "",
  message: "",
  cardHolder: "",
  cardNumber: "",
  cvv: "",
  expiration: "",
  orderTotal: 0,
  orderId: "",
  orderStatus: "",
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
  difBilling: false,
  madeOrder: false,
  cart: []
};

export function CheckoutProvider(props) {
  const steps = ["Shipping address", "Payment details", "Review your order"];

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ...initialState }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
  };

  const addItemToCart = item => {
    let tempCart = state.cart;
    if (tempCart.length < 1) {
      tempCart = [item];
    } else if (findIndex(tempCart, { sku: item.sku }) - 1) tempCart.push(item);
    setState({ cart: tempCart });
    console.log(state.cart);
  };

  const getTotal = cart => {
    let total = 0;
    cart.map(item => {
      let numeric = parseInt(item.price);
      total = numeric + total;
      setState({ orderTotal: total });
      return total;
    });
    console.log(total);
  };

  return (
    <CheckoutContext.Provider
      value={{ steps, addItemToCart, state, setState, handleChange, getTotal }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}

// let updatedCart;
// let updatedItemIndex;
// updatedCart = [...state.cart];
// updatedItemIndex = updatedCart.findIndex(item => item.id === item.itemId);
// if (updatedItemIndex <= 0) {
//   updatedCart.push({ quantity: 1 });
// } else {
//   const updatedItem = {
//     ...updatedCart[updatedItemIndex]
//   };
//   updatedItem.quantity++;
//   updatedCart[updatedItemIndex] = updatedItem;
//   console.log(updatedItem);
// }
// return { ...state, cart: updatedCart };
