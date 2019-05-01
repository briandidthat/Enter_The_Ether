import React, { useReducer } from "react";
import findIndex from "lodash/findIndex";
//set date for global state
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


export const CheckoutContext = React.createContext();

const initialState = {
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
  password:"",
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
  difBilling: false,
  madeOrder: false,
  
};

export function CheckoutProvider(props) {
  const steps = ["Shipping address", "Payment details", "Review your order"];
  //Set Global State based on user input
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ...initialState }
  );
  //Handle user input change
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
  };
  //Add Item To Cart
  const addItemToCart = item => {
    let tempCart = state.cart;
    if (tempCart.length < 0) {
      tempCart = [item];
    } else if (findIndex(tempCart, { sku: item.sku }) - 1) tempCart.push(item);
    setState({ cart: tempCart });
    console.log(state.cart);
  };
  //Get Cart Total
  const getTotal = cart => {
    let total = 0;
    cart.map(item => {
      let numeric = parseInt(item.itemCost);
      total = numeric + total;
      setState({ orderTotal: total });
      return total;
    });
  };



  return (
    <CheckoutContext.Provider
      value={{
        steps,
        addItemToCart,
        state,
        setState,
        handleChange,
        getTotal
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}
