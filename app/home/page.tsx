"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import UploadFileTab from "./UploadFileTab";
import { useForm } from "react-hook-form";
import UploadFile from "./components/uploadFile";
import PatientForm from "./components/patientForm";
import Success from "./components/success";
import { HOME_TABS } from "@/constants/tabs";

const Wrapper = styled.div`
  padding: 30px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Title = styled.h1`
  color: transparent;
  background: linear-gradient(
    83deg,
    rgb(0, 0, 0) 0%,
    rgb(17, 0, 158, 0.45) 25%
  );
  -webkit-background-clip: text;
  line-height: 50px;
  font-size: 45px;
  font-weight: 500;
`;

const ButtonBack = styled(Button)`
  background-color: #fff;
  border: 1px solid #dddddd;
  color: grey;
  height: 53px;
  letter-spacing: 2.5px;
  font-family: "Prompt";
  font-weight: 400;
`;

const ButtonBlack = styled(Button)`
  background-color: #000;
  color: #fff;
  height: 53px;
  letter-spacing: 2.5px;
  font-family: "Prompt";
  font-weight: 400;
  &:hover {
    background-color: #000;
  }
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  width: 66%;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 60px);
  margin-top: 100px;
  display: flex;
  & button:first-child {
    margin-right: 10px;
  }
`;

const Index = () => {
  const [tab, setTab] = useState<number>(HOME_TABS.UPLOAD);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Content>
        <div>
          <Title>
            Let's start <br /> Dr. Sara!
          </Title>
          <Description>
            Unlock the power of Artificial Intelligence and save your valuable
            time
          </Description>
        </div>
        <div>
          <UploadFileTab>
            {tab === HOME_TABS.UPLOAD && <UploadFile />}
            {tab === HOME_TABS.INFO && (
              <PatientForm register={register} errors={errors} />
            )}
            {tab === HOME_TABS.SUCCESS && <Success />}
            {tab !== HOME_TABS.SUCCESS && (
              <Actions>
                <ButtonBack
                  fullWidth={true}
                  onClick={() => setTab(tab - 1)}
                  disabled={tab === HOME_TABS.UPLOAD ?? true}
                >
                  back
                </ButtonBack>
                <ButtonBlack fullWidth={true} onClick={() => setTab(tab + 1)}>
                  {tab === HOME_TABS.INFO ? "interpret" : "continue"}
                </ButtonBlack>
              </Actions>
            )}
          </UploadFileTab>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Index;
