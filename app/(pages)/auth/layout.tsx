"use client";

import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import logoWhite from "@/assets/images/logo/logo-white.png";

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 17px;
`;

const Banner = styled(Box)`
  background-color: #1d1d1d;
  height: calc(100vh - 94px);
  border-radius: 24px;
  padding: 30px 70px;
`;

const Title = styled(Typography)`
  font-weight: 500;
  color: transparent;
  background: linear-gradient(83deg, rgb(146, 175, 248) 0%, #fff 100%);
  background-clip: text;
`;

const ContentForm = styled(Box)`
  border-radius: 6px;
  padding: 50px 60px 45px;
  @media screen and (max-width: 768px) {
    padding: 38px 32px;
  }
`;

const Index = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Box>
        <Banner>
          <Box mb={1}>
            <Image src={logoWhite} alt="logo-eyex" width={90} />
          </Box>
          <Title variant="h1">
            Welcome to the <br /> future
          </Title>
        </Banner>
      </Box>
      <ContentForm>{children}</ContentForm>
    </Wrapper>
  );
};

export default Index;
