import React, { useState } from "react";
import Typist from "react-typist";

const SentenceOne = (
  <span className="line">
        The world is a beautiful place.  
  </span>
);

export default function Sample({ onTypingDone }) {
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
          Too beautiful for its own good. 
        </span>
      )}
    </div>
  );
}

{/* <span>
When my <span onClick={() => alert("weee")}>body</span> is found, the
snow will have fallen like a killstreak, and the world will know
peace.
</span> */}