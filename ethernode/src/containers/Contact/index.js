import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

//import Card/TextField components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "../../components/UI/Button";



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
            <Col md={6}>
            <Card style={styles.card}>
              <CardContent>
                <Row>
                <Col md={6}>
                <TextField
                  id="outlined-name"
                  label="First Name"
                  fullWidth
                  value={this.state.firstName}
                  onChange={this.handleChange('firstName')}
                  margin="normal"
                  variant="outlined"
                />
                </Col>
                <Col md={6}>
                <TextField
                  id="outlined-name"
                  label="Last Name"
                  value={this.state.lastName}
                  fullWidth
                  onChange={this.handleChange('lastName')}
                  margin="normal"
                  variant="outlined"
                />
                </Col>
              </Row>
              
              <Row>
                <Col lg={12}>
                <TextField
                  id="outlined-name"
                  label="Email"
                  type="email"
                  fullWidth
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  margin="normal"
                  variant="outlined"
                />
                </Col>
              </Row>
                <Row>
              <Col lg={12}>
                <TextField
                  id="outlined-name"
                  label="Message"
                  fullWidth
                  multiline
                  value={this.state.message}
                  onChange={this.handleChange('message')}
                  margin="normal"
                  variant="outlined"
                />
                </Col>
                </Row>
              </CardContent>
                <Button 
                  className="button button-accent"
                  onClick={this.handleFormSubmit}
                > Submit
                </Button>
          </Card>
          </Col>
          </Row>
        </Container>
        <br />
      </div>
    )
  }
}

const styles = {
  card: {
    background: "white",
    justifyContent: "center"
  }

};

export default Contact;
