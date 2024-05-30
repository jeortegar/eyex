import styled from "styled-components";
import { Box, Button } from "@mui/material";

const Wrapper = styled(Box)`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <Box mt={4} mb={2}>
          <Button variant="contained" fullWidth={true}>
            download
          </Button>
        </Box>
        <Box mb={2}>
          <Button variant="contained" fullWidth={true}>
            create report
          </Button>
        </Box>
        <Box mb={2}>
          <Button variant="contained" fullWidth={true}>
            send to the patient
          </Button>
        </Box>
        <Button variant="contained" fullWidth={true}>
          go to your pacs
        </Button>
      </div>
    </Wrapper>
  );
};

export default Index;
