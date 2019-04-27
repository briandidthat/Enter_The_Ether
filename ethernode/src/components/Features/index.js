import React from "react";
import { Container, Row, Col } from "react-grid-system";
import icons from "../../assets";
import "./Features.css";

const Features = () => (
  <section className="home-features">
    <Container>
      <Row>
        <Col sm={4}>
          <div className="home-feature">
            <img src={icons.hardware} alt="hardware img" />
            <h3>Hardware</h3>
            <p>
              Ethernode is your portal to access IoT solutions and the
              Blockchain. <br /> Built with a security conscious mindset and
              careful consideration of your needs. Our solution is state of the
              art. Nothing close to all those production nodes you hear about.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="home-feature">
            <img src={icons.nodes} alt="feature nodes" />
            <h3>Nodes Worldwide</h3>
            <p>
              Developers and Blockchain supporters come from all around the
              world. We are calling on you. Lets accelerate our beliefs. Every
              new node contributes to decentralization and immutability. Lets
              take back our privacy and put the power back in our hands. It's
              time for all of us to unite!
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="home-feature">
            <img src={icons.upTime} alt="feature uptime" />
            <h3>Fast Deployment</h3>
            <p>
              We've taken all the hard work out of your hands. Creating a node,
              deploying a smart contract, sending ETC, and verifying your
              transaction is a few clicks away. Accelerate your dAPP deployment!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Features;
