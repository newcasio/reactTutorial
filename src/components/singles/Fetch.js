import React from "react";

class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  //first set loading state to true.
  //FETCH data from star wars API which returns a promise so must .then, change the info coming back to an json object using json().
  //wait for the json object .then save this to character in state.  Also change loading state to false as we are no longer loading.
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/2")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    const message = this.state.loading
      ? "Loading..."
      : this.state.character.name;
    return (
      <div>
        <h2>This is fetching data from an API using FETCH</h2>
        <h3>{message}</h3>
      </div>
    );
  }
}

export default Fetch;
