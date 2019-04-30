import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DifBilling from "./Difbilling";
import { CheckoutContext } from "../../context/checkout";

function AddressForm() {
  const { state, handleChange, setState } = useContext(CheckoutContext);
  
  const difBilling = () => {
    setState({ difBilling: true });
    console.log(state)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="userFirst"
            label="First name"
            value={state.userFirst}
            required
            fullWidth
            autoComplete="fname"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="userLast"
            label="Last name"
            required
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
            name="shippingAddress1"
            value={state.shippingAddress1}
            fullWidth
            autoComplete="billing address-line1"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            label="Address line 2"
            name="shippingAddress2"
            value={state.shippingAddress2}
            fullWidth
            autoComplete="billing address-line2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            name="shippingCity"
            required
            value={state.shippingCity}
            fullWidth
            autoComplete="billing address-level2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="shippingState"
            label="State/Province/Region"
            required
            fullWidth
            name="shippingState"
            value={state.shippingState}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            label="Zip / Postal code"
            required
            fullWidth
            name="shippingZip"
            value={state.shippingZip}
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
            value={state.shippingCountry}
            fullWidth
            autoComplete="billing country"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                value="yes"
                onClick={() => difBilling()}
              />
            }
            label="Different billing address?"
          />
        </Grid>
          {state.difBilling === true && 
            <DifBilling
              state={state}
              handleChange={handleChange}
            />
          }
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
