import React from "react";
import styles from './Nav.css'

//functional component for the Navbar
const Nav = () => (
<div className={styles.nav}>
    <nav>
        <a href="index.html">Home</a>  
        &nbsp;
        <a href="https://forum.ethernode.io">Forum</a>
    </nav>
</div>
);

export default Nav;
