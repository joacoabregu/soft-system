import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";
//import ToggleColorMode from "./components/ToggleColorMode";
import Voting from "./screens/Voting";

function App() {
  const {
    palette: { background },
  } = useTheme();

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: background.default,
        paddingBottom: "3em",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/voting" element={<Voting />} />
        <Route path="/" element={<Election />} />
      </Routes>
    </div>
  );
}

export default App;
