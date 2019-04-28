import React, { useContext, useState } from "react";
import icons from "../../assets";
import Button from "../UI/Button";
import { Col, Row, Container } from "react-grid-system";
//Card imports
import Checkout from "../Checkout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
//Component imports
//import Checkout from "../Checkout";
import ShopContext from "../../context/shop-context";

function Products() {
  const context = useContext(ShopContext);

  const [state, setState] = useState({ open: false });

  const handleClickOpen = product => {
    setState({ open: true });
    context.addProductToCart.bind(this, product);
  };

  const handleClose = () => {
    setState({ open: false });
  };

  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Container>
            <Row>
              {context.products.map(product => (
                <Col sm={4} key={product.id}>
                  <Card>
                    <CardHeader title={product.desc} />
                    <CardContent>
                      <img
                        src={icons.ethernodeLogo}
                        alt="ethernode icon"
                        style={{ maxWidth: "8em" }}
                      />
                      <Typography variant="body1" color="textPrimary">
                        EnOS Custom Linux Kernel
                        <br />
                        OpenRPC, nodeJS, http2
                        <br />
                        ETC Mainet and Kotti Ready
                        <br />
                        Custom Case and AC adapter
                        <br />
                        {product.price}
                      </Typography>
                      <CardActions>
                        <Col lg={12}>
                          <Button
                            className="button button-accent"
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
            open={state.open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
          >
            <Checkout />
          </Dialog>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
}

export default Products;
