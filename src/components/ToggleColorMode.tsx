import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ColorModeContext } from "../context/ColorModeContext";
import { ToggleColorModeProps } from "../types/interfaces";
import { theme } from "../styles/theme";

export default function ToggleColorMode({ children }: ToggleColorModeProps) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  function createMode(mode: "light" | "dark") {
    return {
      ...theme,
      palette: {
        ...theme.palette,
        mode,
      },
    };
  }

  const themeMode = React.useMemo(() => createMode(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
