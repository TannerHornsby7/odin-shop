// create a catalog that displays all the items in the store in a grid
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Catalog.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { items } from "../items";
import links from "../links";

export default function Catalog(props) {
  return (
    <div className="body">
      <h2>Catalog</h2>
      <div className="catalog">
        {items.map((item) => (
          <Card item={item} addToCart={props.addToCart}></Card>
        ))}
      </div>
      <Link to="/" className="btn btn-secondary">
        Back to Home
      </Link>
    </div>
  );
}
