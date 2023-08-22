"use client";

import styled from "styled-components";

const Main = styled.div`
  background-color: #f7f7f9;
  padding: 30px;
  margin: 14px;
  border-radius: 30px;
  height: calc(100vh - 88px);
`;

interface Children {
  children: React.ReactNode;
}

const Index = ({ children }: Children) => {
  return <Main>{children}</Main>;
};

export default Index;
