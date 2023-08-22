// import { createTheme } from "@mui/material/styles";
import { COLORS } from "@/constants/colors";

// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: COLORS.MAIN_PRIMARY,
//       light: COLORS.LIGHT_PRIMARY,
//       dark: COLORS.DARK_PRIMARY,
//       contrastText: COLORS.CONTRAST_TEXT,
//     },
//     secondary: {
//       main: COLORS.MAIN_SECONDARY,
//       light: COLORS.LIGHT_SECONDARY,
//       dark: COLORS.DARK_SECONDARY,
//       contrastText: COLORS.CONTRAST_TEXT,
//     },
//   },
// });

import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
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
