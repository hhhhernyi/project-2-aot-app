import { useState, useEffect } from "react"
import { useParams } from "react-router"
import AOTservice from "../services/AOTservice"
import LocationDetails from "../components/Details/LocationDetails"

export default function OneLocationPage( ) {
    const [location, setLocation]=useState([])
        const {locationsId} = useParams()
    
        useEffect(()=> {
                const getData = async () => {
                    const data = await AOTservice.showLocation(locationsId)
                    setLocation(data);
                };
                getData();
            },[locationsId])
    return (
        <>
        <LocationDetails location={location}/>
        </>
    )
}