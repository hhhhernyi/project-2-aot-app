import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import LocationsList from "../components/ListComponents/LocationsList";
import PageButton from "../components/Pagination/Pagination";

export default function AllLocations() {
    //set default state for locations
  const [locations, setLocations] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  //functions
  function increasePageNumber() {
    console.log('increase page number function run')
    setPageNumber(pageNumber+1);
  }
  function decreasePageNumber() {
    console.log('decrease page number function run')
    setPageNumber(pageNumber-1);
  }


  // load the location data when /location page is loaded
  useEffect(() => {
    const getData = async () => {
      const locationsData = await AOTservice.getLocations();
      setLocations(locationsData.results);
      setNextPage(locationsData.info.next_page)
      setPrevPage(locationsData.info.prev_page)
      setTotalPages(locationsData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <LocationsList locations={locations} nextPage={nextPage} prevPage={prevPage} />
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  );
}
