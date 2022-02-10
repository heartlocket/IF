import React from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import Box from "./Branchone_space";


export default function SceneOneBranchOne({ onNextRoute }) {
  return (
    <div>
      yo
      <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box onClick={(event) => alert("hi")} position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      </Canvas>
      <button onClick={() => onNextRoute("scene-one-branch-three")}>
        Go to branch 3
      </button>
    </div>
  );
}
