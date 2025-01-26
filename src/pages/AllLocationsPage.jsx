import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import LocationsList from "../components/ListComponents/LocationsList";

export default function AllLocations() {
    const [locations, setLocations] = useState([])
    
      useEffect(()=>{
        const getData = async() => {
            const locationsData = await AOTservice.getLocations();
            setLocations(locationsData.results)
        };
        getData();
    },[]);

    return (
        <>
        
        <SearchBar />
        <p>All Locations</p>
        <LocationsList locations={locations}/>
        </>
    )
}