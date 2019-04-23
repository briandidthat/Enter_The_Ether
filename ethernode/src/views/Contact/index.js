import React, { Component } from "react";
import ContactForm from "../../components/Form";


class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });

  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }


  render() {

    return (
      <React.Fragment>
          <ContactForm />
      </React.Fragment>
    )
  }
}

export default Contact;
