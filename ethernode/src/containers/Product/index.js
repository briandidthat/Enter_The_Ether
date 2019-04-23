import React, { Component } from 'react'
import icons from "../../assets";
import Button from "../../components/UI/Button";
import { Col, Row, Container } from "react-grid-system";
//Card imports
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
//Component imports
import Checkout from "../../components/Checkout";
import About from "../../components/About"

import "./Product.css";

class Product extends Component {

    state = {
        amount: 0,
        tier: [],
        open: false,
        scroll: 'paper',
    }

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <React.Fragment>
                <About />
                <br />
                <Container>
                    <Row>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="250 GB"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>
                                        <Typography variant="body1" color="textPrimary">
                                            EnOS Custom Linux Kernel<br />
                                            OpenRPC, nodeJS, http2<br />
                                            ETC Mainet and Kotti Ready<br />
                                            Custom Case and AC adapter<br />
                                        </Typography>
                                    </p>

                                    <CardActions>
                                        <Col lg={12}>
                                            <Button className="button button-accent"
                                                onClick={this.handleClickOpen("paper")}
                                            >
                                                Preorder
                                        </Button>
                                        </Col>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="1 TB"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>
                                        <Typography variant="body1" color="textPrimary">
                                            EnOS Custom Linux Kernel<br />
                                            OpenRPC, nodeJS, http2<br />
                                            ETC Mainet and Kotti Ready<br />
                                            Custom Case and AC adapter<br />
                                        </Typography>
                                    </p>
                                    <CardActions>
                                        <Col lg={12}>
                                            <Button className="button button-accent"
                                                onClick={this.handleClickOpen("paper")}
                                            >
                                                Preorder
                                        </Button>
                                        </Col>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card>
                                <CardHeader
                                    title="2 TB"
                                />
                                <CardContent>
                                    <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                    <p>
                                        <Typography variant="body1" color="textPrimary">
                                            EnOS Custom Linux Kernel<br />
                                            OpenRPC, nodeJS, http2<br />
                                            ETC Mainet and Kotti Ready<br />
                                            Custom Case and AC adapter<br />
                                        </Typography>
                                    </p>
                                    <CardActions>
                                        <Col lg={12}>
                                            <Button className="button button-accent"
                                                onClick={this.handleClickOpen("paper")}
                                            >
                                                Preorder
                                        </Button>
                                        </Col>
                                    </CardActions>
                                </CardContent>
                            </Card>
                            <Dialog
                                open={this.state.open}
                                onClose={this.handleClose}
                                scroll={this.state.scroll}
                                aria-labelledby="scroll-dialog-title"
                            >
                                <Checkout />
                            </Dialog>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </React.Fragment>
        )
    }
}


export default Product;