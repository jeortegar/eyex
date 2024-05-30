import { useState } from "react";
import { styled } from "styled-components";
import {
  Box,
  Typography,
  Divider,
  Chip,
  Grid,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { COLORS } from "@/constants/colors";
import IconHeart from "@/assets/icons/heart.svg";
import Image from "next/image";
import ShareIcon from "@mui/icons-material/Share";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { creatPatient } from "@/services/api/patient";
import { Toaster, toast } from "sonner";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: `1px solid #D4D5D4`,
  },
  "&:before": {
    display: "none",
  },
}));

const stylesAccordionSummary = {
  position: "sticky !important",
  background: "#ffffff !important",
  borderBottom: "1px solid #e5e5e5 !important",
};

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  flexDirection: "row-reverse",
  top: "-31px",
  zIndex: 1,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {},
}));

interface Props {
  getValues: any;
}

const Index = ({ getValues }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<any>({
    patient_information: false,
    more_details: false,
  });

  const segments = [
    {
      segment: "More details of the result",
      type: "active",
      state: "more_details",
      toggle: true,
      prompt:
        "Corresponds to 'non-ST-segment elevation myocardial infarction'. This type of myocardial infarction does not show a characteristic change in the electrocardiogram.",
    },
  ];

  const [loading, setLoading] = useState<boolean>(false);

  const createPatientHandler = () => {
    const data = getValues();
    const patient = {
      ...data,
      birthdate: new Date(getValues("birthdate")),
      doctor: {
        doctor_id: "Vt26qmJmwHZUryRIVETkgzfLPEf1",
        speciality: getValues("speciality"),
      },
    };
    delete patient.speciality;
    creatPatient(patient)
      .then(() => {
        toast.success("Patient successfully saved");
      })
      .catch((error) => {
        console.error("error create patient", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Image src={IconHeart} alt="icon-heart" width={60} />
        <Box mt={1}>
          <Typography variant="h2" textAlign="center">
            Result
          </Typography>
          <Box mt={1}>
            <Chip label="STEMI_NO_TROMBO" color="primary" />
          </Box>
        </Box>
        <Divider
          sx={{ marginTop: 3, marginBottom: 0, width: "60%" }}
          component="p"
        />
        <Box width="60%">
          {segments.map((segment: any) => (
            <Accordion
              sx={{
                margin: 0,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ ...stylesAccordionSummary }}
                onClick={() =>
                  setOpenAccordion((prevState: any) => ({
                    ...prevState,
                    [segment.state]: !openAccordion[segment.state],
                  }))
                }
              >
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton aria-label="expand row" size="small">
                      {openAccordion[segment.state] ? (
                        <ArrowDropUpIcon
                          sx={{
                            ...(!segment.toggle && { visibility: "hidden" }),
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          sx={{
                            ...(!segment.toggle && { visibility: "hidden" }),
                          }}
                        />
                      )}
                    </IconButton>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color={COLORS.DARK}
                    >
                      {segment.segment}
                    </Typography>
                  </Stack>
                </Grid>
              </AccordionSummary>
              <MuiAccordionDetails>
                <Typography variant="body2" fontWeight={500}>
                  {segment.prompt}
                </Typography>
              </MuiAccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            mt={3}
            columnGap={2}
          >
            {/* <Box>
              <Button
                startIcon={<ShareIcon />}
                id="btn_back_company"
                sx={{ width: "150px" }}
                variant="text"
              >
                Share
              </Button>
            </Box> */}
            <Box>
              <Button
                id="btn_next_company"
                sx={{ width: "150px" }}
                type="button"
                variant="contained"
                onClick={createPatientHandler}
              >
                Save patient
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Toaster />
    </Box>
  );
};

export default Index;
