import React from "react";
import icons from "../../assets";
import { Container, Row, Col } from "react-grid-system";
import "./Map.css";

const HomeMap = () => (
  <div className="home-map">
    <br />
    <Container>
      <Row>
        <Col lg={12}>
          <div>
            <h2>Decentralized Node Network</h2>
            <h5>
              Join a community that believes in immutability and protecting
              privacy utilizing hardware ditributed across the Globe
            </h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="home-map-image">
            <img src={icons.mapImg} alt="Global node hosting blockchain map" />

            <div className="ring-container">
              <div className="ringring" />
              <div className="circle" />
            </div>

            <div className="ring-container2">
              <div className="ringring" />
              <div className="circle" />
            </div>

            <div className="ring-container3">
              <div className="ringring" />
              <div className="circle" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <br />
  </div>
);

export default HomeMap;
