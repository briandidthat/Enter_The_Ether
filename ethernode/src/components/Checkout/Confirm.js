import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import ShopContext from "../../context/shop-context";
import {CheckoutContext} from "../../context/checkout"

const addresses = ["1 Stoner Drive", "Reactville", "Anytown", "99999", "USA"];

const Confirm = props => {
  const context = useContext(ShopContext);
  const { state } = useContext(CheckoutContext)
  const { classes } = props;

  return (
    <ShopContext.Consumer>
      {() => (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {state.cart.map((item, index) => (
              <ListItem className={classes.listItem} key={index}>
                <ListItemText primary={item.name} secondary={item.desc} />
                <Typography variant="body2">{item.price}</Typography>
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                ${state.orderTotal}.99
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
              <Typography gutterBottom>{state.userFirst} {state.userLast}</Typography>
              <Typography gutterBottom>{addresses.join(", ")}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                {context.paymentDetails.map(payment => (
                  <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

Confirm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Confirm);
