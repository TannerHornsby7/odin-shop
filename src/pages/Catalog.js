// create a catalog that displays all the items in the store in a grid
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Catalog.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Catalog(props) {
  return (
    <div className="catalog-body">
      <h2>Catalog</h2>
      <div className="container">BANANA</div>
    </div>
  );
}
