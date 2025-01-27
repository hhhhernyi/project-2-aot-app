import { Link } from "react-router";
import Cards from "../Cards/Cards";

export default function OrganizationsList({ organizations }) {
  console.log("organizations props: ", organizations);

  return (
    <>
      <h2>All Organizations</h2>
      <div className="cardComponent">
        {organizations.map((item) => (
          <Link key={item.id} to={`/organizations/${item.id}`}>
            <Cards name={item.name} img={`${item.img}`} />
          </Link>
        ))}
      </div>
    </>
  );
}
