import React, { useState } from 'react';
import { makeStyles, formatMs } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { ButtonStyle } from '../../commons/StyleComponent';
import { SELECT_MEAL, SELECT_RESTAURANT, SELECT_DISHES, REVIEW } from '../../commons/String';
import SelectMeal from './StepComponent/SelectMeal';
import SelectRestaurant from './StepComponent/SelectRestaurant';
import SelectDishes from './StepComponent/SelectDishes';
import Review from './StepComponent/Review';
import './index.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [SELECT_MEAL, SELECT_RESTAURANT, SELECT_DISHES, REVIEW];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SelectMeal />;
    case 1:
      return <SelectRestaurant />;
    case 2:
      return <SelectDishes />;
    case 3:
      return <Review />;
    default:
      return <SelectMeal />;
  }
}

export default function SimpleOrderSystem() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(3);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <h3 className="header-simple-order"><span>Simple Order System</span></h3>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Previous
              </Button>
              <Button className="btn-next" variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
              {/* <ButtonStyle>Primary Button</ButtonStyle> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
