// create a carousel component with bootstrap which
// will be used on the homepage and shows different cards
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-bootstrap";
import Card from "../components/Card";
import { items } from "../items";

export default function CarouselComponent(props) {
  let indices = Array.from(Array(items.length).keys());
  let x = indices.pop(Math.floor(Math.random() * indices.length));
  let y = indices.pop(Math.floor(Math.random() * indices.length));
  let z = indices.pop(Math.floor(Math.random() * indices.length));

  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <Card item={items[x]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card item={items[y]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card item={items[z]} addToCart={props.addToCart}></Card>
      </Carousel.Item>
    </Carousel>
  );
}
