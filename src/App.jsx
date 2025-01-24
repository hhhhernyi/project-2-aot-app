// src/App.jsx
import { useState, useEffect } from "react";
import {getCharacters,getEpisodes,getLocations,getOrganizations,getTitans} from "./services/AOTservice";
import NavBarBig from "./components/NavBar/NavBarBig";
import NavBarSmall from "./components/NavBar/NavBarSmall";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from "react-router";
import AllCharactersPage from "./pages/AllCharactersPage";
import AllEpisodesPage from "./pages/AllEpisodesPage";
import AllTitansPage from "./pages/AllTitansPage";

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

  return (
    <>
    <p><Link to='/'>Attack on titans database</Link></p>
    <NavBarBig />
    <NavBarSmall />
    
    <Routes>
      <Route path='/characters' element={<AllCharactersPage />}/>
      <Route path='/episodes' element={<AllEpisodesPage />}/>
      <Route path='/titans' element={<AllTitansPage />}/>
    </Routes>
    </>
  );
};

export default App;
