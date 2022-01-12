import React, { useState } from "react";
import Typist from "react-typist";

const SentenceOne = (
  <span>
    What do they call love in your reality? 

  </span>
);

export default function Sample6({onTypingDone }) {
  // const [isPressed, setIsPressed] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  // const toggle = () => {
  //   setIsPressed(!isPressed);
  // };

  const handleTypingDone = () => {
    setHasTyped(true);
    onTypingDone();
  };

  // const lineClass = ["sampleTextContainer"]; // "line"
  // if (isPressed) {
  //   lineClass.push("red");
  // }

  return (
    <div> 
       
       <Typist
          className="transition-text"
          cursor={{ show: false }}
          onTypingDone={handleTypingDone}
        >
          {SentenceOne}
        </Typist>
    </div>
  );
}
