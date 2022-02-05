import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    back: {
      white: string;
    };
  }
  interface ThemeOptions {
    back?: {
      white?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#545454" },

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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#f3f3f37d",
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          marginBottom: "2em",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "1em 0 1.5em 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            borderColor: "#545454",
            backgroundColor: " #f3f3f37d",
          },
        },
      },
    },
  },
});

export { theme };
