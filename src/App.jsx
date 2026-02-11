import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Retailers from "./components/Retailers";
import NotFound from "./components/NotFound";

function App() {
  const rights = "2026 Copyrights. All rights reserved.";

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer id="rights">{rights}</footer>
    </>
  );
}

export default App;
