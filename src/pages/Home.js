// create a basic react homepage with a link to the about page
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CarouselComponent from "../components/Carousel";
import { items } from "../items";

export default function Home(props) {
  return (
    <div className="body">
      <h2>Home</h2>
      <div className="hero">
        <div className="hero-overlay">
          <h4>Featured Item</h4>
          <Card item={items[Math.floor(Math.random() * items.length)]} addToCart={props.addToCart}></Card>
        </div>
      </div>
      <div className="browse">
        <h4>Browse our catalog</h4>
        <CarouselComponent addToCart={props.addToCart}></CarouselComponent>
        <Link to="/catalog" className="btn btn-secondary">
          Explore Our Chest!
        </Link>
      </div>
    </div>
  );
}