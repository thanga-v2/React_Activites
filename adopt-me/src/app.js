// we will get error if below gets un commented
//* global React ReactDOM */


//import React from "react";
import  ReactDOM  from "react-dom";
import Lifecycle from "./LifeCycle";
import Pet from "./pet";
import SearchParams from "./SearchParams";
import TestParams from "./Testparams";
import testParams from "./Testparams";


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
      <h2>Test</h2>

      <Composition
        left={<A/>}
        right={<B/>}
      />

      <TestComposition 
      test ={<A/>}
      test_name = {<B/>} />
    </div>
  )
}

const Additional = () => {
  return (
    <div>
    <TestParams/>
  </div>

  )

}


const Lifecycletest = () => {
  return(
    <div>
      <Lifecycle/>    
    </div>
  )
}

const Composition = (props) => {
  return (
    <div>
      <div>
          {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </div>
  )
}


const TestComposition = (props) => {
return(
  <div>
    <div>
      {props.test}
    </div>
    <div>
      {props.test_name}
    </div>
  </div>
)
}

const C = () => {
  return(
    <div name = "A">Component c</div>
  )
}


const A = () => {
  return(
    <div name = "A">Component A</div>
  )
}

const B = () => {
  return(
    <div name ="B">Component B</div>
  )
}

//replace it to app component after making all the changes
ReactDOM.render(<App />, document.getElementById("root"));
<input />
ReactDOM.render(<Additional />, document.getElementById("root1"));
// print in the logs to test below
ReactDOM.render(<Lifecycletest />, document.getElementById("root1"));

// Component composition
ReactDOM.render(<Composition />, document.getElementById("root1"));