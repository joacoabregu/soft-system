import * as React from "react";
import { ColorModeContextValue } from "../types/interfaces";

const ColorModeContext = React.createContext<ColorModeContextValue | undefined>(
  { toggleColorMode: () => {} }
);
ColorModeContext.displayName = "ColorModeContext";

function useColorModeContext() {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error(`useColorMode must be used within a ColorModeProvider`);
  }
  return context;
}

export { ColorModeContext, useColorModeContext };
