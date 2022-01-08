import React from "react";

export default class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let lineClass = ["line"];
    if (this.state.addClass) {
      lineClass.push("red");
    }
    return (
      <div className={lineClass.join(" ")} onClick={this.toggle.bind(this)}>
        {this.state.addClass
          ? "It had already been written that way across your resting percocet face in the drainedout LCD hale.  "
          : "You were writing too but in smaller and smaller sentences and more and more quickly until your words were just like the snow. "}
      </div>
    );
  }
}
