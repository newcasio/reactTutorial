import React from "react";

import SingleMap from "./SingleMap";

import mapData from "./listOfMaps";

class JsonToState extends React.Component {
  constructor() {
    super();
    this.state = {
      maps: mapData //mapData is an array of objects
    };
  }

  render() {
    const list = this.state.maps.map(country => {
      return <SingleMap key={country.id} name={country.name} />;
    });
    return (
      <div>
        <p>The data for this was imported, stored into state, then used.</p>
        {list}
      </div>
    );
  }
}

export default JsonToState;
