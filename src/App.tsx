import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { Nav } from "./components/Nav";
import { Election } from "./screens/Election";
const Results = React.lazy(() => import("./screens/Results"));
const Voting = React.lazy(() => import("./screens/Voting"));

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
      <React.Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/voting" element={<Voting />} />
          <Route path="/results" element={<Results />} />
          <Route path="/" element={<Election />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
