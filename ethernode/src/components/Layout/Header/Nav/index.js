import React from "react";
import "./Nav.css"

//functional component for the Navbar
const Nav = () => (
    <div className="menu-header">
        <div className="nav">
            <nav>
                <ul>
                    <li><a href="index.html">Home</a>  </li>
                    <li><a href="https://forum.ethernode.io">Forum</a></li>
                </ul>
            </nav>
        </div>
    </div>
);

export default Nav;
