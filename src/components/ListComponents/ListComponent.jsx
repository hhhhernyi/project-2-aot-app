import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function ListComponents(props) {  return (
    <>
      <div className={props.className}>
        <h2>All {props.name}</h2>
        <div className="cardComponent">
          {props.data.map((item) => (
            <Link key={item.id} to={`/${props.name}/${item.id}`}>
              <Cards name={item.name} img={item.img.slice(0,-58)} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}