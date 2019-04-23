import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

class Confirm extends Component {

  render() {
    const products = [
      { name: 'Product 1', desc: 'Baby Node', price: '$299.99' },
      { name: 'Product 2', desc: 'Toddler Node', price: '$399.99' },
      { name: 'Product 3', desc: 'Gentlemen Node', price: '$499.99' },
      { name: 'Product 4', desc: 'Baller Node', price: '$629.99' },
      { name: 'Shipping', desc: '', price: 'Free' },
    ];
    const addresses = ['1 Stoner Drive', 'Reactville', 'Anytown', '99999', 'USA'];
    const payments = [
      { name: 'Card type', detail: 'Visa' },
      { name: 'Card holder', detail: 'Mr Aaron Lowry' },
      { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
      { name: 'Expiration date', detail: '04/2024' },
    ];

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order summary
      </Typography>
        <List disablePadding>
          {products.map(product => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">{product.price}</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              $34.06
          </Typography>
          </ListItem>
        </List>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping
          </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
          </Typography>
            <Grid container>
              {payments.map(payment => (
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

    );
  }
}

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});



Confirm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirm);