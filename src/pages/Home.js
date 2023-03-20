// create a basic react homepage with a link to the about page
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="body">
      <h2>Home</h2>
      <div className="hero">
        <div className="hero-overlay">
          <h4>Featured Item</h4>
          <Card
            name="Diamond Sword"
            link="https://assets.stickpng.com/images/580b57fcd9996e24bc43c301.png"
            alt="diamond pickaxe"
            description="The best-selling Minecraft item of all time! This item is a must-have for any Minecraft player. It is the perfect gift for any occasion."
            addCardItem={() => {
              alert("Added to cart!");
            }}
          ></Card>
        </div>
      </div>
    </div>
  );
}
/*

<p>
            The best-selling Minecraft item of all time! This item is a
            must-have for any Minecraft player. It's the perfect gift for any
            occasion.
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Shop Now
          </Link>


<img
        src="https://images-na.ssl-images-amazon.com/images/I/81j%2B9I9N8qL._AC_SL1500_.jpg"
        alt="diamond pickaxe"
        className="card-img-top"
    />
    <div className="card-body">
        <h5 className="card-title">Diamond Sword</h5>
        <p className="card-text">
        The best-selling Minecraft item of all time! This item is a
        must-have for any Minecraft player. It's the perfect gift for
        any occasion.
        </p>
        <Link to="/cart" className="btn btn-primary">
        Add to Cart
        </Link>
    </div>

    */
