import React from "react";

import Status from "./Status";
import Status2 from "./Status2";

class ConditionalRendering2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 4000);
  }

  render() {
    return (
      <div>
        <h3>Conditional rendering 2 with state being passed as props</h3>
        <Status status={this.state.isLoading} />

        {this.state.isLoading ? <h3>Nearly there....</h3> : <Status2 />}
        <p>And again</p>
        {!this.state.isLoading && <h3>This is using &&</h3>}
      </div>
    );
  }
}
export default ConditionalRendering2;

//&& above --> This is even shorter than a ternary, but can only be used if there is nothing to return if the condition is false.
//If the value on the left of && is truthy, the value on the right will be returned.   If the value on the left is falsey, then no value will be returned.  Can test using the React extension in chrome.
