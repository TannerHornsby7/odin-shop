// create a basic react homepage with a link to the about page
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Home.css";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="body">
      <h2>Home</h2>
      <div className="hero">
        <div className="hero-overlay">
          <h1>Featured Item</h1>
          <p>
            The best-selling Minecraft item of all time! This item is a must-have
            for any Minecraft player. It's the perfect gift for any occasion.
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );}