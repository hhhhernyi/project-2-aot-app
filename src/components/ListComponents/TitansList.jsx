<<<<<<< HEAD
import { Link } from "react-router"

export default function TitansList({titans}) {
    //console.log('sample: ', sample);
    console.log('titnas props: ', titans)

    function handleClick() {
        console.log('clicked!')
        console.log(titans);
    }

    
    return (
        
        <>
        <p>character list component</p>
        <button onClick={handleClick}>click</button>
        <ul>
            {titans.map((item)=>(
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

export default function TitansList({ titans }) {
  console.log("titans props: ", titans);

  return (
    <>
      <h2>All Titans</h2>
      <div className="listItems">
        {titans.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
>>>>>>> work
