import React, { Component } from "react";
import Card from "../../components/UI/Card";
import InputWithIcon from "../../components/Form";
import "./Contact.css";


class Contact extends Component {
  
  render() {
    return (
      <div>
        <Card>
          <InputWithIcon />
        </Card>
      </div>
    )
  }
}

export default Contact;
