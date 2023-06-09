import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Layout, Main } from "./components/styles.js";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import links from "./links";
import { items } from "./items";
import { useState, createContext, useEffect } from "react";

import { AnimatePresence } from "framer-motion";
import NavbarComponent from "./components/Navbar";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);


  useEffect(() => {
    setCartAmount(cart.reduce((acc, item) => {
      return acc + item.cquantity;
    }, 0));
  }, [cart]);
  // add item to cart
  const addToCart = (item) => {
    // check if item is already in cart
    const itemInCart = cart.find((cartItem) => cartItem.name === item.name);
    // if item is already in cart, increase quantity
    if (itemInCart) {
      if (itemInCart.cquantity >= item.aquantity) {
        alert("You can't buy more than " + item.aquantity + " " + item.name);
        return;
      }
      else{
        setCart(
          cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, cquantity: cartItem.cquantity + 1}
              : cartItem
          )
        );
      }
    } else {
      // if item is not in cart, add it to cart
      if (item.cquantity + 1 >= item.aquantity) {
        alert("You can't buy more than " + item.aquantity + "s " + item.name);
        return;
      }
      setCart([...cart, { ...item, cquantity: 1 }]);
    }
  };

  // remove item from cart
  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  // increment item quantity in cart
  const addCardItem = (item) => {
    if (item.cquantity >= item.aquantity) {
      alert("You can't buy more than " + item.aquantity + " " + item.name);
      return;
    }
    setCart(
      cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, cquantity: cartItem.cquantity + 1 }
          : cartItem
      )
    );
  };

  // decrement item quantity in cart
  const removeCardItem = (item) => {
    if (item.cquantity == 1) {
      removeFromCart(item);
      return;
    }
    setCart(
      cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, cquantity: cartItem.cquantity - 1 }
          : cartItem
      )
    );
  };



  return (
    // add context provider here

    <Layout>
      <HashRouter basename="/">
        <NavbarComponent cartSize={cartAmount} />
        <Main>
          <AnimatePresence>
            <Routes>
              <Route path="" element={<Home addToCart={addToCart} />} />
              <Route path="about" element={<About />} />
              <Route path="catalog" element={<Catalog addToCart={addToCart} />} />
              <Route
                path="cart"
                element={<Cart add={addCardItem} remove={removeCardItem} cart={cart} removeFromCart={removeFromCart} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Main>
      </HashRouter>
    </Layout>
  );
}
