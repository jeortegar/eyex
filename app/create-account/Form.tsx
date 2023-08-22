"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "../styles/global";
import Box from "@mui/material/Box";
import Input from "../components/ui/form/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { Typography, FormControl, MenuItem, Select } from "@mui/material";
import NoSsr from "@/services/utils/NoSsr";

const Wrapper = styled.div`
  padding: 40px 64px;
`;

const Title = styled.h1`
  font-size: 37px;
`;

const AlreadyRegistered = styled.p`
  font-size: 14px;
  & a {
    color: #11009e;
  }
`;

const ContentForm = styled.div`
  margin-top: 35px;
`;

const ButtonBlack = styled(LoadingButton)`
  height: 53px;
  font-family: "Prompt";
  font-weight: 400;
  &:hover {
    background-color: #000;
  }
`;

const Index = () => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    console.log("dataForm", dataForm);
    router.push("/onboarding");
  };

  return (
    <Wrapper>
      <Title>Create new Account</Title>
      <AlreadyRegistered>
        Already Registered? <Link href="/login">Login</Link>
      </AlreadyRegistered>
      <ContentForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <label>Name</label>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="name"
              placeholder=""
              required={true}
            />
          </Field>
          <Field>
            <label>Email</label>
            <Input
              type="email"
              register={register}
              errors={errors}
              keyName="email"
              placeholder=""
              required={true}
            />
          </Field>
          <Field>
            <label>Password</label>
            <Input
              type="password"
              register={register}
              errors={errors}
              keyName="password"
              placeholder=""
              required={true}
            />
          </Field>
          <Field>
            <label>Especiality</label>
            <Controller
              name="speciality"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Box>
                  <FormControl fullWidth>
                    <Select
                      id="mui-component-select-speciality"
                      variant="outlined"
                      {...field}
                    >
                      {["Doctor", "Cirujano"].map((reason: any, k: any) => (
                        <MenuItem key={k} value={reason}>
                          {reason}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.speciality && (
                      <Typography
                        variant="caption"
                        sx={{ fontFamily: "Prompt" }}
                      >
                        * Este campo es requerido
                      </Typography>
                    )}
                  </FormControl>
                </Box>
              )}
            />
          </Field>
          <NoSsr>
            <ButtonBlack
              type="submit"
              loading={loading}
              variant="contained"
              fullWidth={true}
            >
              <span> sign up</span>
            </ButtonBlack>
          </NoSsr>
        </form>
      </ContentForm>
    </Wrapper>
  );
};

export default Index;
