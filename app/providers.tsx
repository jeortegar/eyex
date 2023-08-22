'use client';

import { PropsWithChildren } from 'react';
import StyledComponentsRegistry from './styles/register';
import GlobalsStyles from './styles/global';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalsStyles />
        <>{children}</>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
