import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import CharacterList from "../components/ListComponents/CharacterList";
<<<<<<< HEAD
import SearchBar from "../components/SearchBar/SearchBar";
=======
import SearchBar from "../components/SearchBar";
>>>>>>> work

export default function AllCharactersPage() {
  //set a default state for characters
  const [characters, setCharacters] = useState([]);

  // load the character data on loading the /characters page
  useEffect(() => {
    const getData = async () => {
      const charactersData = await AOTservice.getCharacters();
      setCharacters(charactersData.results);
    };
    getData();
  }, []);

  return (
    <>
<<<<<<< HEAD
      <h2>All characters</h2>
=======
>>>>>>> work
      <SearchBar />
      <CharacterList characters={characters} />
    </>
  );
}
