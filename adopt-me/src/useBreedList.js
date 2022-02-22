// custom hooks

import { useState, useEffect } from "react";


export default function userBreedList(animal){
    const[breedList,setBreedList] = useState([]);
    const[status,setStatus] = useState('unloaded');


    // adding useEffect

    useEffect( () => {
        if(!animal){
            setBreedList([]);
        }else if (localcache[animal]){
            setBreedList(localcache[animal]);
        }else {
            reqBreedList(animal);
        }
        async function reqBreedList() {
            setBreedList([]);
            setStatus('loading');
    
            const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
            
            const json = await res.json();
            console.log("test on custom hooks",json.breeds);   
    
            localcache[animal] = json.breeds || [];
            setBreedList(localcache[animal]);
            setStatus('loaded')
            
    
        }
    },[animal])

    return [breedList,status]
}
const localcache = {};

