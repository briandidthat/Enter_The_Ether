import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/Card/"
import CardHeader from '@material-ui/core/CardHeader';

import icons from "../../assets"
import Button from "@material-ui/core/Button";
import { Container, Col, Row } from "react-grid-system";


const handleClick = () => {
    console.log("Ethernodeeeeeeeeeeeeeee")
}

const HomeCards = () => (

    <React.Fragment>
        <Container>
            <Row>
                <Col sm={4}>
                    <Card>
                        <CardHeader
                            title="Ethernode"
                        />
                        <CardContent>
                            <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                            <p>Hardware for your home.<br />
                                a one stop shop solution.<br />
                            </p>
                            <CardActions>
                                <Col lg={12}>
                                <Button className="button button-accent"
                                    onClick={handleClick}
                                >
                                    Coming Soon!
                                </Button>
                                </Col>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card>
                        <CardHeader
                            title="EnOs"
                        />
                        <CardContent>
                            <img src={icons.ethernodeLogo} alt="EnOS io icon" style={{ maxWidth: "8em" }} />
                            <p>Our Linux based lightweight<br />
                                ETC Blockchain OS<br />
                            </p>
                            <CardActions>
                                <Col lg={12}>
                                <Button className="button button-accent"
                                    onClick={handleClick}
                                >
                                    Coming Soon!
                                </Button>
                                </Col>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Col>

                <Col sm={4}>
                    <Card>
                        <CardHeader
                            title="EnConnect"
                        />
                        <CardContent>
                            <img src={icons.enconnectLogo} alt="enConnect icon" style={{ maxWidth: "8em" }} />
                            <p>Cloud Nodes for custom needs.<br />
                                Account access, and Support.
						    </p>
                            <CardActions>
                                <Col lg={12}>
                                <Button className="button button-accent"
                                    onClick={handleClick}
                                >
                                    Coming Soon!
                                </Button>
                                </Col>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default HomeCards;