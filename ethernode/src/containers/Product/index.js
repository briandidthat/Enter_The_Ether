import React, { Component } from 'react'
import icons from "../../assets";
import Button from "../../components/UI/Button";
import { Col, Row, Container } from "react-grid-system";
//Card imports
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "../../components/UI/Modal";

import "./Product.css";

class Product extends Component {
    state = {
        amount: 0,
        tier: []
    }

    handleClick = e => {
        e.preventDefault();
        console.log("hi")
    }

    render() {

        return (
            <div className="container">
                <br />
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="Ethernode"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>250 GB<br></br>
                                        - EnOS Custom Linux Kernel<br></br>
                                        - OpenRPC, nodeJS, http2<br></br>
                                        - ETC Mainet and Kotti Ready<br></br>
                                        - Custom Case and AC adapter<br></br>
                                    </p>
                                    <CardActions>
                                        <Button className="button button-accent"
                                            onClick={this.handleClick}
                                        >
                                            Preorder
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="Ethernode"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>1 TB<br></br>
                                        - EnOS Custom Linux Kernel<br></br>
                                        - OpenRPC, nodeJS, http2<br></br>
                                        - ETC Mainet and Kotti Ready<br></br>
                                        - Custom Case and AC adapter<br></br>
                                    </p>
                                    <CardActions>
                                        <Button className="button button-accent"
                                            onClick={this.handleClick}
                                        >
                                            Preorder
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="Ethernode"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>2 TB<br></br>
                                        - EnOS Custom Linux Kernel<br></br>
                                        - OpenRPC, nodeJS, http2<br></br>
                                        - ETC Mainet and Kotti Ready<br></br>
                                        - Custom Case and AC adapter<br></br>
                                    </p>
                                    <CardActions>
                                        <Button className="button button-accent"
                                            onclick={this.handleClick}
                                        >
                                            Preorder
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        )
    }
}


export default Product;