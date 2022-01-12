import React, { useState } from "react";
import Typist from "react-typist";


export default function Button({ }) {

  return (
    <><div className="transition-text">
      What do they call love in your reality?"
    </div>
    <div style={{ display: "block" }}>
        <div onClick={() => onNextRoute("scene-one-branch-one")}>
          Screen
        </div>
        <div onClick={() => onNextRoute("scene-one-branch-two")}>
          Face
        </div>
        <div onClick={() => onNextRoute("scene-one-branch-three")}>
          God
        </div>
      </div></>
  );
  }

