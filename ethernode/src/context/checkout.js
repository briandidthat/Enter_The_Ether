import React, { useReducer } from "react";
import findIndex from "lodash/findIndex";
import { initialState } from "../utils/constants";

export const CheckoutContext = React.createContext();

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
      let numeric = parseFloat(item.itemCost);
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
