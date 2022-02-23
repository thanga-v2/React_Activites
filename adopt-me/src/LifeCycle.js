// Lifecycle of Hooks

import { useEffect, useState } from "react"

const Lifecycle = () => {

    const [name,setName] = useState("Thanga");
    console.log("name while starting - ",name);
    useEffect ( () => {
        console.log("name inside use effect",name);
        requesttest()
    })

    function requesttest () {
        console.log("name in asynch - ",name);
        setName("vidhya")
    }

    return(
        <div>
            life - cycle             
        </div>
    )
}

export default Lifecycle;