import React, { useState, useReducer } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentDetails from "./PaymentDetails";
import Confirm from "./Confirm";

const steps = ["Shipping address", "Payment details", "Review your order"];

function Checkout(props) {
  //Reducer to go over all state items and spread them
  //and add values to an empty state object
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      address1: "",
      address2: "",
      city: "",
      homeState: "",
      country: "",
      firstName: "",
      lastName: "",
      email: "",
      zip: "",
      cvv: "",
      cardHolder: "",
      cardNumber: "",
      expire: "",
      cart: []
    }
  );

  //Set active step, and function in State
  const [activeStep, setNext] = useState(0);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      [name]: value
    });
  };

  const handleNext = () => {
    setNext(activeStep + 1);
  };

  const handleBack = () => {
    setNext(activeStep - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleNext();
    console.log(state);
  };
  //get current step for checkout form to render content accordingly
  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm handleChange={handleChange} state={state} />;
      case 1:
        return <PaymentDetails handleChange={handleChange} state={state} />;
      case 2:
        return <Confirm handleSubmit={handleSubmit} state={state} />;
      default:
        throw new Error("Unknown step");
    }
  };

  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          {/* Map through the steps of the step array to display them as labels */}
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Ternary Operator to render confirmation text, or allow user to progress through checkout */}
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is We have emailed your order confirmation,
                  and will send you an update when your order has shipped.
                </Typography>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1
                        ? handleSubmit
                        : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
