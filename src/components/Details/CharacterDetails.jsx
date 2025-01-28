import { useEffect, useState } from "react";
import AOTservice from "../../services/AOTservice";


export default function CharacterDetails(props) {
    const [addFavCharacter, setAddFavCharacter] = useState(
      {
        "fields": {
          "characterID": '',
          "characterName": "",
          "characterURL": ""
        }
      }
    )
// functions
     function handleClickFavourites() {
        console.log('added to fav! character ID is: ', props.character.id)
        console.log('added to fav! character Name is: ', props.character.name)
        console.log('added to fav! character image url is: ', props.character.img)
        setAddFavCharacter(
          {
            "fields": {
              "characterID": props.character.id,
              "characterName": props.character.name,
              "characterURL": props.character.img,
            }
          }
        )
      }
      
      useEffect(()=>{
        async function postData () {
          await AOTservice.addFavCharacters(addFavCharacter);
        };
        postData();
      },[addFavCharacter])
   
    let img = ''
    async function getImg() {
        img = props.character.img.slice(0,-58);
        return img;
    }
    getImg();
    //console.log(props)
    return (
      <>
      <img src={img} className="characterDetail"/>
        <h1 >{props.character.name}</h1>
        <button onClick={handleClickFavourites}>Add to favourites</button>
        <div>
        <p className="characterDetail">Gender: {props.character.gender}</p>
        <p className="characterDetail">Age: {props.character.age}</p>
        <p className="characterDetail">Height: {props.character.height}</p>
        <p className="characterDetail">Birthplace: {props.character.birthplace}</p>
        <p className="characterDetail">Occupation: {props.character.occupation}</p>
        <p className="characterDetail">Residence: {props.character.residence}</p>
        <p className="characterDetail">Alias: {props.character.alias}</p>
        <p className="characterDetail">Status: {props.character.status}</p>
        </div>
        
        
  
        
      </>
    );
  }