import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import CharacterList from "../components/ListComponents/CharacterList";
import SearchBar from "../components/SearchBar/SearchBar";
import PageButton from "../components/Pagination/Pagination";

export default function AllCharactersPage() {
  //set a default state for characters
  const [characters, setCharacters] = useState([]);
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
    setCharacters(episodesData.results);
      setNextPage(episodesData.info.next_page)
      setPrevPage(episodesData.info.prev_page)
      setTotalPages(episodesData.info.pages)
    //   await console.log('current data is: ', episodes)
    // await console.log('get next page of data from: ', nextPage)
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
    setCharacters(episodesData.results);
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

  // load the character data on loading the /characters page
  useEffect(() => {
    const getData = async () => {
      const charactersData = await AOTservice.getCharacters();
      setCharacters(charactersData.results);
      setNextPage(charactersData.info.next_page)
      setPrevPage(charactersData.info.prev_page)
      setTotalPages(charactersData.info.pages)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar />
      <CharacterList characters={characters} nextPage={nextPage} prevPage={prevPage}/>
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} getNext={getNext} getPrev={getPrev}/>
    </>
  );
}
