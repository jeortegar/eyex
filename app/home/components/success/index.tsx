import styled from "styled-components";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 208px);
  text-align: center;
`;

const Title = styled.h3`
  margin: 0;
`;

const ButtonBlue = styled(Button)`
  margin-top: 20px;
  background-color: #11009e;
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
  return (
    <Wrapper>
      <div>
        <Title>AI Interpretation</Title>
        <ButtonBlue fullWidth={true}>download</ButtonBlue>
      </div>
    </Wrapper>
  );
};

export default Index;
