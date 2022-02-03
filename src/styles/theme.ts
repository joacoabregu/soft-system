import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    back: {
      white: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    back?: {
      white?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: "#dddddd",
    },
  },

  back: {
    white: "#FFF",
  },
  typography: {
    fontSize: 15,
    h1: {
      fontSize: "2.3rem",
      fontWeight: 500,
    },
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    // Name of the component
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 16,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          margin: "1em 0 1em 0",
        },
      },
    },
  },
});

export { theme };
