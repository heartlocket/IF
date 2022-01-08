import React from "react";
import Sample3 from "./Sample3";

export default function SceneOneBranchOne({ onNextRoute }) {
  return (
    <div>
      yo
      <Sample3 />
      <button onClick={() => onNextRoute("scene-one-branch-three")}>
        Go to branch 3
      </button>
    </div>
  );
}
