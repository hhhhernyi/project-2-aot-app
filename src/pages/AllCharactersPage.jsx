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
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber}/>
    </>
  );
}
