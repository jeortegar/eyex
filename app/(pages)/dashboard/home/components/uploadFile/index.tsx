import { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

const Content = styled.div`
  margin-top: 40px;
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

const TitleStep = styled.p``;

const Index = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <TitleStep>Upload your mammogram</TitleStep>
      <Content {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop your files here or choose files</p>
        )}
      </Content>
    </div>
  );
};

export default Index;
