// create basic item card for catalog
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Card.css";

export default function Card(props) {
  console.log("loggging props" + props);
  let { name, link, alt, description } = props.item;
  return (
    <div className="card">
      <h5 className="card-title">{name}</h5>
      <img src={link} alt={alt} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <button
          id="addtocartbtn"
          onClick={() => {
            props.addToCart(props.item);
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}