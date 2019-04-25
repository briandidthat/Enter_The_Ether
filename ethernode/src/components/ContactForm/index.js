import React, { useReducer } from 'react'
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
        { firstName: " ", lastName: " ", email: " ", message: " " }
    );
    //Destructure values from the state to access easily
    const { firstName, lastName, email, message } = state;
    //Just testing form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(state);
    }

    return (
        <React.Fragment>
            <br />
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card style={styles.card}>
                            <CardHeader
                                title="Contact Us"
                            >
                            </CardHeader>
                            <CardContent>
                                <Row>
                                    <Col md={6}>
                                        <TextField
                                            id="outlined-name"
                                            label="First Name"
                                            fullWidth
                                            value={firstName}
                                            onChange={e => setState({ firstName: e.target.value })}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <TextField
                                            id="outlined-name"
                                            label="Last Name"
                                            value={lastName}
                                            fullWidth
                                            onChange={e => setState({ lastName: e.target.value })}
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
                                            value={email}
                                            onChange={e => setState({ email: e.target.value })}
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
                                            value={message}
                                            onChange={e => setState({ message: e.target.value })}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    </Col>
                                </Row>
                                <Button
                                    className="button button-accent"
                                    onClick={handleFormSubmit}
                                >   Submit
                                    </Button>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
        </React.Fragment>
    )
}

const styles = {
    card: {
        background: "#B1C4B1",
        justifyContent: "center"
    }
};

export default ContactForm;
