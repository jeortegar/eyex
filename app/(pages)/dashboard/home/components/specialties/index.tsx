import { useState } from "react";
import styled from "styled-components";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow-left.svg";
import { HOME_TABS } from "@/constants/tabs";

const Content = styled(Box)``;

const TitleStep = styled.p``;

const Card = styled(Box)`
  border: 1px solid #d6d6d6;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
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

const Index = ({ setTab }: any) => {
  interface SpecialityProps {
    id: number;
    label: string;
    image: null;
    options: Array<any>;
  }

  const [selectedSpecialty, setSelectedSpecialty] = useState<Array<any>>([]);

  const specialitiesList: Array<SpecialityProps> = [
    {
      id: 1,
      label: "radiology",
      image: null,
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
      options: [],
    },
    {
      id: 3,
      label: "micro biology",
      image: null,
      options: [],
    },
    {
      id: 2,
      label: "ellex",
      image: null,
      options: [],
    },
  ];

  return (
    <div>
      <TitleStep>Select your speciality</TitleStep>
      <Content mt={5}>
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
                    <Card
                      role="button"
                      onClick={() => setTab(HOME_TABS.UPLOAD)}
                    >
                      {speciality.label}
                    </Card>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                {specialitiesList.map((speciality: SpecialityProps) => (
                  <Grid item xs={6}>
                    <Card
                      onClick={() => setSelectedSpecialty(speciality.options)}
                    >
                      {speciality.label}
                    </Card>
                  </Grid>
                ))}
              </>
            )}
          </>
        </Grid>
      </Content>
    </div>
  );
};

export default Index;
