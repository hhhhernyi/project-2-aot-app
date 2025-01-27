import { useEffect, useState } from "react";

export default function TitanDetails(props) {
    console.log(props)
    const [abilities, setAbilities] = useState([]);
    const [image, setImage] = useState('');

    useEffect(()=>{
      const getData = async () => {
        const titanAbilities = await props.titan.abilities
        const titanImage = await props.titan.img.slice(0,-58);
        setAbilities(titanAbilities);
        setImage(titanImage)
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