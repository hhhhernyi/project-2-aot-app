import { useState, useEffect } from "react"
import { useParams } from "react-router"
import AOTservice from "../services/AOTservice"
import EpisodeDetails from "../components/Details/EpisodeDetails"

export default function OneEpisodePage( ) {
    const [episode, setEpisode]=useState([])
    const {episodesId} = useParams()

    useEffect(()=> {
            const getData = async () => {
                const data = await AOTservice.showEpisode(episodesId)
                setEpisode(data);
            };
            getData();
        },[episodesId])
    return (
        <>
        <EpisodeDetails episode={episode}/>
        </>
    )
}