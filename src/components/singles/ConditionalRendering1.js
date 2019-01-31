import React from "react";

class ConditionalRendering1 extends React.Component {
  constructor() {
    super();
    this.state = {
      amICool: false
    };
  }

  render() {
    return (
      <div>
        <h3>Are down with ternary?</h3>
        <h3>{this.state.amICool ? "Hell yes" : "Heck no"}</h3>
      </div>
    );
  }
}

export default ConditionalRendering1;
