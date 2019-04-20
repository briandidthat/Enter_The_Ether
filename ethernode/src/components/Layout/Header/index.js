import React from "react";
import icons from "../../../assets";
import Nav from "./Nav";

import "./Header.css";

//functional component for the header
const Header = () => (

    <div className="menu-header">
        <div className="header">
          <img src={icons.ethernodeLogo} alt="EtherNode Logo" className="logo"></img>
          {/* <h5 className="title">Ethernode</h5> */}
          <Nav />
        </div>
    </div>
  

    
);

export default Header;