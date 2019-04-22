import React, { Component } from "react";
import { Container, Row } from "react-grid-system";

//import Card/TextField components
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import TextField from "@material-ui/core/TextField";
// import Button from "../../components/UI/Button";


import "./Contact.css";

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
      <div className="container">
        <Container>
          <Row>
            <Card>
              {/* <CardContent>
                <Row>
                <TextField
                  id="outlined-name"
                  label="FirstName"
                  value={this.state.firstName}
                  onChange={this.handleChange('firstName')}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="FirstName"
                  value={this.state.firstName}
                  onChange={this.handleChange('lastName')}
                  margin="normal"
                  variant="outlined"
                />
              </Row>
              <Row>
                <TextField
                  id="outlined-name"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  variant="outlined"
                />
              </Row>
                <Row>
                <TextField
                  id="outlined-name"
                  multiline={true}
                  label="Message"
                  value={this.state.message}
                  onChange={this.handleChange('message')}
                  margin="normal"
                  variant="outlined"
                />
                </Row>
              </CardContent>
              <CardActions>
                <Button
                  onClick={this.handleFormSubmit}
                > Submit
                </Button>
              </CardActions> */}
            </Card>
          </Row>
        </Container>
        <br />

      </div>
    )
  }
}

export default Contact;
