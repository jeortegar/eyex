"use client";

import { Suspense } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import ElectrocardiogramAnalysis from "@/(pages)/dashboard/home/components/electrocardiogram-analysis";

const Title = styled.h1`
  color: transparent;
  background: linear-gradient(
    83deg,
    rgb(0, 0, 0) 0%,
    rgb(17, 0, 158, 0.45) 25%
  );
  background-clip: text;
  line-height: 50px;
  font-size: 45px;
  font-weight: 500;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  padding: 40px 65px;
  background-color: #fff;
  border-radius: 20px;
`;

const Index = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={5}>
        <Title>
          Let's start <br /> Dr. Sara!
        </Title>
        <Description>
          Unlock the power of Artificial Intelligence and save your valuable
          time
        </Description>
      </Grid>
      <Grid item xs={7}>
        <Content>
          <Suspense fallback={<p>Loading...</p>}>
            <ElectrocardiogramAnalysis />
          </Suspense>
        </Content>
      </Grid>
    </Grid>
  );
};

export default Index;
