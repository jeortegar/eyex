"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";
import StyledComponentsRegistry from "./styles/register";
import GlobalsStyles from "./styles/global";
import Box from "@mui/material/Box";
import Sidebar from "@/components/layout/sidebar";
import Main from "@/components/layout/main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { useUserStore } from "@/store";

const Wrapper = styled.div`
  background-color: #1d1d1d;
  height: 100vh;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export function Providers({ children }: PropsWithChildren) {
  // @ts-ignore
  const user = useUserStore((state) => state.user);

  const logged = true;
  // const logged = Object.keys(user).length ? true : false;

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalsStyles />
        {logged ? (
          <Wrapper>
            <Content>
              <Box>
                <Sidebar />
              </Box>
              <Box>
                <Main>{children}</Main>
              </Box>
            </Content>
          </Wrapper>
        ) : (
          <>{children}</>
        )}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
