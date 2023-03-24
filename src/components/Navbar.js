// create a basic shopping page header with buttons that: link to the home page
// the about page, and the cart page with a cart icon that
// displays the number of items in the cart
// import bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import craft_logo from "../assets/craft_logo.jpeg";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarComponent(props) {
  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark">
      <Container className="navy">
        <Navbar.Brand className="titlecard me-auto">
          <img alt="craftstore" src={craft_logo}></img>
          <Link className='navbar-links navbar-brand' to="/">CRAFTSTORE</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" bg="black"/>
        <Navbar.Collapse id="responsive-navbar-nav" bg="black" className="ms-auto">
          <Nav className="linkies ms-auto">
            <Link className="navbar-links" to="/about">
              {" "}
              ABOUT
            </Link>
            <Link className="navbar-links" to="/catalog">
              {" "}
              CATALOG{" "}
            </Link>
            <Link className="navbar-links" to="/cart">
              {/* add a badge here that displays props.cart.length */}
              <div className="cartdiv">
                CART
                <span className="badge bg-secondary">{props.cartSize}</span>
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
