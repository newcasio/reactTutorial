import React from "react";

import SingleMap from "./SingleMap";

//bring in array of objects from JSON data
import mapData from "./listOfMaps";

//map over array using map which creates a new array.
const mapArray = mapData.map(flag => {
  return <SingleMap key={flag.id} name={flag.name} />;
});

function Mapping() {
  return (
    <div>
      <h3>Mapping data from a list to components</h3>
      {mapArray}
    </div>
  );
}

export default Mapping;
