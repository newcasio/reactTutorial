import React from "react";

function Overview() {
  return (
    <div>
      <OverviewHeading />
      <OverviewText />
    </div>
  );
}

function OverviewHeading() {
  return <h3>Overview</h3>;
}

function OverviewText() {
  return (
    <p>
      Bacon ipsum dolor amet pork loin shankle quis frankfurter turducken magna
      ut. Jowl qui tongue, officia pork belly sirloin fatback mollit eiusmod
      laboris frankfurter. Ham cow aliquip pariatur exercitation ut sausage
      meatloaf turkey nostrud sint. Fatback deserunt consectetur, aute est
      exercitation leberkas nisi jerky meatloaf sunt.
    </p>
  );
}

export default Overview;
