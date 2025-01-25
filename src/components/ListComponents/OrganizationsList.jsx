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