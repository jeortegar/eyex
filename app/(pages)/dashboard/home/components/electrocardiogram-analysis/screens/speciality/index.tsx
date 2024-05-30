import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import { Controller } from "react-hook-form";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow-left.svg";
import { COLORS } from "@/constants/colors";

const Content = styled(Box)`
  margin: 30px 0 40px;
`;

const Card = styled(Box)`
  height: 40px;
  border: 1px solid #d6d6d6;
  padding: 10px 15px;
  border-radius: 6px;
  font-family: "Prompt";
  &:hover {
    background-color: #f2f2f2;
  }
  text-transform: capitalize;
`;

const Back = styled.button`
  margin-bottom: 16px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    vertical-align: middle;
    margin-right: 4px;
  }
  & span {
    font-size: 14px;
  }
`;

interface Props {
  control: any;
  isValid: boolean;
  errors: any;
  setValue: any;
  watch: any;
  setError: any;
  register: any;
  setFileDrop: any;
  getValues: (name: string) => any;
  clearErrors: (a: any) => void;
}

const Index = ({ control, getValues }: Props) => {
  interface SpecialityProps {
    id: number;
    label: string;
    image: null;
    available: boolean;
    options: Array<any>;
  }

  const [selectedSpecialty, setSelectedSpecialty] = useState<Array<any>>([]);

  const specialitiesList: Array<SpecialityProps> = [
    {
      id: 1,
      label: "radiology",
      image: null,
      available: false,
      options: [
        {
          id: 1,
          label: "mammogram",
          image: null,
        },
        {
          id: 2,
          label: "musculoskeletal",
          image: null,
        },
      ],
    },
    {
      id: 2,
      label: "pathology",
      image: null,
      available: false,
      options: [],
    },
    {
      id: 3,
      label: "micro biology",
      image: null,
      available: false,
      options: [],
    },
    {
      id: 4,
      label: "ellex",
      image: null,
      available: false,
      options: [],
    },
    {
      id: 4,
      label: "cardiology",
      image: null,
      available: true,
      options: [],
    },
  ];

  return (
    <Box>
      <h3>Select your speciality</h3>
      <Content mt={2.5}>
        {Boolean(selectedSpecialty.length) && (
          <Back onClick={() => setSelectedSpecialty([])}>
            <Image width={14} height={14} priority src={IconArrow} alt="<" />
            <span>Back to specialties</span>
          </Back>
        )}
        <Grid container spacing={2}>
          <>
            {selectedSpecialty.length ? (
              <>
                {selectedSpecialty.map((speciality: SpecialityProps) => (
                  <Grid item xs={6}>
                    <Card role="button">
                      <Typography variant="body1" color={COLORS.DARK}>
                        {speciality.label}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Controller
                  name="speciality"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <>
                      {specialitiesList.map(
                        (speciality: SpecialityProps, i: any) => (
                          <Grid item xs={12} md={6} lg={4}>
                            <RadioGroup
                              id={`speciality${i}`}
                              {...field}
                              name="speciality"
                              value={getValues("speciality")}
                            >
                              <Card
                                onClick={() =>
                                  setSelectedSpecialty(speciality.options)
                                }
                              >
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  justifyContent="space-between"
                                >
                                  <Box>
                                    {!speciality.available && (
                                      <Typography
                                        m={0}
                                        variant="body2"
                                        color={COLORS.PRIMARY}
                                      >
                                        coming soon
                                      </Typography>
                                    )}
                                    <Typography
                                      variant="body1"
                                      color={COLORS.DARK}
                                    >
                                      {speciality.label}
                                    </Typography>
                                  </Box>
                                  {speciality.available && (
                                    <FormControlLabel
                                      sx={{ marginRight: 0 }}
                                      value={speciality.label}
                                      control={<Radio />}
                                      label=""
                                    />
                                  )}
                                </Stack>
                              </Card>
                            </RadioGroup>
                          </Grid>
                        )
                      )}
                    </>
                  )}
                />
              </>
            )}
          </>
        </Grid>
      </Content>
    </Box>
  );
};

export default Index;
