// gonna be a homepage for people who can search for things


// hook begins here
import { useState,useEffect } from "react"
// hook allows us to keep track of the state
// useEffect is also a tyoe of hook, which gives side effects
//importing custom hooks
import userBreedList from "./useBreedList";
// removing the pet - component composition - scroll down last
import Pet from './pet'
import Results from "./Results";
// creating a component



const SearchParams = () => {
    // hook
    // first time default values - seattle,wa
    const [animal,seteAnimal] = useState("");
    //const [location,setLocation] = useState("seattle,LA,NY");
    const [location,setLocation] = useState("");
    const [teststate,setTestState] = useState("test");
    const [testvalue,setTestvalue] = useState("");
    const [breed,setBreed] = useState("");

    // we are going to get this array from API
    const [pets,SetPets] = useState([]);
    const [breeds] = userBreedList(animal);
    // from custom hook
    const [breedList] = userBreedList(animal);
    console.log("Location is ", location);
    console.log("changes in state - ",teststate);
    console.log("animal you chose -",animal);
    const ANIMALS = ['bird','reptile','rabbit','dog','cow'];
    const TEST_VALUES = ['USER1','USER2','USER3'];
    const[param,setParam] = useState("");
    const DO_SOMETHING=['MESS','RUN'];

    // below takes the infintie run
    // useEffect( () => {
    //     // we are going to put all our asynch codes here
    //     // use promises to request the pets
    //     requestPets();

    // })

        // // below runs only when we update animal
        // useEffect ( () => {
        //     requestPets();
        // },[animal])

    // below runs only once. when we make change in pets, it re renders in setPets
    useEffect( () => {
        // all of our asynch code
        //console.log("is",animal)
        requestPets();

    },[])

    // cleaning up - garbage collection
    // useEffect( () => {
    //     const timer = setTimeout(() => alert("timed",2000))

    //     return() => clearTimeout(timer);
    // },[animal])

    useEffect ( () => {
        reqtestvalue();
        console.log("changes from effect -",testvalue);
    },[testvalue])

    function reqtestvalue() {
        console.log("test value from effect")
    }

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log("response from json object -",json);
        SetPets(json.pets);
    }
    return(
        <div className="search-params">
            <form
            onSubmit={e => {
                // prevents from submitting when we click enter
                e.preventDefault();
                requestPets();
            }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location" 
                    onChange={e => setLocation(e.target.value)} 
                    value={location} 
                    placeholder = "Location"
                    onFocus={(e) => {
                        console.log('Focused on input',e);
                      }}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                    id="animal"
                    value={animal}
                    onChange={e => seteAnimal(e.target.value)}
                    onBlur={e => seteAnimal(e.target.value)}
                    >
                        <option/>{
                            ANIMALS.map(animal => (
                                // returning option
                              <option value={animal} key={animal}>
                                  {animal}
                              </option>  
                            ))
                        }
                        <option/>
                        </select>
                </label>
                <label>
                    dummy
                    <select 
                    id = "dummy">
                        // below gives an empty 
                        <option/>
                        // below to add elements in the drop down
                        {
                            DO_SOMETHING.map(element => (
                                <option
                                    // below is the element in drop down 
                                    // if we remove below, dropdown will be empty
                                    // no two key should be same
                                key = {element}>
                                    {element}
                                </option>
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                    id="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    onBlur={e => setBreed(e.target.value)}
                    >
                        <option/>{
                            breeds.map(breed => (
                              <option value={breed} key={breed}>
                                  {breed}
                              </option>  
                            ))
                        }
                        </select>
                </label>
                <button>Please Submit</button>
            </form>

            <form>
                <label>
                    test
                    <input id="test" onChange={e => setTestState(e.target.value)} value={teststate} placeholder="enter the props"/>
                    <button>submit</button>
                </label>
                <label>
                    test label
                    <select
                    id = "test"
                    onChange={e => setTestvalue(e.target.value)}
                    value = "testvalue"
                    >
                        {
                            TEST_VALUES.map( testvalue => (
                                <option value={testvalue} key={testvalue}>
                                    {testvalue}
                                </option>
                            ))
                        }
                    </select>
                </label>
            </form>

            {/* { // below is example of component composition
                pets.map(pet => (
                    // we get a below pet component
                    <Pet name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed}
                    key={pet.id}/>
                ))
            } */}
            <Results pets={pets}/>

        </div>
    )
}




export default SearchParams;