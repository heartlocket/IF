import React, { useState } from "react";
import Typist from "react-typist";

const SentenceOne = (
  <span className="line">
    You were writing too but in smaller and smaller sentences and more and more quickly until your words were like snow.
  </span>
);

export default function Sample3({ onTypingDone }) {
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
          It was written that way across your resting percocet face in the drainedout LCD hale.
        </span>
      )}
    </div>
  );
}
