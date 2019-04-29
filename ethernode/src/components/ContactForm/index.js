import React, { useReducer } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Button from "../UI/Button";
import { Container, Row, Col } from "react-grid-system";

//Functional ContactForm Component
const ContactForm = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    }
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <React.Fragment>
      <br />
      <Container>
        <Row>
          <Col lg={6}>
            <Card style={styles.card}>
              <CardHeader title="Contact Us" />
              <CardContent>
                <Row>
                  <Col md={6}>
                    <TextField
                      fullWidth
                      id="outlined-name"
                      label="First Name"
                      name="firstName"
                      margin="normal"
                      variant="outlined"
                      value={state.firstName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      fullWidth
                      id="outlined-name"
                      label="Last Name"
                      name="lastName"
                      margin="normal"
                      variant="outlined"
                      value={state.lastName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <TextField
                      fullWidth
                      id="outlined-name"
                      label="Email"
                      type="email"
                      name="email"
                      margin="normal"
                      variant="outlined"
                      value={state.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <TextField
                      fullWidth
                      multiline
                      id="outlined-name"
                      label="Message"
                      name="message"
                      margin="normal"
                      variant="outlined"
                      value={state.message}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Button className="button button-accent" onClick={handleSubmit}>
                  {" "}
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Container>
      )}
      <br />
    </React.Fragment>
  );
};

const styles = {
  card: {
    background: "#B1C4B1",
    justifyContent: "center"
  }
};

export default ContactForm;
