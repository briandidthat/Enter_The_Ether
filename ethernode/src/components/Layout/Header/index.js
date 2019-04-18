import React from "react";
import ethernodeLogo from "../../../assets/ethernode_logo_name.svg"
import styles from "./Header.css";
import Nav from "./Nav"
import { Container, Row, Col } from "react-grid-system";

//functional component for the header
const Header = () => (
    <div className={styles.header}>
        <Container>
            <Row>
                <Col md={6}>
                    <img src={ethernodeLogo} alt="EtherNode Logo" className="logo"></img>
                </Col>
                <Col md={6}>
                    <h1 className="title">Ethernode</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Nav />
                </Col>
            </Row>
        </Container>
    </div>
);

export default Header;