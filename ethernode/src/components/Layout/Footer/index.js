import React from "react";
import icons from "../../../assets"

import { Container, Row, Col } from "react-grid-system";
import "./Footer.css";


//functional component for the footer
const Footer = () => (
    <footer>
      <Container>
        <Row>
          <Col sm={4}>
            <div className="footer">
              <img src={icons.ethernodeLogo} alt="blacklogo" className="footer-logo"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          <div className ="footer-links">
            <a href="https://github.com/ethernodeio"><img src={icons.githubLogo} alt="Github Logo" className="social-icon" /></a>
            <a href="https://twitter.com/Ethernode_io"><img src={icons.twitterLogo} alt="Twitter Logo" className="social-icon" /></a>
            <a href="https://www.reddit.com/r/Ethernode"><img src={icons.redditLogo} alt="Reddit Logo" className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/ethernode"><img src={icons.linkedInLogo} alt="LinkedIn Logo" className="social-icon" /></a>
            <a href="https://discord.gg/hXkUpV5"> <img src={icons.discordLogo} alt="Discord Logo" className="social-icon"></img></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
);

export default Footer;
