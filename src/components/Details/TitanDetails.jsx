import { useEffect, useState } from "react";

export default function TitanDetails(props) {
    const [abilities, setAbilities] = useState([]);
    const [image, setImage] = useState('');

    useEffect(()=>{
      const getData = async () => {
        let titanImage=''
        const titanAbilities = await props.titan.abilities
        titanImage = await props.titan.img.slice(0,-58);
        setAbilities(titanAbilities);
        if (props.titan.id===4) {
          titanImage='https://static.wikia.nocookie.net/shingekinokyojin/images/b/b4/The_Colossal_Titan_outside_Shiganshina.png'
          setImage(titanImage);
        } else if (props.titan.id===8) {
          titanImage='https://static.wikia.nocookie.net/shingekinokyojin/images/d/da/Jaw_Titan_%28Anime%29_character_image_%28Porco_Galliard%29.png'
          setImage(titanImage);
        } else {
          setImage(titanImage);
        }
      };
      getData()
    },[props]) 

    // passing props into [] makes the code work but i am not sure why
    // previously i just passed props.titan.img.slice(0,-58 ) into the img src but it doesnt render the img
    // so is the case for the abilities, it causes an error when i map straightaway


    return (
      <>
      <img src={image} className="episodeDetail" />
        <h3>{props.titan.name}</h3>
        <p>Height: {props.titan.height}</p>
        <p>Allegiance: {props.titan.allegiance}</p>
        <p>Abilities:
          {abilities.map((item)=>(
            <li key={item}>{item}</li>
          ))}
        </p>
      </>
    );
  }