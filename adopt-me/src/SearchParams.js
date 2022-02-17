// gonna be a homepage for people who can search for things


// hook begins here
import { useState } from "react"
// hook allows us to keep track of the state

// creating a component

const SearchParams = () => {
    // hook
    // first time default values - seattle,wa
    const [location,setLocation] = useState("seattle,LA,NY");
    const [teststate,setTestState] = useState("");
    console.log("Location is ", location);
    console.log("changes in state - ",teststate);
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={e => setLocation(e.target.value)} value={location} placeholder = "Location"/>
                </label>
                <button>Please Submit</button>
            </form>

            <form>
                <label>
                    test
                    <input id="test" onChange={e => setTestState(e.target.value)} value={teststate} placeholder="enter the props"/>
                    <button>submit</button>
                </label>
            </form>
        </div>
    )
}




export default SearchParams;