import React, { Fragment } from "react";
import { Stack, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface FooterProps {
  loading?: boolean;
  disabled?: boolean;
  enableSubmit?: any;
  disableBack?: boolean;
  handleBack: () => void;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  cta: any;
}

const Index = ({
  loading,
  disabled,
  enableSubmit,
  disableBack,
  handleBack,
  contentLeft,
  contentRight,
  cta,
}: FooterProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" mt={6}>
      <Box>
        {!disableBack && (
          <Fragment>
            <Button
              id="btn_back_company"
              sx={{ width: "150px" }}
              onClick={() => {
                handleBack();
              }}
              variant="text"
            >
              Back
            </Button>
            {contentLeft}
          </Fragment>
        )}
      </Box>
      <Box>
        {contentRight}
        <LoadingButton
          id="btn_next_company"
          sx={{ width: "150px" }}
          type={enableSubmit}
          loading={loading}
          variant="contained"
          onClick={() => {
            cta();
          }}
          disabled={!disabled}
        >
          <span>Continue</span>
        </LoadingButton>
      </Box>
    </Stack>
  );
};

export default Index;
