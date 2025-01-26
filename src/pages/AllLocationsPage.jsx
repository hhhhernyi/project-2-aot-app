import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import LocationsList from "../components/ListComponents/LocationsList";

export default function AllLocations() {
    //set default state for locations
  const [locations, setLocations] = useState([]);

  // load the location data when /location page is loaded
  useEffect(() => {
    const getData = async () => {
      const locationsData = await AOTservice.getLocations();
      setLocations(locationsData.results);
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <LocationsList locations={locations} />
    </>
  );
}
