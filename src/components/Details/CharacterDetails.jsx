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
      function fixCharacters() {
        if(props.character.name==='Lima') {
          console.log('we need to fix this image')
          props.character.img = 'https://static.wikia.nocookie.net/shingekinokyojin/images/4/42/Marlene_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
        } else if (props.character.name==='Muller'){
          props.character.img ='https://static.wikia.nocookie.net/shingekinokyojin/images/2/2e/M%C3%BCller_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
        } else if (props.character.name ==='Alois Tybur'||props.character.name ==='Bruno Tybur'||props.character.name ==='Rico Tybur'||props.character.name ==='Marie Dawk') {
          props.character.img ='https://static.wikia.nocookie.net/shingekinokyojin/images/8/80/Anonymous.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
        } else if (props.character.name ==='Florian Reiss') {
          props.character.img ='https://static.wikia.nocookie.net/shingekinokyojin/images/6/67/Florian_Reiss_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322020257'
        }
      }
      fixCharacters();
      
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