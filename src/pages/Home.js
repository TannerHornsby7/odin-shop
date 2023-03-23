// create a basic react homepage with a link to the about page
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import CarouselComponent from "../components/Carousel";

export default function Home(props) {
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
            addCardItem={props.addCardItem}
          ></Card>
        </div>
      </div>
      <div className="browse">
        <h4>Browse our catalog</h4>
        <CarouselComponent></CarouselComponent>
        <Link to="/catalog" className="btn btn-secondary">
          Explore Our Chest!
        </Link>
      </div>
    </div>
  );
}