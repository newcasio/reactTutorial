import React from "react";
//only need to import ReactDOM in top level file as to attach to html file.  Subsequent components will be imported.
import ReactDOM from "react-dom";

//import base component
import MyApp from "./components/pages/MyApp";

import "./style.css";

// ReactDOM.render(component i want to render in JSX, where do i want to render it (this is #root div is in plublic/index.html))
ReactDOM.render(<MyApp />, document.getElementById("root"));
