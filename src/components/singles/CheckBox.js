import React from "react";

import Todo from "./Todo";

const CheckBox = () => {
  return (
    <div className="todos">
      <h4>What i need to do</h4>
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default CheckBox;
