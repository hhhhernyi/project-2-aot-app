import AOTservice from "../services/AOTservice";
import { useState, useEffect } from "react";
import CharacterList from "../components/ListComponents/CharacterList";
import SearchBar from "../components/SearchBar/SearchBar";

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
      <h2>All characters</h2>
      <SearchBar />
      <CharacterList characters={characters} />
    </>
  );
}
