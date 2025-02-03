import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import PageButton from "../components/Pagination/Pagination";
import AllCharactersPageNavBar from "../components/NavBar/AllCharacterPageNavBar";
import FavCharacters from "../components/ListComponents/FavCharacters";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import ListComponents from "../components/ListComponents/ListComponent";


export default function AllCharactersPage() {
  //set a default state for characters
  const [characters, setCharacters] = useState([]);
  const [favouriteCharacters, setFavouriteCharacters] = useState([])
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [AllCharacterVisible, setAllCharacterVisible] = useState(true)
  const [FavCharacterVisible, setFavCharacterVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  // async functions
  async function getNextData() {
    const url = nextPage
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
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
  }
 async function searchFunction(search) {
    // this function need to run a fetch and update with the query
    const searchResults = await AOTservice.searchCharacters(search);
    setCharacters(searchResults.results);
  }

  //functions
  function increasePageNumber() {
    setPageNumber(pageNumber+1);
  }
  function decreasePageNumber() {
    setPageNumber(pageNumber-1);
  }
  function showAllCharacters() {
    setAllCharacterVisible(true);
    setFavCharacterVisible(false);
  }
  function showFavCharacters() {
    setAllCharacterVisible(false);
    setFavCharacterVisible(true);
  }
  function reset() {
    setPageNumber(1)
  }
  function fixAllImages() {
    for (let i=0; i<characters.length; i++) {
      if (characters[i].name==="Lima"){
        characters[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/4/42/Marlene_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      } else if (characters[i].name==='Muller') {
        characters[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/2/2e/M%C3%BCller_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      } else if (characters[i].name==='Alois Tybur'||characters[i].name==='Bruno Tybur'||characters[i].name==='Rico Tybur'||characters[i].name==='Marie Dawk') {
        characters[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/8/80/Anonymous.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      } else if (characters[i].name==='Florian Reiss') {
        characters[i].img='https://static.wikia.nocookie.net/shingekinokyojin/images/6/67/Florian_Reiss_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
      }
    }
    
  }
  fixAllImages();
  // load the character data on loading the /characters page
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const charactersData = await AOTservice.getCharacters();
      const favCharacterData = await AOTservice.getFavCharacters();
      setCharacters(charactersData.results);
      setFavouriteCharacters(favCharacterData.records)
      setNextPage(charactersData.info.next_page)
      setPrevPage(charactersData.info.prev_page)
      setTotalPages(charactersData.info.pages)
      setIsLoading(false)
    };
    getData();
  }, []);

  return (
    <>
      <SearchBar searchFunction={searchFunction} reset={reset}/>
      <AllCharactersPageNavBar showAllCharacters={showAllCharacters} showFavCharacters={showFavCharacters}/>
      {isLoading? <LoadingAnimation/>:null}
      <ListComponents data={characters} name='characters' nextPage={nextPage} prevPage={prevPage} className={AllCharacterVisible? 'show': 'hide'}/>
      <FavCharacters favouriteCharacters={favouriteCharacters} className={FavCharacterVisible? 'show': 'hide'}/>
      <PageButton pageNumber={pageNumber} totalPages={totalPages} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} getNext={getNext} getPrev={getPrev}/>
    </>
  );
}
