// create a carousel component with bootstrap which
// will be used on the homepage and shows different cards
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Carousel.css";
import { Carousel } from "react-bootstrap";
import Card from "../components/Card";
import { useState } from "react";

export default function CarouselComponent(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      <Carousel.Item>
        <Card
          name="Diamond Sword"
          link="https://assets.stickpng.com/images/580b57fcd9996e24bc43c301.png"
          alt="diamond pickaxe"
          description="The best-selling Minecraft item of all time! This item is a must-have for any Minecraft player. It is the perfect gift for any occasion."
          addCardItem={() => {
            alert("Added to cart!");
          }}
        ></Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card
          name="Diamond Pickaxe"
          link="https://www.clipartmax.com/png/full/263-2634572_diamond-pickaxe-minecraft-diamond-pickaxe-png.png"
          alt="diamond pickaxe"
          description="The best-selling Minecraft item of all time! This item is a must-have for any Minecraft player. It is the perfect gift for any occasion."
          addCardItem={() => {
            alert("Added to cart!");
          }}
        ></Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card
          name="Diamond Axe"
          link="https://i.pinimg.com/originals/b4/85/42/b48542f674fadb6fd988571783cb684d.png"
          alt="diamond pickaxe"
          description="The best-selling Minecraft item of all time! This item is a must-have for any Minecraft player. It is the perfect gift for any occasion."
          addCardItem={() => {
            alert("Added to cart!");
          }}
        ></Card>
      </Carousel.Item>
    </Carousel>
  );
}
