import React, { useContext } from "react";
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
import ShopContext from "../../context/shop-context";


function Products(props) {
    const context = useContext(ShopContext);

    const handleClickOpen = () => {
        context.setState({ open: true });
    };

    const handleClose = () => {
        context.setState({ open: false });
    };

    // state = {
    //     open: false,
    //     scroll: 'paper',
    // }


    // handleClickOpen = scroll => () => {
    //     this.setState({ open: true, scroll });
    // };

    // handleClose = () => {
    //     this.setState({ open: false });
    // };


    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>
                    <Container>
                        <Row>
                            {context.products.map(product => (
                                <Col sm={4}>
                                    <Card key={product.id}>
                                        <CardHeader
                                            title={product.desc}
                                        />
                                        <CardContent>
                                            <img src={icons.ethernodeLogo} alt="ethernode icon" style={{ maxWidth: "8em" }} />
                                            <Typography variant="body1" color="textPrimary">
                                                EnOS Custom Linux Kernel<br />
                                                OpenRPC, nodeJS, http2<br />
                                                ETC Mainet and Kotti Ready<br />
                                                Custom Case and AC adapter<br />
                                                <h4>{product.price}</h4>
                                            </Typography>
                                            <CardActions>
                                                <Col lg={12}>
                                                    <Button className="button button-accent"
                                                        id={product.id}
                                                        onClick={handleClickOpen}
                                                    >
                                                        Preorder
                                                    </Button>
                                                </Col>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <br />
                        <br />
                    </Container>
                    <Dialog
                        open={false}
                        onClose={handleClose}
                        scroll="paper"
                        aria-labelledby="scroll-dialog-title"
                    >
                        <Checkout />
                    </Dialog>
                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
};

export default Products;