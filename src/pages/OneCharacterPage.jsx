import { useParams } from "react-router"

export default function OneCharacterPage( ) {
    const {charactersId} = useParams();
    console.log(charactersId);
    return (
        <>
        <p> one character</p>
        </>
    )
}