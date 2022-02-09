import React from "react";
import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";
import ToggleColorMode from "./components/ToggleColorMode";
import { Routes, Route,  } from "react-router-dom";
import Voting from "./screens/Voting"

function App() {

  return (
    <ToggleColorMode>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#dddddd",
          paddingBottom: "3em",
        }}
      >
        <Nav />
        <Routes>
          <Route path="/voting" element={<Voting />} />
          <Route path="/" element={<Election />} />
        </Routes>
      </div>
    </ToggleColorMode>
  );
}

export default App;
