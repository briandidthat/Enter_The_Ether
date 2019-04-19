import React from "react";
import About from "../../components/HomePage/About"
import HomeCard from "../../components/HomePage/Card";
import HomeMap from "../../components/HomePage/Map";
import Features from "../../components/HomePage/Features"


const Home = () => {
    return (
      <div className="home">
        <About />
        <HomeCard />
        <HomeMap />
        <Features />
      </div>
    )
}


export default Home;
