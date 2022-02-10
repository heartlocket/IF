import React, { useState } from "react";
import Typist from "react-typist";

const SentenceOne = (
  <span className="line">
    It was snowing when I found you.
  </span>
);

export default function Sample4({ onTypingDone }) {
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
          Like writing in snow with snow.
        </span>
      )}
    </div>
  );
}
