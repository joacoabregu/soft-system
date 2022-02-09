/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../assets/logo-completo-color-edit.png";
import { useColorModeContext } from "../context/ColorModeContext";
import { useTheme } from "@mui/material/styles";

function Nav() {
  const colorMode = useColorModeContext();
  const theme = useTheme();

  return (
    <nav
      css={{ ...styles.nav, backgroundColor: theme.palette.background.default }}
    >
      <IconButton
        sx={{ ml: 1, height: "fit-content" }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <img src={logo} alt="logo" css={styles.img} />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3em",
  },

  img: {
    width: "100",
    maxHeight: "110px",
  },
};

export { Nav };
