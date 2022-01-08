import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import SceneOneRoot from "./components/sceneOne/root";
import SceneOneBranchOne from "./components/sceneOne/branchOne";

function App() {
  const [route, setRoute] = useState("scene-one-root");

  return (
    <>
      {route === "scene-one-root" && (
        <SceneOneRoot onNextRoute={(r) => setRoute(r)} />
      )}
      {route === "scene-one-branch-one" && (
        <SceneOneBranchOne onNextRoute={(r) => setRoute(r)} />
      )}
      {route === "scene-one-branch-two" && <div>branch 2</div>}
      {route === "scene-one-branch-three" && <div>branch 3</div>}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
