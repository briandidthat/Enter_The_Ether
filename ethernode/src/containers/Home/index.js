import React from "react";
import HomeMap from "../../components/Map";
import Features from "../../components/Features"
import Interaction from "../../components/Interaction";
import HomeCards from "../../components/HomeCards";

//Functional Home component
//no functionality on HomePage aside from rendering so it can be a functional component
//no return statement because es6 allows for a parent () 
//which would automatically return the body cause JS is amaZinggggg.
const Home = () => (
  <div className="home">
    <Interaction />
    <br />
    <HomeCards />
    <HomeMap />
    <Features />
  </div>
);


export default Home;
