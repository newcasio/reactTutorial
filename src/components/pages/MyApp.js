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
      <Footer />
    </div>
  );
}

//export so this is available to other pages
export default MyApp;
