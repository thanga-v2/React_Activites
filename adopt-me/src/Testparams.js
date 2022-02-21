
import { useState } from "react"
// declaring a component
const TestParams = () => {
    // adding the hook
    const[userstate,SetUserstate] = useState("User-Blockchain")
    const[testStata,setTestState] = useState("test")
    console.log("user - ",userstate);
    console.log("second state -",testStata);
    return (
        <div>
            <label htmlFor="userstate">
            <h1> rubber stamp</h1>
        <input id="testing" onChange={e => SetUserstate(e.target.value)} value={userstate} placeholder="testing rubber stamp"/> 
        <input id="testing now" value={testStata} onChange={e => setTestState(e.target.value)}/>
        </label>

    </div>

    )

}



export default TestParams;