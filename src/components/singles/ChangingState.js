import React from "react";

class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = {
      direct: 1,
      indirect: 10
    };

    //bind event handlers to the class component
    this.clickHandler1 = this.clickHandler1.bind(this);
    this.clickHandler2 = this.clickHandler2.bind(this);
  }

  clickHandler1() {
    this.setState({ direct: 2 });
  }

  clickHandler2() {
    this.setState(prevState => {
      return {
        indirect: prevState.indirect + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Changing state</h2>
        <h4>Direct</h4>
        <h5>{this.state.direct}</h5>
        <button onClick={this.clickHandler1}>Rewrite state directly</button>
        <h4>Indirect</h4>
        <h5>{this.state.indirect}</h5>
        <button onClick={this.clickHandler2}>
          Reference Previous state, then replace
        </button>
      </div>
    );
  }
}

export default ChangingState;
