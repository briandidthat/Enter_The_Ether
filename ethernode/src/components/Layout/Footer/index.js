import React from "react";
import blackLogo from "../../../assets/ethernode_logo_black.svg";
import githubLogo from "../../../assets/github_logo.svg";
import twitterLogo from "../../../assets/twitter_logo.svg";
import linkedInLogo from "../../../assets/linkedin-brands.svg"
import redditLogo from "../../../assets/reddit-brands.svg";
import discordLogo from "../../../assets/discord-brands.svg";
import { Container, Row, Col } from "react-grid-system";
import "./Footer.css";


//functional component for the footer
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={4}>
            <div className="footer">
              <img src={blackLogo} alt="blacklogo" className="footer-logo"></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <a href="https://github.com/ethernodeio"><img src={githubLogo} alt="Github Logo" className="social-icon" /></a>
            <a href="https://twitter.com/Ethernode_io"><img src={twitterLogo} alt="Twitter Logo" className="social-icon" /></a>
            <a href="https://www.reddit.com/r/Ethernode"><img src={redditLogo} alt="Reddit Logo" className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/ethernode"><img src={linkedInLogo} alt="LinkedIn Logo" className="social-icon" /></a>
            <a href="https://discord.gg/hXkUpV5"> <img src={discordLogo} alt="Discord Logo" className="social-icon"></img></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;
