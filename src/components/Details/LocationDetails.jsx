import { useState, useEffect } from "react";
export default function LocationDetails(props) {
  const [image, setImage] = useState('');
  const [episodeNumber, setEpisodeNumber] = useState('')
  useEffect(()=>{
        const getData = async () => {
          const locationDebut = await props.location.debut.slice(42)
          const locationImage = await props.location.img.slice(0,-58);
          setEpisodeNumber(locationDebut)
          setImage(locationImage)
        };
        getData()
      },[props]) 
    console.log(props)
    return (
      <>
      <img src={image} className="episodeDetail"/>
        <h3>{props.location.name}</h3>
        <p>Territory: {props.location.territory}</p>
        <p>Region: {props.location.region}</p>
        <p>Anime Debut: Episode {episodeNumber}</p>
  
        
      </>
    );
  }