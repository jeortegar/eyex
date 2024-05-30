"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import Speciality from "../../screens/speciality";
import UploadElectocardiogram from "../../screens/upload-electrocardiogram";
import PatientData from "../../screens/patient-data";
import Success from "../../screens/success";
import Footer from "@/(pages)/dashboard/components/stepper-form/footer";

const Index = (props: any) => {
  const { activeStep, handleNext } = props;

  const searchParams = useSearchParams();
  const company_selected: string | null = searchParams.get("company_selected");
  const action: any = searchParams.get("action");
  const isEditable = Boolean(action !== null);

  const {
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
    register,
    formState: { isValid, errors, isValidating },
  } = useForm({
    mode: "onBlur",
  });

  const [fileDrop, setFileDrop] = useState<string | Blob>("");

  const generalProps = {
    control,
    isValid,
    isValidating,
    errors,
    getValues,
    setValue,
    watch,
    setError,
    clearErrors,
    register,
    setFileDrop,
  };

  // Loading Submit
  const [loading, setLoading] = useState<boolean>(false);
  const [errorVerifyAccount, setErrorVerifyAccount] = useState<boolean>(false);

  // Components
  const SpecialityComponent = () => <Speciality {...generalProps} />;
  const UploadElectocardiogramComponent = () => (
    <UploadElectocardiogram {...generalProps} />
  );
  const PatientDataComponent = () => <PatientData {...generalProps} />;

  const screens = [
    SpecialityComponent,
    UploadElectocardiogramComponent,
    PatientDataComponent,
  ];

  // Validations for disabled button
  const disableInformation = isValid && !Object.keys(errors).length;
  const disabledBankInformation = watch("file");
  const disabledBankInformationDetails = isValid;

  const DisabledCta = () => {
    const stepMapping: any = {
      0: disableInformation,
      1: disabledBankInformation,
      2: disabledBankInformationDetails,
    };
    const step = activeStep;
    return stepMapping.hasOwnProperty(step) && stepMapping[step];
  };

  const NextOrSubmitAction = () => {
    if (activeStep !== 2) {
      props.enableSubmit === "button" && handleNext();
    }
  };

  // Get Analysis
  const onSubmit = (data: any) => {
    console.log("data", data);
    setLoading(true);
    handleNext();
  };

  const less_step = action !== null ? 2 : 1;

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep <= screens.length - 1 ? (
          <Box mr={0.5} ml={0.5}>
            {screens[activeStep]()}
          </Box>
        ) : (
          <Success getValues={getValues} />
        )}
        {activeStep <= screens.length - less_step && (
          <Footer
            {...props}
            loading={loading}
            disabled={DisabledCta()}
            cta={NextOrSubmitAction}
          />
        )}
      </form>
    </Box>
  );
};

export default Index;
