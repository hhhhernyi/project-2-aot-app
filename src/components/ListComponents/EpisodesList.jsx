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