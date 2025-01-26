import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function TitansList({ titans }) {
  console.log("titans props: ", titans);

  return (
    <>
      <h2>All Titans</h2>
      <div className="cardComponent">
        {titans.map((item) => (
          <Link key={item.id} to={`/titans/${item.id}`}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
