import React from "react";

import SingleMap from "./SingleMap";

//bring in array of objects from JSON data
import listOfMaps from "./listOfMaps";

//map over array using map which creates a new array.
const mapArray = listOfMaps.map(flag => {
  return <SingleMap id={flag.id} name={flag.name} />;
});

function Mapping() {
  return (
    <div>
      <h3>List of maps I know</h3>
      {mapArray}
    </div>
  );
}

export default Mapping;
