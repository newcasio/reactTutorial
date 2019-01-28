import React from "react";

function SingleJoke(props) {
  return (
    <div className="joke">
      <h3 style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </h3>
      <h3>Answer: {props.punchline}</h3>
    </div>
  );
}

export default SingleJoke;
