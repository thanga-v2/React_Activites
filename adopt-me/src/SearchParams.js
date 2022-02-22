// gonna be a homepage for people who can search for things


// hook begins here
import { useState,useEffect } from "react"
// hook allows us to keep track of the state
// useEffect is also a tyoe of hook, which gives side effects
import Pet from './pet'
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
    const breeds = [];
    const testvalues=[];
    console.log("Location is ", location);
    console.log("changes in state - ",teststate);
    console.log("animal you chose -",animal);
    const ANIMALS = ['reptile','rabbit','dog','cow'];
    const TEST_VALUES = ['USER1','USER2','USER3'];

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
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={e => setLocation(e.target.value)} value={location} placeholder = "Location"/>
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
                              <option value={animal} key={animal}>
                                  {animal}
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
            {
                pets.map(pet => (
                    <Pet name={pet.name} 
                    animal={pet.animal} 
                    breed={pet.breed}
                    key={pet.id}/>
                ))
            }
        </div>
    )
}




export default SearchParams;