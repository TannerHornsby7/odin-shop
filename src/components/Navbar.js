// create a basic shopping page header with buttons that: link to the home page
// the about page, and the cart page with a cart icon that
// displays the number of items in the cart
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import craft_logo from "../assets/craft_logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src={craft_logo}
          alt="craft logo"
          className="navbar-brand craft_logo"
        />
        <h1>Craftstore</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-dark navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="navbar-links nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="navbar-links nav-link"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="catalog"
                className="navbar-links nav-link"
              >
                CATALOG
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cart"
                className="navbar-links nav-link"
              >
                CART
                <div id="cartcout">
                  <span className="badge bg-secondary">{props.cartSize}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
