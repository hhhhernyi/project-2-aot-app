import { useState, useEffect } from "react"
import { useParams } from "react-router"
import AOTservice from "../services/AOTservice"
import OrganizationDetails from "../components/Details/OrganizationDetails"

export default function OneOrgnizationPage( ) {
       const [organizations, setOrganizations]=useState([])
        const {organizationsId} = useParams()
    
        useEffect(()=> {
                const getData = async () => {
                    const data = await AOTservice.showOrganization(organizationsId)
                    setOrganizations(data);
                };
                getData();
            },[organizationsId])
    return (
        <>
        <OrganizationDetails organizations={organizations}/>
        </>
    )
}