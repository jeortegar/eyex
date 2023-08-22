import type { ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/constants/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-shadow
  interface ThemeOptions {
    // @ts-ignore
    altBackground?: boolean;
    // @ts-ignore
    palette?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
      background?: {
        default?: string;
        paper?: string;
      };
    };
  }

  export interface CommonColors {
    dark: string;
    green: string;
    white: string;
    red: string;
  }
}

// @ts-ignore
export const themeOptions: ThemeOptions = {
  altBackground: false,
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            height: '53px',
            backgroundColor: COLORS.DARK,
            color: COLORS.WHITE,
            letterSpacing: '2.5px',
            fontFamily: 'Prompt',
          },
        },
        {
          props: { color: 'primary', variant: 'text' },
          style: {
            height: '53px',
            backgroundColor: COLORS.WHITE,
            color: COLORS.DARK,
            letterSpacing: '2.5px',
            fontFamily: 'Prompt',
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: COLORS.DARK,
    },
    secondary: {
      main: COLORS.GREEN,
    },
    background: {
      default: COLORS.SILVER,
    },
    error: {
      main: COLORS.RED,
    },
    common: {
      dark: COLORS.DARK,
      green: COLORS.GREEN,
      white: COLORS.WHITE,
      red: COLORS.RED,
    },
  },
};

export default createTheme(themeOptions);
