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