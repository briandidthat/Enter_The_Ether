import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function AddressForm(props) {
  const { state , handleChange } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="userFirst"
            label="First name"
            value={state.userFirst}
            fullWidth
            autoComplete="fname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="userLast"
            label="Last name"
            value={state.userLast}
            fullWidth
            autoComplete="lname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            label="Email"
            name="userEmail"
            value={state.userEmail}
            fullWidth
            autoComplete="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            label="Address line 1"
            name="address1"
            value={state.billing.address1}
            fullWidth
            autoComplete="billing address-line1"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            label="Address line 2"
            name="address2"
            value={state.billing.address2}
            fullWidth
            autoComplete="billing address-line2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            label="City"
            name="city"
            value={state.billing.city}
            fullWidth
            autoComplete="billing address-level2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="homeState"
            label="State/Province/Region"
            fullWidth
            name="homeState"
            value={state.billing.homeState}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            label="Zip / Postal code"
            fullWidth
            name="zip"
            value={state.billing.zip}
            autoComplete="billing postal-code"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            label="Country"
            name="country"
            value={state.billing.country}
            fullWidth
            autoComplete="billing country"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this same address for billing?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}


export default AddressForm;
