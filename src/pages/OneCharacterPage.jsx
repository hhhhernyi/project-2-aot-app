import { useState, useEffect } from "react"
import { useParams } from "react-router"
import AOTservice from "../services/AOTservice"
import CharacterDetails from "../components/Details/CharacterDetails";

export default function OneCharacterPage( ) {
    const [character, setCharacters] = useState([])
    const {charactersId} = useParams();
    useEffect(()=> {
                const getData = async () => {
                    const data = await AOTservice.showCharacter(charactersId)
                    setCharacters(data);
                };
                getData();
                
            },[charactersId])
    return (
        <>
        <CharacterDetails character={character} charactersId={charactersId}/>
        </>
    )
}