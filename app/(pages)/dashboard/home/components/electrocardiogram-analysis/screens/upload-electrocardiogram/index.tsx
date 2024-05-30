import { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Stack } from "@mui/material";
import { COLORS } from "@/constants/colors";

const Content = styled.div`
  margin: 20px 0 40px;
`;

const ContentDropzone = styled.div`
  margin-top: 20px;
  padding: 40px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #11009e17;
  height: 209px;
  border-radius: 20px;
  border: 1px dashed #11009e;
  cursor: pointer;
`;

interface UploadFileProps {
  setValue: (a: any, b: any) => void;
  watch: any;
}

interface Props {
  control: any;
  isValid: boolean;
  errors: any;
  setValue: any;
  watch: any;
  setError: any;
  register: any;
  setFileDrop: any;
  getValues: (name: string) => any;
  clearErrors: (a: any) => void;
}

const Index = ({ watch, setValue }: Props) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    acceptedFiles.forEach((file: File) => {
      setValue("file", file.name);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <h3>Upload your mammogram</h3>
      <Content>
        <Box>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsa officiis cum in deleniti dolorum eius. Deserunt,
            illo dolorem perferendis reprehenderit asperiores optio. Doloribus
            fugiat pariatur quas aspernatur est ad?
          </Typography>
        </Box>
        <ContentDropzone {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <>
              {watch("file") ? (
                <Typography
                  color={COLORS.GREY}
                  variant="body2"
                  fontWeight="600"
                  ml={1}
                >
                  {watch("file")}
                </Typography>
              ) : (
                <Stack direction="row" spacing={1} ml={2}>
                  <Typography
                    color={COLORS.GREY}
                    variant="body1"
                    fontWeight="600"
                  >
                    Drag and Drop Document or <span>Search here</span>
                    <input {...getInputProps()} />
                  </Typography>
                </Stack>
              )}
            </>
          )}
        </ContentDropzone>
      </Content>
    </Box>
  );
};

export default Index;
