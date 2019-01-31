import React from "react";

class SimpleState extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "This is from state"
    };
  }

  render(props) {
    return (
      <div>
        <h3>Question: Where is the answer being stored?</h3>
        <h4>
          Answer: {this.state.answer}, Mr {this.props.name}.
        </h4>
      </div>
    );
  }
}

export default SimpleState;
