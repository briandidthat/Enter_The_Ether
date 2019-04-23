import React, { Component } from 'react'
import About from "../../components/About"
import Products from "../../components/Products";

const Product = () => (
    <React.Fragment>
        <About />
        <br />
        <Products />
        <br />
        <br />
    </React.Fragment>
);

export default Product;