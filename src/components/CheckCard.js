// create basic item card for catalog
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CheckCard.css";

export default function Card(props) {
  console.log("loggging props" + props);
  let { name, link, alt, price, cquantity, description } = props.item;
  return (
    <div className="checkcard">
      <h5 className="card-text-price">{price}</h5>
      <img src={link} alt={alt} className="card-img-top" />
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <h5 className="card-title">{cquantity}</h5>
        <button className="btn btn-secondary">
            Delete Item from cart
        </button>
    </div>
  );
}