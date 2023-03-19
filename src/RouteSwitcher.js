import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


export default function RouteSwitcher() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/NotFound" element={<NotFound />} /> */}
      </Routes>
    </HashRouter>
  );
}