import React from "react";
import { Row, Col } from "react-grid-system";
import "./Nav.css"


//functional component for the Navbar
const Nav = () => (
        <Row>
          <Col lg={12}>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="https://forum.ethernode.io">Forum</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="product">Product</a></li>
                </ul>
            </nav>
          </Col>
        </Row>
)

export default Nav;
