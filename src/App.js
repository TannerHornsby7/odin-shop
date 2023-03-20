import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import {Layout, Main} from './components/styles.js';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import { AnimatePresence } from 'framer-motion';


export default function App() {
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