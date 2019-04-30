import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function DifBilling(props) {
  const { handleChange, state } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          label="Address line 1"
          name="billingAddress1"
          value={state.billingAddress1}
          fullWidth
          autoComplete="billing address-line1"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="address2"
          label="Address line 2"
          name="billingAddress2"
          value={state.billingAddress2}
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
          name="billingCity"
          value={state.billingCity}
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
          name="billingState"
          value={state.billingState}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="zip"
          label="Zip / Postal code"
          fullWidth
          name="billingZip"
          value={state.billingZip}
          autoComplete="billing postal-code"
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="country"
          label="Country"
          name="billingCountry"
          value={state.billingCountry}
          fullWidth
          autoComplete="billing country"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
export default DifBilling;