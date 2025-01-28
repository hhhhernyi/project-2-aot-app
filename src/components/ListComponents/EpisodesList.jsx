import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function EpisodesList({ episodes }) {
  console.log("episodes props: ", episodes);

  return (
    <>
      <h2>All Episodes</h2>
      <div className="cardComponent">
        {episodes.map((item) => (
          <Link
            key={item.id}
            to={`/episodes/${item.id}`}
            className="episodeNumber"
          >
            <div className="episodeList">
              <p>Episode: {item.id}</p>
              <Cards
                name={item.name}
                img={item.img.slice(0, -58)}
                episode={item.id}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
