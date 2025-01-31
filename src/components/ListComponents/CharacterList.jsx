import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function CharacterList({ className, characters }) {

  console.log('characters: ',characters)


  return (
    <>
      <div className={className}>
        <h2>All Characters</h2>
        <div className="cardComponent">
          {characters.map((item) => (
            <Link key={item.id} to={`/characters/${item.id}`}>
              <Cards name={item.name} img={item.img.slice(0,-58)} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
