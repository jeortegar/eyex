'use client';

import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Sidebar from '@/components/layout/sidebar';
import Main from '@/components/layout/main';

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

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
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
  );
}
