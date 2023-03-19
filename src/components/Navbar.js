// create a basic shopping page header with buttons that: link to the home page
// the about page, and the cart page with a cart icon that
// displays the number of items in the cart
import '../styles/Navbar.css';
import craft_logo from "../assets/craft_logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
    {/* make a logo on the left hand side */}
        <img src={craft_logo} alt="logo" />
        <h1> CRAFTSTORE </h1>
        <Link className='header-links' to="/">Home</Link>
        <Link className='header-links' to="about">About</Link>

      <a href="cart">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"
          alt="cart icon"
        />
      </a>
    </header>
  );
}
