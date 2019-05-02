import React from "react";
import icons from "../../../assets";
import Nav from "./Nav";

import { Container, Row, Col } from "react-grid-system";
import "./Header.css";

//functional component for the header
const Header = () => (
  
    <div className="menu-header">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="header">
              <img src={icons.darkHeader} alt="EtherNode Logo" className="logo"></img>
            </div>
          <Nav />
        </Col>
        </Row>
        </Container>
    </div>
);

export default Header;