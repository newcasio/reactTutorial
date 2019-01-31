import React from "react";

import Minus from "./Minus";

class ChangingStatePractise extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 24
    };
    this.handleClickDouble = this.handleClickDouble.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickDouble() {
    this.setState(prevState => {
      return {
        number: prevState.number * 2
      };
    });
  }

  handleClickAdd() {
    this.setState(prevState => {
      return {
        number: prevState.number + 13
      };
    });
  }

  render() {
    return (
      <div>
        <h4>State changing practise</h4>
        <h4>{this.state.number}</h4>
        <button onClick={this.handleClickDouble}>Double me</button>
        <button onClick={this.handleClickAdd}>Add 13</button>
        <Minus number={this.state.number} />
      </div>
    );
  }
}

export default ChangingStatePractise;
