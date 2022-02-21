
import { useState } from "react"
// declaring a component
const TestParams = () => {
    // adding the hook
    const[userstate,SetUserstate] = useState("User-Blockchain")
    console.log("user - ",userstate);
    return (
        <div>
            <label htmlFor="userstate">
            <h1> rubber stamp</h1>
        <input id="testing" onChange={e => SetUserstate(e.target.value)} value={userstate} placeholder="testing rubber stamp"/> 
        </label>

    </div>

    )

}



export default TestParams;