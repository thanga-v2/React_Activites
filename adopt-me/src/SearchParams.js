// gonna be a homepage for people who can search for things


// hook begins here
import { useState } from "react"
// hook allows us to keep track of the state

// creating a component

const SearchParams = () => {
    // hook
    // first time default values - seattle,wa
    const [animal,seteAnimal] = useState("");
    const [location,setLocation] = useState("seattle,LA,NY");
    const [teststate,setTestState] = useState("test");
    const [testvalue,setTestvalue] = useState("");
    const [breed,setBreed] = useState("");
    const breeds = [];
    console.log("Location is ", location);
    console.log("changes in state - ",teststate);
    console.log("animal you chose -",animal);
    const ANIMALS = ['reptile','rabbit','dog','cow'];
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
                    />
                </label>
            </form>
        </div>
    )
}




export default SearchParams;