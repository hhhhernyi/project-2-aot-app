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
  // async functions
  async function getNextData() {
    const url = nextPage
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getNext() {
    const episodesData = await getNextData();
    setLocations(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
  //     await console.log('current data is: ', episodes)
  //   await console.log('get next page of data from: ', nextPage)
   }
   // i need to hardcode this url as the API does not display the correct data for this particular instance
  async function getPrevData() {
    const url = 'https://api.attackontitanapi.com/locations'
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      //console.log(json);
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }
  async function getPrev() {
    const episodesData = await getPrevData();
    setLocations(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
    //   await console.log('current data is: ', episodes)
    // await console.log('get next page of data from: ', nextPage)
  }

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
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} getNext={getNext} getPrev={getPrev}/>
    </>
  );
}
