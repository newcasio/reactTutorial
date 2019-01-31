import React from "react";

import Title from "../singles/Title";
import Overview from "../singles/Overview";
import Footer from "../singles/Footer";
import OverviewList from "../singles/OverviewList";
import CheckBox from "../singles/CheckBox";
import Variables from "../singles/Variables";
import PropsExample from "../singles/PropsExample";
import Jokes from "../singles/Jokes";
import Mapping from "../singles/Mapping";
import BasicClassComponent from "../singles/BasicClassComponent";
import SimpleState from "../singles/SimpleState";
import ConditionalRendering1 from "../singles/ConditionalRendering1";
import JsonToState from "../singles/JsonToState";
import ChangingState from "../singles/ChangingState";
import ChangingStatePractise from "../singles/ChangingStatePractise";

//Function component.  Note capital for name of function.  Each component must return, this is what will be rendered.
function MyApp() {
  return (
    <div>
      <Title />
      <Overview />
      <OverviewList />
      <CheckBox />
      <Variables />
      <PropsExample />
      <Jokes />
      <Mapping />
      <BasicClassComponent />
      <SimpleState name="Bradley" />
      <ConditionalRendering1 />
      <JsonToState />
      <div>
        <h4>Event handlers</h4>
        <button
          onClick={() => {
            console.log("I was clicked");
          }}
        >
          Event Handler printing out to console
        </button>
        <img
          onMouseOut={() => console.log("I WAS hovered")}
          src="http://fillmurray.com/300/200"
          alt="Bill murray"
        />
      </div>
      <ChangingState />
      <ChangingStatePractise />
      <Footer />
    </div>
  );
}

//export so this is available to other pages
export default MyApp;
