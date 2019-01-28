import React from "react";

function Hi() {
  const name = "Brad";
  const age = 39;
  return (
    <div>
      <h1> Good day {name}</h1>
      <p> {`${name}, you are ${age} years of age.`}</p>
    </div>
  );
}

export default Hi;
