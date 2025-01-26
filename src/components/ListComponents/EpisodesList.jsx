<<<<<<< HEAD
import { Link } from "react-router"

export default function EpisodesList({episodes}) {
    //console.log('sample: ', sample);
    console.log('episodes props: ', episodes)

    function handleClick() {
        console.log('clicked!')
        console.log(episodes);
    }

    
    return (
        
        <>
        <p>character list component</p>
        <button onClick={handleClick}>click</button>
        <ul>
            {episodes.map((item)=>(
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

export default function EpisodesList({ episodes }) {
  console.log("episodes props: ", episodes);

  return (
    <>
      <h2>All Episodes</h2>
      <div className="listItems">
        {episodes.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
>>>>>>> work
