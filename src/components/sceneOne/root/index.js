import React, { useState } from "react";
import Typist from "react-typist";
import Sample from "./Sample1";
import Sample2 from "./Sample2";
import Sample3 from "./Sample3";
import Sample4 from "./Sample4";
import Sample5 from "./Sample5";
// import Button from "./Buttons"
import Sample6 from "./Sample6";
import bg1 from "../../../backgrounds/bg1.gif";
import bg2 from "../../../backgrounds/bg2.gif";
import bg3 from "../../../backgrounds/bg3.gif";
import bg4 from "../../../backgrounds/bg4.gif";

export default function SceneOneRoot({ onNextRoute }) {
  const [displaySample2, setDisplaySample2] = useState(false);
  const [displaySample3, setDisplaySample3] = useState(false);
  const [displaySample4, setDisplaySample4] = useState(false);
  const [displaySample5, setDisplaySample5] = useState(false);
  const [displaySample6, setDisplaySample6] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);

  // const [displaySample6, setDisplaySample6] = useState(false);

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
      {displaySample2 && <Sample2 onTypingDone={() => setDisplaySample3(true)}/>}
      {displaySample3 && <Sample3 onTypingDone={() => setDisplaySample4(true)}/>}
      {displaySample4 && <Sample4 onTypingDone={() => setDisplaySample5(true)}/>}
      {displaySample5 && <Sample5 onTypingDone={() => setDisplaySample6(true)}/>}
      {displaySample6 && <Sample6 onTypingDone={() => setDisplayButton(true)}/>}
      {displayButton && 

        <div className="root-scene-select">
          <div className="line" onClick={() => onNextRoute("scene-one-branch-one")}>
            Screen
          </div>
          <div className="line" onClick={() => onNextRoute("scene-one-branch-two")}>
            Face
          </div>
          <div className="line" onClick={() => onNextRoute("scene-one-branch-three")}>
            God
          </div>
        </div>
      
      }
  </div>

  );
}
