import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    back: {
      main: string;
    };
  }
  interface ThemeOptions {
    back?: {
      main?: string;
    };
  }
}

const createMode = (mode: PaletteMode) => {
  const theme = {
    palette: {
      mode,
      primary: {
        ...(mode === "light" ? { main: "#545454" } : { main: "#b3b3b3" }),
      },
      background: {
        ...(mode === "light" ? { default: "#e7e7e7" } : { default: "#585757" }),
      },
      ...(mode === "dark" && {
        text: {
          primary: "#c6c5c6",
        },
      }),
    },
    back: {
      ...(mode === "light" ? { main: "#FFF" } : { main: "#2b2b2b" }),
    },
    typography: {
      fontSize: 15,
      h1: {
        fontSize: "2.3rem",
        fontWeight: 500,
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.7rem",
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
            ...(mode === "light"
              ? { backgroundColor: "#f3f3f37d" }
              : { backgroundColor: "#1f1f1f" }),
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
            ...(mode === "dark" && {
              borderColor: "#c6c5c6",
            }),
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
      MuiButtonBase: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              color: "#545454",
            }),
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            ...(mode === "dark" && {
              backgroundColor: " #2b2b2b",
            }),
          },
        },
      },
    },
  };
  const finalTheme = createTheme(theme);
  return finalTheme;
};

export { createMode };
