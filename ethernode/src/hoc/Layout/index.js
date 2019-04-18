import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

// Layout function expression that will pass all components as children
const layout = props => (
  <React.Fragment>
    <Header />
    <main>{props.children}</main>
    <Footer/>
  </React.Fragment>
);

export default layout;
