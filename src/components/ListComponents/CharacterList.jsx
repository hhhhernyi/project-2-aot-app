<<<<<<< HEAD
import { Link } from "react-router"

export default function CharacterList({characters}) {
    //console.log('sample: ', sample);
    console.log('character props: ', characters)

    function handleClick() {
        console.log('clicked!')
        console.log(characters);
    }

    
    return (
        
        <>
        <p>character list component</p>
        <button onClick={handleClick}>click</button>
        <ul>
            {characters.map((item)=>(
                <li key={item.id}>
                    <Link>{item.name}</Link>
                    <button>Favourite</button>
                    </li>
                
            ))}
        </ul>

        </>
    )
}
=======
import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function CharacterList({ characters }) {
  console.log("character props: ", characters);

  return (
    <>
      <h2>All Characters</h2>
      <div className="listItems">
        {characters.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
>>>>>>> work
