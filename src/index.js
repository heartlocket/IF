import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import bg1 from "./backgrounds/bg1.gif";
import bg2 from "./backgrounds/bg2.gif";
import bg3 from "./backgrounds/bg3.gif";
import bg4 from "./backgrounds/bg4.gif";
import Sample from "./components/sceneOne/Sample1";
import Sample2 from "./components/sceneOne/Sample2";

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgStyle: {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const pictureArray = [bg1, bg2, bg3, bg4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    this.setState({
      bgStyle: {
        backgroundImage: `url(${selectedPicture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background 4s linear",
      },
    });
  }

  render() {
    return (
      <div
        className="window"
        style={this.state.bgStyle}
        onClick={this.handleClick}
      >
        <Sample />
        <Sample2 />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <Choose1 /> */}
    <Window />
  </React.StrictMode>,
  document.getElementById("root")
);
