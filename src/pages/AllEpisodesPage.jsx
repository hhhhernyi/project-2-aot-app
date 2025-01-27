import EpisodesList from "../components/ListComponents/EpisodesList";
import PageButton from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";

export default function AllEpisodesPage() {
  // set a default state for episodes
  const [episodes, setEpisodes] = useState([]);
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
      setEpisodes(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
  //     await console.log('current data is: ', episodes)
  //   await console.log('get next page of data from: ', nextPage)
   }
  async function getPrevData() {
    const url = prevPage
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
      setEpisodes(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
    //   await console.log('current data is: ', episodes)
    // await console.log('get next page of data from: ', nextPage)
  }
    async function searchFunction(search) {
      console.log('search for: ', search)
      // this function need to run a fetch and update with the query
      const searchResults = await AOTservice.searchEpisodes(search);
      setEpisodes(searchResults.results);
      
  
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
  function reset() {
    setPageNumber(1)
  }
  

  

  //load the episodes data on loading the /episodes page
  useEffect(() => {
    const getData = async () => {
      const episodesData = await AOTservice.getEpisodes();
      setEpisodes(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar searchFunction={searchFunction} reset={reset}/>
      <EpisodesList episodes={episodes} nextPage={nextPage} prevPage={prevPage}/>
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} getNext={getNext} getPrev={getPrev}/>
    </>
  );
}
