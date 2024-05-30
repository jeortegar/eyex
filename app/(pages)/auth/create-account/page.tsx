import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("./components/form"), {
  ssr: false,
});

const Index = () => {
  return (
    <Box>
      <Form />
    </Box>
  );
};

export default Index;
