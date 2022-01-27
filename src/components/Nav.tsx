/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import logo from "../assets/logo-completo-color.png";

function Nav() {
  return (
    <nav css={styles.nav}>
      <img src={logo} alt="logo" css={styles.img} />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end",
  },

  img: {
    width: "100",
    maxHeight: "150px",
  },
};

export { Nav };
