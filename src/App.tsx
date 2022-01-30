import React from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";

function App() {
  return (
    <div className="App">
      <Nav />
      <Election />
    </div>
  );
}

export default App;
