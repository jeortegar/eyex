"use client";

import styled from "styled-components";
import Form from "./Form";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 17px;
`;

const Banner = styled.div`
  background-color: #1d1d1d;
  height: calc(100vh - 94px);
  border-radius: 24px;
  padding: 30px 70px;
`;

const Title = styled.h1`
  font-size: 53px;
  font-weight: 500;
  line-height: 60px;
  color: transparent;
  background: linear-gradient(83deg, rgb(146, 175, 248) 0%, #fff 100%);
  -webkit-background-clip: text;
`;

const Index = () => {
  return (
    <Wrapper>
      <div>
        <Banner>
          <Title>Welcome to the future</Title>
        </Banner>
      </div>
      <div>
        <Form />
      </div>
    </Wrapper>
  );
};

export default Index;
