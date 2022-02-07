import React from "react";
import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";
import ToggleColorMode from "./components/ToggleColorMode";

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
        <Election />
      </div>
    </ToggleColorMode>
  );
}

export default App;
