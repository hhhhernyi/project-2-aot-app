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
    const [showAddtoFav, setShowAddtoFav] = useState(false);
    const [showRemoveFromFav, setShowRemoveFromFav] = useState(false);
    const [showAlreadyInFav, setShowAlreadyInFav] = useState(false)
    const [showNotInFav, setShowNotInfav] = useState(false)
    const [favCharacterData, setFavCharacterData] = useState([])
    const navigate = useNavigate()
    // check if the character is already in the fav list or not based on their ID
    let isCharacterInFavList = favCharacterData.some((item)=>(
        item.fields.characterID === props.character.id
      ))
// functions
     function handleClickFavourites() {
     if (isCharacterInFavList === true) {
      setShowAlreadyInFav(true)
     } else {
        setAddFavCharacter({
            "fields": {
              "characterID": props.character.id,
              "characterName": props.character.name,
              "characterURL": props.character.img,
            }
          })
          setShowAddtoFav(true) // this is to show the toast component for add to favs
          setTimeout(() => {
            navigate('/characters')
          }, 2000);
        }
      }
      function handleClickRemoveFromFav() {
        if (isCharacterInFavList===false) {
          setShowNotInfav(true)
        } else {
          let toRemove=''
          // check through the state of airtable records, if the character name matches the one we choose, get the ID of the record and pass into the delete records function
           for (let i=0; i< favCharacterData.length; i++) {
            if (favCharacterData[i].fields.characterName === props.character.name ) {
              toRemove=favCharacterData[i].id;
            }
           }
           AOTservice.delFavCharacters(toRemove)
          setShowRemoveFromFav(true) // this is to show the toast component for remove from favs
          setTimeout(() => {
            navigate('/characters')
          }, 2000);
        }
      }
      // this function is to fix the characters who have broken/no images
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

        useEffect(() => {
          const getData = async () => {
            const favCharacterData = await AOTservice.getFavCharacters();
            setFavCharacterData(favCharacterData.records)
          };
          getData();
        }, []);
      
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
      <div className="singleCharacterPage">
      <img src={img} className="characterDetail"/>
        <h1 >{props.character.name}</h1>
        <div className="characterDetailsButtonDiv">
          <button onClick={handleClickFavourites} className="characterDetailsButton">Add to favourites</button>
          <button onClick={handleClickRemoveFromFav} className="characterDetailsButton">Remove From Favourites</button>
        </div>
        
        
        <div className="toastMessage">
          <Toast onClose={() => setShowAddtoFav(false)} show={showAddtoFav} delay={1500} autohide>
            <Toast.Body>Character added to favourites!</Toast.Body>
          </Toast>

          <Toast onClose={() => setShowRemoveFromFav(false)} show={showRemoveFromFav} delay={1500} autohide>
            <Toast.Body>Character removed from favourites!</Toast.Body>
          </Toast>

          <Toast onClose={() => setShowAlreadyInFav(false)} show={showAlreadyInFav} delay={1500} autohide>
            <Toast.Body>Character is already in favourites list!</Toast.Body>
          </Toast>

          <Toast onClose={() => setShowNotInfav(false)} show={showNotInFav} delay={1500} autohide>
            <Toast.Body>Character is not in favourites list!</Toast.Body>
          </Toast>
        </div>

      
        
        <div>
        <p className="characterDetail"><b>Gender:</b> {props.character.gender}</p>
        <p className="characterDetail"><b>Age:</b> {props.character.age}</p>
        <p className="characterDetail"><b>Height:</b> {props.character.height}</p>
        <p className="characterDetail"><b>Birthplace:</b> {props.character.birthplace}</p>
        <p className="characterDetail"><b>Occupation:</b> {props.character.occupation}</p>
        <p className="characterDetail"><b>Residence:</b> {props.character.residence}</p>
        <p className="characterDetail"><b>Alias:</b> {props.character.alias}</p>
        <p className="characterDetail"><b>Status:</b> {props.character.status}</p>
        </div>

      </div>
      
        
        
  
        
      </>
    );
  }