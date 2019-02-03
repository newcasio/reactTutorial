import React from "react";

class BasicForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //event.target.name is refering to the event.target input where we give each input a name corresponding to the values in state.  the value refers to the input value
  //this can also be done by having 2 separate handleChange methods (eg handleChange1 and handleChange2), the setState({firstName: event.target.value}) of each.  No need for input names then.
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  //same as above setState using destructuring, may avoid bugs.
  // handleChange(event){
  //   const {name, value} = event.target;        destructuring
  //   this.setState({
  //     [name]: value
  //   })
  // }

  render() {
    return (
      <div>
        <h2>Basic Input form writing to state</h2>
        <form>
          <label>
            Full name:
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          </label>
        </form>
        <h4>Below is reading state dynamically</h4>
        <p>
          {this.state.firstName} {this.state.lastName}
        </p>
      </div>
    );
  }
}

export default BasicForm;

//input use onChange.  handleChange handler takes the what is entered in the input field (event.target.value), and sets state value in real time (use react dev tools).  Current value of input box is event.target.value.  Note 'event' is a parament in the handleChange method.

//in render, use value={this.state.??} so that what is seen is actually being retrieved from state.
