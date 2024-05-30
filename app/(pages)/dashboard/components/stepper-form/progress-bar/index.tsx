"use client";

import { Fragment } from "react";
import { useSearchParams } from "next/navigation";
import { styled } from "@mui/material/styles";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

const StepperMui = styled(Stepper)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: "7px",
    borderColor: "#D9D9D9",
  },
  [`& .MuiStepLabel-iconContainer`]: {
    paddingRight: "0",
  },
  [`& .MuiStepLabel-iconContainer svg`]: {
    color: "#B0B2BA",
  },
  [`& .Mui-active, & .Mui-completed`]: {
    color: `${theme.palette.common.purple} !important`,
  },
}));

interface ProgressBarProps {
  activeStep: number;
  steps: Array<string>;
  completed: {
    [k: number]: boolean;
  };
}

const Index = ({ activeStep, steps, completed }: ProgressBarProps) => {
  return (
    <Fragment>
      {activeStep < steps.length && (
        <Box>
          <Box mb={1.2}>
            <StepperMui nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepLabel />
                </Step>
              ))}
            </StepperMui>
          </Box>
          <Typography variant="body2" component="p" mb={3} ml={0.5} mr={0.5}>
            <strong>Step {activeStep + 1}:</strong> {steps[activeStep]}
          </Typography>
        </Box>
      )}
    </Fragment>
  );
};

export default Index;
