// we will get error if below gets un commented
//* global React ReactDOM */


import React from "react";
import  ReactDOM  from "react-dom";
import Pet from "./pet";


const App = () => {
  // this is an app component
  // just like rubber stamp
  // anywhere we want to create app component, we can use it like a rubber stamp to stamp it down
  // we have not used this component yet
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-store" }, "Adopt me!"),
    React.createElement(Pet, { name: "kunal", animal: "dog", breed: "husky" }),
    React.createElement(Pet, {
      name: "kamal",
      animal: "dog",
      breed: "havanese",
    }),
    React.createElement(Pet, { name: "haran", animal: "cow", breed: "indian" }),
  ]);
};
// below is creating the instance of component
ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(React.createElement(App), document.getElementById("root1"));
