import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function FavCharacters(props) {
    console.log(props.favouriteCharacters)
    return (
        <>
        <div className={props.className}>
        <h2>Fav Characters</h2>
<div className="cardComponent">
        
        {props.favouriteCharacters.map((item) => (
          
          <Link key={item.fields.characterID} to={`/characters/${item.fields.characterID}`}>
            <Cards name={item.fields.characterName} img='https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg' />
          </Link>
        ))}
      </div>
      
        </div>
        
        </>
    )
}

