"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow-left.svg";
import { ONBOARDING_TABS } from "@/constants/tabs";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const Banner = styled.div`
  background-color: #f1f2f4;
  width: 100%;
  height: calc(100vh - 0px);
  border-radius: 60px 0 0 60px;
`;

const ContentTab = styled.div`
  position: relative;
  padding: 45px;
`;

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 9px;
`;

const Description = styled.p`
  color: #84838a;
  font-size: 20px;
  width: 60%;
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 40px;
  margin: 0 45px;
`;

const ContentFooter = styled.div`
  display: grid;
  grid-template-columns: 15% 82%;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
`;

const ButtonBack = styled(Button)`
  background-color: #fff;
  border: 1px solid #dddddd;
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

const Index = () => {
  const [tab, setTab] = useState(1);

  return (
    <Wrapper>
      <ContentTab>
        {tab === ONBOARDING_TABS.CREATE_PROFILE && (
          <>
            <Title>Create your profile</Title>
            <Description>
              It is important for us to know more about you.
            </Description>
          </>
        )}
        {tab === ONBOARDING_TABS.DOWNLOAD && (
          <>
            <Title>Download the images of your PACS</Title>
            <Description>In png and XXX</Description>
          </>
        )}
        {tab === ONBOARDING_TABS.UPLOAD && (
          <>
            <Title>Upload them to our platform</Title>
            <Description>
              Obtain a triage and different degrees of severity of the patient
            </Description>
          </>
        )}
        {tab === ONBOARDING_TABS.RESULTS && (
          <>
            <Title>Immediately see the results the results</Title>
            <Description>
              Obtain a triage and different degrees of severity of the patient
            </Description>
          </>
        )}
        {tab === ONBOARDING_TABS.SELECT_SPECIALITY && (
          <>
            <Title>Select your specialty</Title>
            <Link href="/home">
              <Button>Go to home</Button>
            </Link>
          </>
        )}
        <Footer>
          <ContentFooter>
            <ButtonBack fullWidth={true} onClick={() => setTab(tab - 1)}>
              <Image width={22} height={22} priority src={IconArrow} alt="<" />
            </ButtonBack>
            <ButtonBlack fullWidth={true} onClick={() => setTab(tab + 1)}>
              continue
            </ButtonBlack>
          </ContentFooter>
        </Footer>
      </ContentTab>
      <div>
        <Banner />
      </div>
    </Wrapper>
  );
};

export default Index;
