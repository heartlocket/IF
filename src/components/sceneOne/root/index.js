import React, { useState } from "react";
import Sample from "./Sample1";
import Sample2 from "./Sample2";
import bg1 from "../../../backgrounds/bg1.gif";
import bg2 from "../../../backgrounds/bg2.gif";
import bg3 from "../../../backgrounds/bg3.gif";
import bg4 from "../../../backgrounds/bg4.gif";

export default function SceneOneRoot({ onNextRoute }) {
  const [displaySample2, setDisplaySample2] = useState(false);
  const [bgStyle, setBgStyle] = useState({
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  });

  const handleClick = () => {
    const pictureArray = [bg1, bg2, bg3, bg4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    setBgStyle({
      backgroundImage: `url(${selectedPicture})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      transition: "background 4s linear",
    });
  };

  return (
    <div className="window" style={bgStyle} onClick={handleClick}>
      <Sample onTypingDone={() => setDisplaySample2(true)} />
      {displaySample2 && <Sample2 />}
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
    </div>
  );
}
