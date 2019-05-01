import React, { useContext, useState } from "react";
import icons from "../../assets";
import Button from "../UI/Button";
import { Col, Row, Container } from "react-grid-system";
//Component imports
import Checkout from "../Checkout";
import ShopContext from "../../context/shop-context";
//Card imports
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { CheckoutContext } from "../../context";

function Products() {
  const context = useContext(ShopContext);
  const { addItemToCart, getTotal, state } = useContext(CheckoutContext);
  const [modalState, setModal] = useState({ open: false });

  const handleClickOpen = item => {
    setModal({ open: true });
    addItemToCart(item);
    getTotal(state.cart)
  };
  const handleClose = () => {
    setModal({ open: false });
  };

  return (
        <React.Fragment>
          <Container>
            <Row>
              {context.products.map((item, index) => (
                <Col sm={4} key={index}>
                  <Card>
                    <CardHeader title={item.itemDesc} />
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
                        ${item.itemCost}
                      </Typography>
                      <CardActions>
                        <Col lg={12}>
                          <Button
                            className="button button-accent"
                            id={item.itemId}
                            onClick={() => handleClickOpen(item)}
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
            open={modalState.open}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
          >
            <Checkout />
          </Dialog>
        </React.Fragment>
  );
}

export default Products;
