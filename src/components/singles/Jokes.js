import React from "react";

import SingleJoke from "./SingleJoke";

function Jokes() {
  return (
    <div className="joke-section">
      <h2 id="joke-heading"> Joke Section </h2>
      <SingleJoke question="Say what?" punchline="Nothing :)" />
      <SingleJoke question="What is a joke?" punchline="You" />
      <SingleJoke punchline="The way you drive" />
      <SingleJoke punchline="Nothing :)" />
    </div>
  );
}

export default Jokes;
