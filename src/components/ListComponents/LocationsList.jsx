import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function LocationsList({ locations }) {
  console.log("locations props: ", locations);

  return (
    <>
      <h2>All Locations</h2>
      <div className="cardComponent">
        {locations.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
