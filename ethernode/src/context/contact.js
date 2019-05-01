import React, { useState } from "react";

export const ContactContext = React.createContext();

export function ContactProvider(props) {
  const [userInfo, setUser] = useState({
    userFirst: "",
    userLast: "",
    userEmail: "",
    message: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...userInfo, [name]: value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(userInfo);
  };

  return (
    <ContactContext.Provider
      value={{ userInfo, setUser, handleChange, handleSubmit }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}
