import React from "react";

class OtherForms extends React.Component {
  constructor() {
    super();
    this.state = {
      isFriendly: true
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState(prev => {
      return {
        isFriendly: !prev.isFriendly
      };
    });
  }

  render() {
    const friendly = this.state.isFriendly
      ? "I am your friend"
      : "Prepare to die";
    return (
      <div>
        <h4>Text area</h4>
        <textarea value={"Some default text here"} />

        <h4>Checkbox</h4>
        <p>{friendly}</p>
        <input
          name="isFriendly"
          type="checkbox"
          checked={this.state.isFriendly}
          onClick={this.handleCheck}
        />
      </div>
    );
  }
}

export default OtherForms;
