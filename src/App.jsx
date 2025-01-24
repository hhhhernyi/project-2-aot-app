// src/App.jsx
import { useState, useEffect } from "react";
import {getCharacters,getEpisodes,getLocations,getOrganizations,getTitans} from "./services/AOTservice";

const App = () => {
  const [characters, setCharacters] = useState({})
  const [episodes, setEpisodes] = useState([])
  const [locations, setLocations] = useState([])
  const [organizations, setOrganization] = useState([])
  const [titans, setTitans] = useState([])

    useEffect(()=>{
        const getData = async() => {
            const charactersData = await getCharacters();
            setCharacters(charactersData)
        };
        getData();
    },[]);

    useEffect(()=>{
      const getData = async() => {
          const episodesData = await getEpisodes();
          setEpisodes(episodesData)
      };
      getData();
  },[]);

  useEffect(()=>{
    const getData = async() => {
        const locationsData = await getLocations();
        setLocations(locationsData)
    };
    getData();
},[]);

useEffect(()=>{
  const getData = async() => {
      const organizationData = await getOrganizations();
      setOrganization(organizationData)
  };
  getData();
},[]);

useEffect(()=>{
  const getData = async() => {
      const titansData = await getTitans();
      setTitans(titansData)
  };
  getData();
},[]);

  return <h1>Hello world!</h1>;
};

export default App;
