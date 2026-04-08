import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteNavbar from "./components/SiteNavbar";
import SiteFooter from "./components/SiteFooter";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Bespoke from "./pages/Bespoke";
import Cart from "./pages/Carts";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <SiteFooter />
    </BrowserRouter>
  );
}

export default App;