// create a basic about page that displays an image in a div
// background image is set in the div's style attribute
// with a header and text content
import "../styles/About.css";
import about_bg from "../assets/about_bg.jpg";

export default function About() {
  return (
    <div className="body">
      <h2>About</h2>
      <div className="about" style={{ backgroundImage: `url(${about_bg})` }}>
        <div className="overlay">
          <p>
            Welcome, adventurer! I am the village trader, and I offer the finest
            Minecraft goods to help you on your journey. Whether you're a novice
            or an experienced player, my shop has everything you need to thrive
            in this blocky world. From powerful tools and weapons to rare items
            and enchantments, I have it all. My selection of skins and character
            packs will make you stand out in the crowd, while my mods and
            add-ons will take your gameplay to the next level. Need a custom map
            or a server to join? Look no further, I have it all! My years of
            experience in this trade mean that I can help you find the perfect
            item for your needs and offer advice on how to make the most out of
            your Minecraft adventure. So come and visit my shop, and let's start
            trading!
          </p>
          <p id="tagline">
            - The Village Trader
          </p>
        </div>
      </div>
    </div>
  );
}
