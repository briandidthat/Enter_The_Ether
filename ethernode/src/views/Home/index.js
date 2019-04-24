import React from "react";
import HomeMap from "../../components/Map";
import Features from "../../components/Features"
import Interaction from "../../components/Interaction";
import HomeCards from "../../components/HomeCards";

//Functional Home component
//no functionality on HomePage aside from rendering so it can be a functional component
//no return statement because es6 allows for a parent () 
//which would automatically return the body cause JS is amaZinggggg.
//======================================================================================
//Why chose to make it __functional__?
//Pure functions that accept no arguments,
//and have predefined outputs should be stateless components.(tryna reduce side effects)

const Home = () => (
  <React.Fragment>
    <Interaction />
    <HomeCards />
    <HomeMap />
    <Features />
 </React.Fragment>
);


export default Home;
