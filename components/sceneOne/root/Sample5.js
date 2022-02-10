import React, { useState } from "react";
import Typist from "react-typist";

const SentenceOne = (
  <span className="line">
    Written into the chair before the screen with your face looking the way the grains of snow look when God looks them in the face. 

  </span>
);

export default function Sample5({onTypingDone }) {
  const [isPressed, setIsPressed] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  const toggle = () => {
    setIsPressed(!isPressed);
  };

  const handleTypingDone = () => {
    setHasTyped(true);
    onTypingDone();
  };

  const lineClass = ["sampleTextContainer"]; // "line"
  if (isPressed) {
    lineClass.push("red");
  }

  return (
    <div className={lineClass.join(" ")} onClick={toggle}>
      {!isPressed && hasTyped && SentenceOne}
      {!isPressed && !hasTyped && (
        <Typist
          className="typistContainer"
          cursor={{ show: false }}
          onTypingDone={handleTypingDone}
        >
          {SentenceOne}
        </Typist>
      )}
      {isPressed && (
        <span className="line">
          In the light of paradise, you cannot see god face to face, all you can hear is God saying I wish it had been me and not you. 
        </span>
      )}
    </div>
  );
}
