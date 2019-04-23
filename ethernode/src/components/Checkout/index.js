import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentDetails from './PaymentDetails';
import Confirm from './Confirm';


class Checkout extends React.Component {
  state = {
    activeStep: 0,
    price: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    cardNumber: 0,
    expire: 0,
    cvv: 0
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentDetails />;
      case 2:
        return <Confirm />;
      default:
        throw new Error('Unknown step');
    }
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleSubmit = () => {
    this.setState({
      activeStep: this.state.activeStep,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      cardNumber: this.state.cardNumber,
      expire: this.state.expire,
      cvv: this.state.cvv
    })
    this.handleNext();
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = ['Shipping address', 'Payment details', 'Review your order'];
    const orderNumber = 2220;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number {orderNumber} is We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                  <Button onClick={this.handleBack} className={classes.button}>
                          Back
                  </Button>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                      </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={activeStep === steps.length -1 ? this.handleSubmit : this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Place order': 'Next'}
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
}

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});


Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
