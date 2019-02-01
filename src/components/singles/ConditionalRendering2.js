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
      </div>
    );
  }
}
export default ConditionalRendering2;
