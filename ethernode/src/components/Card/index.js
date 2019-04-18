import React from "react";
import styles from "./Card.css";
import ethernodeLogo from "../../assets/ethernode_logo.svg";
import enconnectLogo from "../../assets/enconnect_logo.svg";
import { Container, Row, Col } from "react-grid-system";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Button
} from "shards-react";

const HomeCards = () => (
    <div className={styles.homeCards}>
        <Container>
            <Row>
                <Col sm={4}>
                <Card style={{ maxWidth: "300px" }}>
                    <CardImg src={ethernodeLogo} alt="Ethernode Logo" />
                    <CardBody>
                        <CardTitle>Ethernode</CardTitle>
                        <p>Hardware for your home.<br></br>
                            a one stop shop solution.
                        </p>
                        <Button>Coming Soon!</Button>
                    </CardBody>
                </Card>
                </Col>

                <Col sm={4}>
                <Card style={{ maxWidth: "300px" }}>
                    <CardImg src={ethernodeLogo} alt="Ethernode Logo" />
                    <CardBody>
                        <CardTitle>Enos.io</CardTitle>
                        <p>Hardware for your home.<br></br>
                            a one stop shop solution.
                        </p>
                        <Button>Coming Soon!</Button>
                    </CardBody>
                </Card>
                </Col>

                <Col sm={4}>
                <Card style={{ maxWidth: "300px" }}>
                    <CardImg src={enconnectLogo} alt="Enconnect Logo" />
                    <CardBody>
                        <CardTitle>EnConnect.io</CardTitle>
                        <p>Hardware for your home.<br></br>
                            a one stop shop solution.
                        </p>
                        <Button>Coming Soon!</Button>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
);



export default HomeCards;