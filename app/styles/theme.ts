// import type { ThemeOptions } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { COLORS } from "@/constants/colors";

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   interface ThemeOptions {
//     // @ts-ignore
//     altBackground?: boolean;
//     // @ts-ignore
//     palette?: {
//       primary?: {
//         main?: string;
//       };
//       secondary?: {
//         main?: string;
//       };
//       background?: {
//         default?: string;
//         paper?: string;
//       };
//     };
//   }

//   export interface CommonColors {
//     dark: string;
//     green: string;
//     white: string;
//     red: string;
//   }
// }

// // @ts-ignore
// export const themeOptions: ThemeOptions = {
//   altBackground: false,
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { color: "primary", variant: "contained" },
//           style: {
//             height: "53px",
//             backgroundColor: COLORS.DARK,
//             color: COLORS.WHITE,
//             letterSpacing: "2.5px",
//             fontFamily: "Prompt",
//           },
//         },
//         {
//           props: { color: "primary", variant: "text" },
//           style: {
//             height: "53px",
//             backgroundColor: COLORS.WHITE,
//             color: COLORS.DARK,
//             letterSpacing: "2.5px",
//             fontFamily: "Prompt",
//           },
//         },
//         {
//           props: { color: "primary", variant: "outlined" },
//           style: {
//             height: "53px",
//             // backgroundColor: COLORS.WHITE,
//             borderColor: "#dddddd",
//             color: COLORS.DARK,
//             letterSpacing: "2.5px",
//             fontFamily: "Prompt",
//           },
//         },
//       ],
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 768,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   palette: {
//     primary: {
//       main: COLORS.DARK,
//     },
//     secondary: {
//       main: COLORS.GREEN,
//     },
//     background: {
//       default: COLORS.SILVER,
//     },
//     error: {
//       main: COLORS.RED,
//     },
//     common: {
//       dark: COLORS.DARK,
//       green: COLORS.GREEN,
//       white: COLORS.WHITE,
//       red: COLORS.RED,
//     },
//   },
// };

// export default createTheme(themeOptions);

import { createTheme } from "@mui/material/styles";
import { COLORS } from "@/constants/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/no-shadow
  interface ThemeOptions {
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

  // Super Large Breakpoint Was Added
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    sl: true; // Super Large
    xl: true;
  }

  export interface CommonColors {
    purple: string;
    dark: string;
    green: string;
    white: string;
    red: string;
  }
}

const buttonStyles = {
  height: "49px",
  textTransform: "initial",
  fontFamily: "Prompt",
  fontWeight: 400,
  letterSpacing: "0.4px",
  fontSize: "14px",
};

export const themeOptions: any = {
  altBackground: false,
  typography: {
    fontFamily: [],
    h1: {
      fontSize: "40px",
      color: "#393C4F",
      fontWeight: 700,
    },
    h2: {
      fontSize: "20px",
      color: "#393C4F",
      fontWeight: 700,
    },
    h3: {
      fontSize: "14px",
      color: "#393C4F",
      fontWeight: 700,
    },
    h4: {
      fontSize: "10px",
      color: "#393C4F",
      fontWeight: 600,
    },
    body1: {
      color: COLORS.GREY,
      fontWeight: 400,
      letterSpacing: 0.15,
      fontSize: "14px",
    },
    body2: {
      color: COLORS.GREY,
      fontWeight: 400,
      width: "fit-content",
      fontSize: "12px",
    },
    body3: {
      color: COLORS.GREY,
      fontWeight: 400,
      width: "fit-content",
      fontSize: "10px",
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "25px !important",
          transform: "scale(0.9)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "12px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Prompt",

          height: "46px",
        },
        input: {
          fontFamily: "Prompt",

          fontSize: "12px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
        shrink: {
          transform: "translate(14px, -8px) scale(0.7) !important",
        },
        outlined: {
          transform: "translate(14px, 13px) scale(0.8)",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: "primary", variant: "contained" },
          style: {
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.WHITE,
            ...buttonStyles,
          },
        },
        {
          props: { color: "primary", variant: "outlined" },
          style: {
            backgroundColor: "transoarent",
            color: COLORS.PRIMARY,
            ...buttonStyles,
          },
        },
        {
          props: { color: "primary", variant: "text" },
          style: {
            backgroundColor: COLORS.WHITE,
            color: COLORS.PRIMARY,
            ...buttonStyles,
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
          textTransform: "none",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 768,
      lg: 956,
      sl: 1200,
      xl: 1536,
    },
  },
  palette: {
    success: {
      main: COLORS.SUCCESS,
    },
    error: {
      main: COLORS.ERROR,
    },
    warning: {
      main: COLORS.WARNING,
    },
    action: {
      disabledBackground: COLORS.LIGHT_PRIMARY,
      disabled: COLORS.WHITE,
    },
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.GREEN,
    },
    background: {
      default: COLORS.SILVER,
    },
    common: {
      dark: COLORS.DARK,
      purple: COLORS.PRIMARY,
      green: COLORS.GREEN,
      white: COLORS.WHITE,
      red: COLORS.ERROR,
    },
  },
};

export default createTheme(themeOptions);
