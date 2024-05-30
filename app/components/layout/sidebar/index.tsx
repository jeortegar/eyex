"use client";

import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Box } from "@mui/material";
//@ts-ignore
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import logoWhite from "@/assets/images/logo/logo-white.png";

const Wrapper = styled.div`
  padding: 50px 20px;
`;

const ItemsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  & li:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Item = styled.li`
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  color: #fff;
  &:hover div {
    background-color: #ffffff4a;
  }
  & div {
    padding: 13px 0px;
    border-radius: 10px;
    width: 85px;
    margin: auto;
    transition: all 0.2s ease-out;
  }
  & {
    a {
      color: #fff;
    }
    p {
      margin-top: 5px;
    }
  }
`;

const Index = () => {
  const router = useRouter();

  const navegation: any = [
    {
      icon: "home",
      label: "home",
    },
    {
      icon: "users",
      label: "patients",
    },
    {
      icon: "user",
      label: "profile",
    },
  ];

  // const auth = getAuth();
  const signOutHanlder = () => {
    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //     router.push("/login");
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //   });
  };

  return (
    <Wrapper>
      <Box mb={5} display="flex" justifyContent="center">
        <Image src={logoWhite} alt="logo-eyex" width={90} />
      </Box>
      <ItemsList>
        {navegation.map((item: any) => (
          <Item>
            <Box>
              <Link href={`/dashboard/${item.label}`}>
                <FeatherIcon icon={item.icon} />
                <p>{item.label}</p>
              </Link>
            </Box>
          </Item>
        ))}
        <Item onClick={signOutHanlder}>
          <Box>
            <FeatherIcon icon="log-out" />
            <p>log out</p>
          </Box>
        </Item>
      </ItemsList>
    </Wrapper>
  );
};

export default Index;
