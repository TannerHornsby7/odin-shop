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

/*

Example:

<div className="card">
    <img
        src="https://images-na.ssl-images-amazon.com/images/I/81j%2B9I9N8qL._AC_SL1500_.jpg"
        alt="diamond pickaxe"
        className="card-img-top"
    />
    <div className="card-body">
        <h5 className="card-title">Diamond Pickaxe</h5>
        <p className="card-text">
        The best-selling Minecraft item of all time! This item is a
        must-have for any Minecraft player. It's the perfect gift for
        any occasion.
        </p>
        <Link to="/cart" className="btn btn-primary">
        Add to Cart
        </Link>
    </div>
</div>
*/
