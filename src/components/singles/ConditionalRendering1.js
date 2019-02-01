import React from "react";

class ConditionalRendering1 extends React.Component {
  constructor() {
    super();
    this.state = {
      amICool: true
    };
  }

  render() {
    return (
      <div>
        <h2>Conditional Rendering example 1</h2>
        <h4>Are down with ternary?</h4>
        <h4>{this.state.amICool ? "Hell yes" : "Heck no"}</h4>
      </div>
    );
  }
}

export default ConditionalRendering1;
