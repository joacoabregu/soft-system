import React from "react";
import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";

function App() {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#dddddd" }}>
      <Nav />
      <Election />
    </div>
  );
}

export default App;
