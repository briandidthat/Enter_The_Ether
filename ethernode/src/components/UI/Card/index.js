import React from "react";
import "./Card.css"

const Card = ({ children }) => (
    <div 
      style={{ textAlign: "center"}}
      className="card"
    >
      {children}
    </div>

);



export default Card;