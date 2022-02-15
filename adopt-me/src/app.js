// declaring an array of function
// creating a pet component
const Pet = () => {
  return React.createElement("div", {}, [
    // below is array of components to render
    React.createElement("div", {}, "Cat"),
    React.createElement("h3", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
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
