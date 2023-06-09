// create basic item card for catalog
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CheckCard.css";
import emerald from "../assets/emerald.png";
import dele from "../assets/delete.png";

export default function Card(props) {
  console.log("loggging props" + props);
  let { name, link, alt, price, cquantity, description } = props.item;
  return (
    <div className="checkcard">
      <h5 className="card-text-price">
      <img alt='emeralds' src={emerald} className='emerald'></img>
      {price}</h5>
      <img src={link} alt={alt} className="card-img-top" />
      <h5 className="card-title">{name}</h5>
      <p className="card-text"> </p>
      <div className="q-mod">
        <button onClick={() => props.add(props.item)} className="btn btn-secondary">
          +
        </button>
        <h5 className="card-title">{cquantity}</h5>
        <button onClick={() => props.remove(props.item)} className="btn btn-secondary">
          -
        </button>
      </div>
    </div>
  );
}