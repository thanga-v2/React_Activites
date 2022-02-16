// declaring an array of function
// creating a pet component

//import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       // below is array of components to render
//       React.createElement("div", {}, "Cat"),
//       React.createElement("h2", {}, props.name),
//       React.createElement("h3", {}, props.animal),
//       React.createElement("h3", {}, props.breed),
//     ]);
//   };

  // re writing the pet component using jsx

  const Pet = (props) => {

    return(
        <div>{props.children}
            <h2>{props.name}</h2>
            <h3>{props.animal}</h3>
            <h3>{props.breed}</h3>
        </div>
    )

  }


  export default Pet;