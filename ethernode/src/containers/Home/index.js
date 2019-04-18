import React, { Component } from 'react'
import Card from "../../components/Card";
import HomeMap from "../../components/Map";


class Home extends Component {
  render() {
    return (
      <div>
        <Card />
        <HomeMap />
      </div>
    )
  }
}

export default Home;
