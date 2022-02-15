// declaring an array of function
// creating a pet component

import React from "react";
const Pet = (props) => {
    return React.createElement("div", {}, [
      // below is array of components to render
      React.createElement("div", {}, "Cat"),
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
  };

  export default Pet;