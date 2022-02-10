import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import { Routes, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";
import Voting from "./screens/Voting";
import Results from "./screens/Results";

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
        <Route path="/results" element={<Results />} />
        <Route path="/" element={<Election />} />
      </Routes>
    </div>
  );
}

export default App;
