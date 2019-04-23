import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class PaymentDetails extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
      </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" onChange={handleChange('cardHolder')} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber" label="Card number" onChange={handleChange('cardNumber')} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" onChange={handleChange('expDate')} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Three digits on signature strip"
              fullWidth
              onChange={handleChange('cvv')}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default PaymentDetails;