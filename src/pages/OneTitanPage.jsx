import { useEffect, useState } from "react"
import { useParams } from "react-router"
import AOTservice from "../services/AOTservice"
import TitanDetails from "../components/Details/TitanDetails"

export default function OneTitanPage( ) {
    const [titan, setTitan]=useState([])
    const {titansId} = useParams()

    useEffect(()=> {
        const getData = async () => {
            const data = await AOTservice.showTitan(titansId)
            setTitan(data);
        };
        getData();
    },[titansId])

    return (
        <>
        <TitanDetails titan={titan} />
        </>
    )
}