import React from "react";

class Toggle extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      };
    });
  }

  render() {
    let buttonText = this.state.loggedIn
      ? "Turn me into false"
      : "Back to true";
    return (
      <div>
        <h2>Toggling true and false in state</h2>
        <button onClick={this.clickHandler}>{buttonText}</button>
        {this.state.loggedIn ? <h3>This be true</h3> : <h3>False!!</h3>}
      </div>
    );
  }
}

export default Toggle;

//clickHandler method setting state of loggedIn to whatever the previous loggedIn state is NOT.

//if you don't care what the previous value in state, don't need to use the return{}, just directly change the value, this.setState({value:newValue}).
