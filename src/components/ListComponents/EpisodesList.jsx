import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function EpisodesList({ episodes }) {
  console.log("episodes props: ", episodes);

  return (
    <>
      <h2>All Episodes</h2>
      <div className="cardComponent">
        {episodes.map((item) => (
          <Link key={item.id}>
            <Cards name={item.name} img={item.img} />
          </Link>
        ))}
      </div>
    </>
  );
}
