import React, { useState } from "react";
import Typist from "react-typist";


export default function Button({ onNextRoute }) {
  // const [isPressed, setIsPressed] = useState(false);


  return (
    <div style={{ display: "block" }}>
        <button onClick={() => onNextRoute("scene-one-branch-one")}>
          choice 1
        </button>
        <button onClick={() => onNextRoute("scene-one-branch-two")}>
          choice 2
        </button>
        <button onClick={() => onNextRoute("scene-one-branch-three")}>
          choice 3
        </button>
      </div>
  );
  }

