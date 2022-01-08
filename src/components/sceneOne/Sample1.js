import React, { useState } from "react";

export default function Sample() {
  const [isPressed, setIsPressed] = useState(false);

  const toggle = () => {
    setIsPressed(!isPressed);
  };

  const lineClass = ["line"];
  if (isPressed) {
    lineClass.push("red");
  }

  return (
    <div className={lineClass.join(" ")} onClick={toggle}>
      {isPressed && (
        <>
          When my <span onClick={() => alert("weee")}>body</span> is found, the
          snow will have fallen like a killstreak, and the world will know
          peace.
        </>
      )}
      {!isPressed && (
        <>By the time your body was found I had already written it that way.</>
      )}
    </div>
  );
}
