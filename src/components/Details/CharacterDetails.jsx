import { useEffect, useState } from "react";
import AOTservice from "../../services/AOTservice";
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router";


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
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

// functions
     function handleClickFavourites() {
        setAddFavCharacter({
            "fields": {
              "characterID": props.character.id,
              "characterName": props.character.name,
              "characterURL": props.character.img,
            }
          })
          setShow(true) // this is to show the toast component
          setTimeout(() => {
            navigate('/characters')
          }, 2000);
          

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
   
    return (
      <>
      <img src={img} className="characterDetail"/>
        <h1 >{props.character.name}</h1>
        <button onClick={handleClickFavourites}>Add to favourites</button>
        <div >
          <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
            <Toast.Body>Character added to favourites!</Toast.Body>
          </Toast>
        </div>

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