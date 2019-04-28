import React, { useReducer } from "react";
import userReducer from "../store/reducers/user-reducer";
import { SAVE_ORDER, SEND_MESSAGE } from "../store/actions/actionTypes"

const UserContext = React.createContext({});

const UserStore = ({ children }) => {

  const [ state, dispatch ] = useReducer(userReducer, dispatch);

  const newOrder = order => (
    dispatch({type: SAVE_ORDER, payload: order})
  )
  const newMessage = message => (
    dispatch({type: SEND_MESSAGE, payload: message })
  )

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        newMessage,
        newOrder
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;