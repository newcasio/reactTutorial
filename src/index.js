import React from "react";
//only need to import ReactDOM in top level file as to attach to html file.  Subsequent components will be imported.
import ReactDOM from "react-dom";

//Function component.  Note capital for name of function.  Must return, this is what will be rendered.
function MyApp() {
  return (
    <div>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
      <Second />
    </div>
  );
}

function Second() {
  return <h1>Number 2</h1>;
}

// ReactDOM.render(component i want to render in JSX, where do i want to render it)
ReactDOM.render(<MyApp />, document.getElementById("root"));
