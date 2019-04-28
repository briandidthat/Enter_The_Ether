import React from "react";
import About from "../../components/About";
import Products from "../../components/Products/index";

//Functional Product component
//no functionality on HomePage aside from rendering so it can be a functional component
//no return statement because es6 allows for a parent () 
//which would automatically return the body cause JS is amaZinggggg.

const Product = () => (
    <React.Fragment>
        <About />
        <Products />
    </React.Fragment>
);

export default Product;