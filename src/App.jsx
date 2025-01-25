// src/App.jsx
import { useState, useEffect } from "react";
import AOTservice from "./services/AOTservice";
import NavBar from "./components/NavBar/NavBar";
//import NavBarSmall from "./components/NavBar/NavBarSmall";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from "react-router";
import AllCharactersPage from "./pages/AllCharactersPage";
import AllEpisodesPage from "./pages/AllEpisodesPage";
import AllTitansPage from "./pages/AllTitansPage";
import logo from './assets/images/AOT_logo_big.png'
import HomePage from "./pages/HomePage";
import AllLocations from "./pages/AllLocationsPage";
import AllOrganizations from "./pages/AllOrgPage";

const App = () => {
 
  return (
    <>
    <Link to='/home'><img className='logo'src={logo} /></Link>
    <NavBar />
    
    
   
    
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/home' element={<HomePage />} />
      <Route path='/characters' element={<AllCharactersPage/>}/>
      <Route path='/episodes' element={<AllEpisodesPage />}/>
      <Route path='/titans' element={<AllTitansPage />}/>
      <Route path='/locations' element={<AllLocations />}/>
      <Route path='/organizations' element={<AllOrganizations />}/>
    </Routes>
    </>
  );
};

export default App;
