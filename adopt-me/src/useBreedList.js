import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
        // if no animal provided then no breed list
      setBreedList([]);
    } else if (localCache[animal]) {
        // copying it to local cache
      setBreedList(localCache[animal]);
    } else {
        // requesting breed list
        // go to the API and go get it.
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      console.log("resp from API",res);
      const json = await res.json();
      // saving the results to the future
      // incase if the user comes back and request for it
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}