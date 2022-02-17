// we will get error if below gets un commented
//* global React ReactDOM */


//import React from "react";
import  ReactDOM  from "react-dom";
import Pet from "./pet";
import SearchParams from "./SearchParams";


// const App = () => {
//   // this is an app component
//   // just like rubber stamp
//   // anywhere we want to create app component, we can use it like a rubber stamp to stamp it down
//   // we have not used this component yet
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-store" }, "Adopt me!"),
//     React.createElement(Pet, { name: "kunal", animal: "dog", breed: "husky" }),
//     React.createElement(Pet, {
//       name: "kamal",
//       animal: "dog",
//       breed: "havanese",
//     }),
//     React.createElement(Pet, { name: "haran", animal: "cow", breed: "indian" }),
//   ]);
// };
// below is creating the instance of component
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
// ReactDOM.render(React.createElement(App), document.getElementById("root1"));




// rewriting the above app component in JSX

// const App = () => {
//   return (
//     <div>
//       <h1>Adopt me !!!!</h1>
//       <Pet name = "Luna" animal = "dog" breed = "husky">fun and working</Pet>
//       <Pet name = "Kunal" animal = "Cat" breed = "Mewo" />
//       <Pet name = "Haran" animal = "Cow" breed = "Holy"> i am the children</Pet>
//       <h2 >below is place using you can add input</h2>
//       <input />
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <h1>First App</h1>
      <SearchParams/>
      <input placeholder="type" />
    </div>
  )
}

//replace it to app component after making all the changes
ReactDOM.render(<App />, document.getElementById("root"));
<input />
//ReactDOM.render(<App />, document.getElementById("root1"));