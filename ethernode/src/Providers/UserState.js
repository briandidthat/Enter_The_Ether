import React, { useReducer } from "react";
import userReducer from "../store/reducers/user-reducer";
import { SAVE_ORDER, SEND_MESSAGE } from "../store/actions/actionTypes"

const UserContext = React.createContext({});

const UserStore = ({ children }) => {
  //add items to cartState
  const [state, dispatch] = useReducer(userReducer, {user: {} });

  const newOrder = order = (
    dispatch({type: SAVE_ORDER, order: order})
  )

  const newMessage = message => (
    dispatch({type: SEND_MESSAGE, message: message })
  )

  return (
    <UserContext.Provider
      value={{
        user: user,
        state: state,
        dispatch: dispatch,
        newOrder: newOrder,
        newMessage: newMessage
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;