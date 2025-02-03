import { useState, useEffect } from "react";

export default function OrganizationDetails(props) {
      const [image, setImage] = useState('');
      const [episodeNumber, setEpisodeNumber] = useState('')
      useEffect(()=>{
            const getData = async () => {
              const locationDebut = await props.organizations.debut.slice(42)
              const locationImage = await props.organizations.img.slice(0,-58);
              setEpisodeNumber(locationDebut)
              setImage(locationImage)
            };
            getData()
          },[props]) 
    return (
      <>
      <img src={image} className="organizationDetail"/>
        <h3>{props.organizations.name}</h3>
        <p>Affliation: {props.organizations.affiliation}</p>
        <p>Anime Debut: Episode {episodeNumber}</p>
      </>
    );
  }