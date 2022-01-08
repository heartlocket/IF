import React, { useState } from "react";
import Typist from "react-typist";

export default function Sample2() {
  const [isPressed, setIsPressed] = useState(false);

  const toggle = () => {
    setIsPressed(!isPressed);
  };

  let lineClass = ["sampleTextContainer"]; // "line"
  if (isPressed) {
    lineClass.push("red");
  }

  return (
    <div className={lineClass.join(" ")} onClick={toggle}>
      {!isPressed && (
        <Typist className="typistContainer" cursor={{ show: false }}>
          <span>
            It had already been written that way across your resting percocet
            face in the drainedout LCD hale.
          </span>
        </Typist>
      )}
      {isPressed && (
        <span>
          You were writing too but in smaller and smaller sentences and more and
          more quickly until your words were just like the snow.
        </span>
      )}
    </div>
  );
}
