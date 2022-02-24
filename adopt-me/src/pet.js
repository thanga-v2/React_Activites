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

  // const Pet = (props) => {

  //   return(
  //       <div>{props.children}
  //           <h2>{props.name}</h2>
  //           <h3>{props.animal}</h3>
  //           <h3>{props.breed}</h3>
  //       </div>
  //   )

  // }

  const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;
  
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
      hero = images[0];
    }
  
    return (
      <a href={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </a>
    );
  };
  
  export default Pet;