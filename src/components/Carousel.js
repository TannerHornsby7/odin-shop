// create a carousel component with bootstrap which
// will be used on the homepage and shows different cards
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-bootstrap";
import Card from "../components/Card";
import { items } from "../items";

export default function CarouselComponent(props) {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <Card item={items[0]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card item={items[1]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card item={items[2]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
    </Carousel>
  );
}
