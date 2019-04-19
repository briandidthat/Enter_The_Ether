import React from "react";
import { Container, Row, Col } from "react-grid-system";
import hardware from "../../../assets/home_features_hardware.svg";
import nodes from "../../../assets/home_features_nodes.svg";
import upTime from "../../../assets/home_features_uptime.svg";
import "./Features.css";

const Features = () => (

    <section className="home-features">
        <Container>
            <Row>
                <Col sm={4}>
                    <div className="home-feature">
                        <img src={hardware} alt="hardware img"></img>
                        <h3>Hardware</h3>
                        <p>Ethernode is your portal to access IoT solutions and the Blockchain. <br></br> Built with a security conscious mindset and careful consideration of your needs.
					       Our solution is state of the art. Nothing close to all those production nodes you hear about.</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="home-feature">
                        <img src={nodes} alt="feature nodes"></img>
                        <h3>Nodes Worldwide</h3>
                        <p>Developers and Blockchain supporters come from all around the world. We are calling on you. Lets accelerate our beliefs.
                           Every new node contributes to decentralization and immutability. Lets take back our privacy and put the power back in our hands.
					       It's time for all of us to unite!</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="home-feature">
                        <img src={upTime} alt="feature uptime"></img>
                        <h3>Fast Deployment</h3>
                        <p>We've taken all the hard work out of your hands. Creating a node, deploying a smart contract, sending ETC,
					       and verifying your transaction is a few clicks away. Accelerate your dAPP deployment!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

);

export default Features;
