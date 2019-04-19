import React from "react";
import "./Nav.css"

//functional component for the Navbar
const Nav = () => {
    return (
    <div className="menu-header">
        <div className="nav">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://forum.ethernode.io">Forum</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="product">Product</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
};

export default Nav;
