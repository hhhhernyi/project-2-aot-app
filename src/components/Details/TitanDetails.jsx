export default function TitanDetails(props) {
    console.log(props)
    return (
      <>
        <h3>{props.titan.name}</h3>
        <p>height: {props.titan.height}</p>
        <p>abilities:
            {props.titan.abilities}
        </p>
  
        
      </>
    );
  }