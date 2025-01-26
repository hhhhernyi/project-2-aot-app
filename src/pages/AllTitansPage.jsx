import { useState, useEffect } from "react";
import AOTservice from "../services/AOTservice";
import TitansList from "../components/ListComponents/TitansList";

export default function AllTitansPage() {
    //set a default state for titans
    const [titans, setTitans] = useState([]);

    // load the titans data on loading the /titans page
    useEffect(()=>{
        const getData = async() => {
            const titansData = await AOTservice.getTitans();
            setTitans(titansData.results)
        };
        getData();
      },[]);
    

return (
        <>
<<<<<<< HEAD
        <p>all titans showed here</p>
        <TitansList titans={titans}/>

=======
        <TitansList titans={titans}/>
>>>>>>> work
        </>
    )
}