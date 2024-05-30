"use client";

import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Box } from "@mui/material";
import ProgressBar from "../../../components/stepper-form/progress-bar";
import Content from "./components/content";
import { ELECTROCARDIOGRAM_ANALYSIS } from "@/constants/tabs";

const Index = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const { replace } = useRouter();

  const { SPECIALITY, UPLOAD_FILE, PATIENT_DATA } = ELECTROCARDIOGRAM_ANALYSIS;
  let steps = [SPECIALITY, UPLOAD_FILE, PATIENT_DATA];

  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep: any) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      router.back();
    } else {
      if (activeStep === 1) {
        replace(`${pathname}?${params.toString()}`);
      }
      setActiveStep((prevActiveStep: any) => prevActiveStep - 1);
    }
  };

  const enableSubmit: string =
    activeStep === steps.length - 1 ? "submit" : "button";

  const props = {
    handleNext: () => handleNext(),
    handleBack: () => handleBack(),
    activeStep: activeStep,
    enableSubmit: enableSubmit,
  };

  return (
    <Box>
      <ProgressBar
        activeStep={activeStep}
        steps={steps}
        completed={completed}
      />
      <Content {...props} />
    </Box>
  );
};

export default Index;
