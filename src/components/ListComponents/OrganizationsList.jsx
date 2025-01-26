<<<<<<< HEAD
import { Link } from "react-router"

export default function OrganizationsList({organizations}) {
    //console.log('sample: ', sample);
    console.log('organizations props: ', organizations)

    function handleClick() {
        console.log('clicked!')
        console.log(organizations);
    }

    
    return (
        
        <>
        <p>character list component</p>
        <button onClick={handleClick}>click</button>
        <ul>
            {organizations.map((item)=>(
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

export default function OrganizationsList({ organizations }) {
  console.log("organizations props: ", organizations);

  return (
    <>
      <h2>All Organizations</h2>
      <div className="listItems">
        {organizations.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
>>>>>>> work
