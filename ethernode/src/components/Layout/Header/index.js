import React from "react";
import ethernodeLogo from "../../../assets/ethernode_logo_name.svg"
import Nav from "./Nav"

import "./Header.css";

//functional component for the header
const Header = () => (
    <div className="menu-header">
        <div className="header">
          <img src={ethernodeLogo} alt="EtherNode Logo" className="logo"></img>
          <Nav />
        </div>
    </div>
);

export default Header;