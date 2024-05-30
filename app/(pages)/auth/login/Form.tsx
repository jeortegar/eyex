"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Field } from "@/styles/global";
import Input from "../../../components/ui/form/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow-left.svg";
import { useUserStore } from "@/store";
import { sigIn } from "@/services/api/auth";
import { Toaster, toast } from "sonner";

const Wrapper = styled.div`
  padding: 40px 64px;
`;

const Title = styled.h1`
  font-size: 37px;
  & img {
    margin-right: 12px;
    cursor: pointer;
  }
`;

const ContentForm = styled.div`
  margin-top: 35px;
`;

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm();

  // @ts-ignore
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    sigIn(dataForm.email, dataForm.password)
      .then((userInfo) => {
        setUserInfo(userInfo);
        router.push("/dashboard/home");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Ocurrio un error en las credenciales");
        console.log(error);
      });
    // setUserInfo({
    //   ...dataForm,
    //   user_uid: '293u902n390n',
    //   name: 'Jared Ortega',
    // });
    // router.push('/dashboard/home');
    // localStorage.setItem('user_uid', '987bob0328949b2398b42');
  };

  return (
    <Wrapper>
      <Title>
        <Link href="/auth/create-account">
          <Image width={22} height={22} priority src={IconArrow} alt="<" />
        </Link>
        Log In
      </Title>
      <ContentForm>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <LoadingButton
            type="submit"
            loading={loading}
            variant="contained"
            disabled={!isValid}
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
