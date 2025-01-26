<<<<<<< HEAD
import { Link } from "react-router"

export default function LocationsList({ locations}) {
    //console.log('sample: ', sample);
    console.log('locations props: ', locations)

    function handleClick() {
        console.log('clicked!')
        console.log(locations);
    }

    
    return (
        
        <>
        <p>character list component</p>
        <button onClick={handleClick}>click</button>
        <ul>
            {locations.map((item)=>(
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

export default function LocationsList({ locations }) {
  console.log("locations props: ", locations);

  return (
    <>
      <h2>All Locations</h2>
      <div className="listItems">
        {locations.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
>>>>>>> work
