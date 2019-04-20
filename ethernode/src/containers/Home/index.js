import React, { Component } from "react";
import icons from "../../assets"
import About from "../../components/HomePage/About"
import HomeMap from "../../components/HomePage/Map";
import Features from "../../components/HomePage/Features"
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";

class Home extends Component {
  state = {
    amount: 0,
    tier: []
  }

  handleClick(e) {
    e.preventDefault()
    console.log("ready")
  }

  render() {

    return (
      <div className="home">
        <About />
        <section className="home-cards">
          <div className="container">
            <Card>
              <div className="card">
                <img src={icons.ethernodeLogo} alt="ethernode icon"></img>
                <h4>Ethernode</h4>
                <p>Hardware for your home.<br></br>
                  a one stop shop solution.<br></br>
                </p>
                <Button
                  className="button button-accent"
                  onClick={this.handleClick}
                >
                  Coming Soon!</Button>
              </div>
            </Card>

            <Card>
              <div className="card">
                <img src={icons.ethernodeLogo} alt="EnOS io icon"></img>
                <h4>EnOS.io</h4>
                <p>Our Linux based lightweight<br></br>
                  ETC Blockchain OS<br></br>
                </p>
                <Button
                  className="button button-accent"
                  onClick={this.handleClick}
                >
                  Coming Soon!</Button>
              </div>
            </Card>

            <Card>
              <div className="card">
                <img src={icons.enconnectLogo} alt="enconnect icon"></img>
                <h4>EnConnect.io</h4>
                <p>Cloud Nodes for custom needs.<br></br>
                  Account access, and Support.
						    </p>
                <Button
                  className="button button-accent"
                  onClick={this.handleClick}
                >
                  Coming Soon!</Button>
              </div>
            </Card>

          </div>
        </section>
        <HomeMap />
        <Features />
      </div>
    );
  }
}


export default Home;
