import React from "react";
import ContactForm from "../../components/ContactForm";

//Functional Contact component
//no functionality on HomePage aside from rendering so it can be a functional component
//no return statement because es6 allows for a parent () 
//which would automatically return the body cause JS is amaZinggggg.
//======================================================================================
//Why chose to make it __functional__?
//Pure functions that accept no arguments,
//and have predefined outputs should be stateless components.(tryna reduce side effects)

const Contact = props => (
      <React.Fragment>
          <ContactForm />
      </React.Fragment>
)

export default Contact;
