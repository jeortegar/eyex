"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "@/styles/global";
import Input from "@/components/ui/form/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import { useUserStore } from "@/store";
import { Box, Typography, FormControl, MenuItem, Select } from "@mui/material";
import { createAccount } from "@/services/api/auth";
import { Toaster, toast } from "sonner";

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

const Index = () => {
  const router = useRouter();

  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (dataForm: any) => {
    const { name, email, password, speciality } = dataForm;
    setLoading(true);
    const info = {
      name,
      email,
      password,
      speciality,
    };
    createAccount(info)
      .then((userInfo) => {
        reset();
        setLoading(false);
        setUserInfo(userInfo);
        toast.success("Bienvenido!");
        router.push("/dashboard/home");
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Ocurrio un error en las credenciales");
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <Title>Create Account</Title>
      <AlreadyRegistered>
        Already Registered? <Link href="/auth/login">Login</Link>
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
          <LoadingButton
            type="submit"
            disabled={!isValid}
            loading={loading}
            variant="contained"
            fullWidth={true}
          >
            Continue
          </LoadingButton>
        </form>
      </ContentForm>
      <Toaster />
    </Wrapper>
  );
};

export default Index;
