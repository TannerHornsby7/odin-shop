import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import {Layout, Main} from './components/styles.js';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import links from './links';
import {items} from './items';
import {useState, createContext} from 'react';

import { AnimatePresence } from 'framer-motion';


export default function App() {
  const [cart, setCart] = useState([]);
  // add item to cart
  const addToCart = (item) => {
    // check if item is already in cart
    const itemInCart = cart.find((cartItem) => cartItem.name === item.name);
    // if item is already in cart, increase quantity
    if (itemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // if item is not in cart, add it to cart
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return ( // add context provider here
  
    <Layout>
    <HashRouter basename="/">
      <Navbar cartSize={0}/>
        <Main>
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
        </AnimatePresence>
      </Main>
    </HashRouter>
    </Layout>
  );
}