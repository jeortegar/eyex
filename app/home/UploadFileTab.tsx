import styled from "styled-components";

const Content = styled.div`
  position: relative;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  height: calc(100vh - 208px);
`;

interface Children {
  children: React.ReactNode;
}

const Index = ({ children }: Children) => {
  return <Content>{children}</Content>;
};

export default Index;
