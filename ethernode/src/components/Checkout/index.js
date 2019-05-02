import React, { useContext, useState } from "react";
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
import { CheckoutContext } from "../../context/checkout";
import API from "../../utils/API";
import { signUpInfo, checkoutInfo } from "../../utils/constants";

function Checkout(props) {
  const { state, steps, getTotal } = useContext(CheckoutContext);
  const [activeStep, setNext] = useState(0);

  const handleNext = () => {
    setNext(activeStep + 1);
    getTotal(state.cart);
  };
  const handleBack = () => {
    setNext(activeStep - 1);
  };

  async function handleSubmit() {
    let user = await signUpInfo(state);
    let register = await API.register(user);
    let userData = await checkoutInfo(state)
    let checkout = await API.newOrder(userData)
    console.log(register, checkout);
    handleNext();
  }

  //get current step for checkout form to render content accordingly
  const getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentDetails />;
      case 2:
        return <Confirm />;
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
            Checkout ${state.orderTotal}
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
                  Your order number is {state.orderNumber}. We have emailed your
                  order confirmation, and will send you an update when your
                  order has shipped.
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
