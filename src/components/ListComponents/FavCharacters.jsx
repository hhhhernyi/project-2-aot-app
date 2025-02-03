import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function FavCharacters(props) {
    return (
        <>
        <div className={props.className}>
          <h2>Fav Characters</h2>
            <div className="cardComponent">
              {props.favouriteCharacters.map((item) => (
                <div key={item.fields.characterID} className='favCharactersCard'>
                  <Link  to={`/characters/${item.fields.characterID}`}>
                    <Cards name={item.fields.characterName} img={item.fields.characterURL.slice(0,-58)} />
                  </Link>
                  
                </div>
              ))}
            </div>
        </div>
        </>
    )
}

