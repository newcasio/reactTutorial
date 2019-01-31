import React from "react";

class Minus extends React.Component {
  clickHandler() {
    this.setState(prevState => {
      return {
        number: prevState.number - 500
      };
    });
  }

  render(props) {
    return (
      <div>
        <h4>This is state from parent component transferred via props</h4>
        <h5>{this.props.number}</h5>
      </div>
    );
  }
}

export default Minus;
