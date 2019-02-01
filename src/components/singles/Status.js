import React from "react";

class Status extends React.Component {
  render(props) {
    if (this.props.status === true) {
      return <h4>Loading..........</h4>;
    } else {
      return <h4>I have finished dloading</h4>;
    }
  }
}

export default Status;
