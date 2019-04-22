import React from "react"
import { Container, Row, Col } from "react-grid-system";
import Button from "../../components/UI/Button";
import "./Form.css"
 
const Form = () => (
    <section>
        <h3>Contact Us</h3>
            <form>
                 <Container>
                <Row>
                    <Col md={6}>
                        <input type="text" name="name" id="name" value="" placeholder="Name"></input>
                    </Col>
                    <Col md={6}>
                        <input type="email" name="email" id="email" value="" placeholder="Email"></input>
                    </Col>
                    <br />
                    <Col lg={12}>
                        <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <ul className="actions" style={{ listStyle: "none"}}>
                            <li><Button className="button button-accent">Submit</Button></li>
                        </ul>
                    </Col>
                </Row>
                </Container>
            </form>
    </section>
    
);

export default Form;