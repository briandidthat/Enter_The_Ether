import React from "react";
import Button from "../../UI/Button";

const Card = ({ children }) => (
    <div 
      style={{ textAlign: "center"}}
      className="card"
    >
      {children}
      <br></br>
      <Button />
    </div>

);



export default Card;