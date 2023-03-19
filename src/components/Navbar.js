// create a basic shopping page header with buttons that: link to the home page
// the about page, and the cart page with a cart icon that
// displays the number of items in the cart

import craft_logo from "../assets/craft_logo.jpeg";

export default function Navbar() {
  return (
    <header>
    {/* make a logo on the left hand side */}
        <img src={craft_logo} alt="logo" />
      <a href="/">Home</a>
      <a href="about">About</a>
      <a href="cart">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png"
          alt="cart icon"
        />
      </a>
    </header>
  );
}
