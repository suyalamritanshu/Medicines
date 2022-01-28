import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import ProductDetail from "./Pages/ProdutctDetail";

function App() {
  return (
    <div>
     
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#product" element={<Product />} />
          <Route path="#contact" element={<Contact />} />
          <Route path="/product/all" element={<ProductDetail />} />
          
        </Routes>
    </div>
  );
}

export default App;
