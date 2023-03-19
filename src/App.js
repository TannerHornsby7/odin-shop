import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import {Layout, Main} from './components/styles.js';
import Navbar from './components/Navbar';

import { AnimatePresence } from 'framer-motion';


export default function RouteSwitcher() {
  return (
    <Layout>
    <HashRouter basename="/">
      <Navbar cartSize={0}/>
        <Main>
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/NotFound" element={<NotFound />} /> */}
        </Routes>
        </AnimatePresence>
      </Main>
    </HashRouter>
    </Layout>
  );
}