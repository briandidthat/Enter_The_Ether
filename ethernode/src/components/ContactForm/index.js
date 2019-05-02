import React, {  useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Button from "../UI/Button";
import { Container, Row, Col } from "react-grid-system";
import  { ContactContext }  from "../../context"

const ContactForm = () => {

  const { userInfo, handleChange, handleSubmit } = useContext(ContactContext)

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
                      name="userFirst"
                      margin="normal"
                      variant="outlined"
                      value={userInfo.userFirst}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col md={6}>
                    <TextField
                      fullWidth
                      id="outlined-name"
                      label="Last Name"
                      name="userLast"
                      margin="normal"
                      variant="outlined"
                      value={userInfo.userLast}
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
                      name="userEmail"
                      margin="normal"
                      variant="outlined"
                      value={userInfo.userEmail}
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
                      value={userInfo.message}
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
      <br />
    </React.Fragment>
  );
};

const styles = {
  card: {
    background: "white",
    justifyContent: "center"
  }
};

export default ContactForm;
