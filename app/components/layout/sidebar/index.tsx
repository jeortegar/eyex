"use client";

import Link from "next/link";
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
  const navegation: any = [
    {
      icon: "home",
      label: "home",
    },
    {
      icon: "file",
      label: "files",
    },
  ];

  return (
    <Wrapper>
      <Box mb={5} display="flex" justifyContent="center">
        <Image src={logoWhite} alt="logo-eyex" width={90} />
      </Box>
      <ItemsList>
        {navegation.map((item: any) => (
          <Item>
            <Link href={`/dashboard/${item.label}`}>
              <FeatherIcon icon={item.icon} />
              <p>{item.label}</p>
            </Link>
          </Item>
        ))}
      </ItemsList>
    </Wrapper>
  );
};

export default Index;
