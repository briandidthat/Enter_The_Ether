import React from "react";
import icons from "../../../assets"

import { Container, Row, Col } from "react-grid-system";
import "./Footer.css";


//functional component for the footer
const Footer = () => (

    <div className="footer">
      <Container>
        <Row>
          <Col sm={6}>
              <img src={icons.headerDark} alt="blacklogo" className="footer-logo" title="Ethernode" />
          </Col>
          <Col md={6}>
          <div className="footer-links">
            <a href="https://github.com/ethernodeio"><img src={icons.githubLogo} alt="Github Logo" className="social-icon" /></a>
            <a href="https://twitter.com/Ethernode_io"><img src={icons.twitterLogo} alt="Twitter Logo" className="social-icon" /></a>
            <a href="https://www.reddit.com/r/Ethernode"><img src={icons.redditLogo} alt="Reddit Logo" className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/ethernode"><img src={icons.linkedInLogo} alt="LinkedIn Logo" className="social-icon" /></a>
            <a href="https://discord.gg/hXkUpV5"> <img src={icons.discordLogo} alt="Discord Logo" className="social-icon"></img></a>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    
);

export default Footer;
