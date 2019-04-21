import React, { Component } from "react";
import icons from "../../assets"
import About from "../../components/About"
import HomeMap from "../../components/Map";
import Features from "../../components/Features"

import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/Card/"
import CardHeader from '@material-ui/core/CardHeader';

import Button from "../../components/UI/Button";
import { Container, Col, Row } from "react-grid-system";

class Home extends Component {

  handleClick(e) {
    e.preventDefault()
    console.log("ready")
  }

  render() {
    return (
      <div className="home">
        <About>
          <h5>Ethernode is proudly built by a passionate team.<br></br>
            We believe in trust minimization and eliminating 3rd parties.<br></br>
            It doesnt matter if your a Developer or if it's your first experience.<br></br>
            We do the heavy lifting, you do the rest.
			    </h5>
        </About>
        <Container>
          <Row>
            <Col sm={4}>
              <Card>
                <CardHeader
                  title="Ethernode"
                />
                <CardContent>
                  <img src={icons.ethernodeLogo} alt="ethernode icon" style={{maxWidth: "8em"}} />
                  <p>Hardware for your home.<br />
                    a one stop shop solution.<br />
                  </p>
                  <CardActions>
                    <Button className="button button-accent"
                      onClick={this.handleClick}
                    >
                      Coming Soon!
                  </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Col>

            <Col sm={4}>
              <Card>
                <CardHeader
                  title="EnOs"
                />
                <CardContent>
                  <img src={icons.ethernodeLogo} alt="EnOS io icon" style={{maxWidth: "8em"}} />
                  <p>Our Linux based lightweight<br />
                    ETC Blockchain OS<br />
                  </p>
                  <CardActions>
                    <Button className="button button-accent"
                      onClick={this.handleClick}
                    >
                      Coming Soon!
                  </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Col>

            <Col sm={4}>
              <Card>
                <CardHeader
                  title="EnConnect"
                />
                <CardContent>
                  <img src={icons.enconnectLogo} alt="enConnect icon" style={{maxWidth: "8em"}} />
                  <p>Cloud Nodes for custom needs.<br />
                    Account access, and Support.
						    </p>
                  <CardActions>
                    <Button className="button button-accent"
                      onCLick={this.handleClick}
                    >
                      Coming Soon!
                  </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>

        <HomeMap />
        <Features />

      </div>
    );
  }
}

export default Home;
