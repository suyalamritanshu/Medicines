import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Footer from './Components/Footer';
import ProductDetail from "./Pages/ProdutctDetail";
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Product4 from './Components/Product4';
import Product5 from './Components/Product5';
import Product6 from './Components/Product6';
import Product7 from './Components/Product7';
import Product8 from './Components/Product8';
import Product9 from './Components/Product9';
import Product10 from './Components/Product10';
import Product11 from './Components/Product11';
import Product12 from './Components/Product12';
import Product13 from './Components/Product13';
import Product14 from './Components/Product14';
import Product15 from './Components/Product15';
import Product16 from './Components/Product16';
import Product17 from './Components/Product17';
import Manufacturing from "./Pages/Manufacturing";

function App() {
  return (
    <div style={{overflowX:"hidden", overflowY:"hidden"}}>
     
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/partners" element={<Manufacturing />} />

          <Route path="/contact" element={<Footer />} />
          <Route path="/product/all" element={<ProductDetail />} />
          <Route path="/product-1" element={<Product1 />} />
          <Route path="/product-2" element={<Product2 />} />
          <Route path="/product-3" element={<Product3 />} />
          <Route path="/product-4" element={<Product4 />} />
          <Route path="/product-5" element={<Product5 />} />
          <Route path="/product-6" element={<Product6 />} />
          <Route path="/product-7" element={<Product7 />} />
          <Route path="/product-8" element={<Product8 />} />
          <Route path="/product-9" element={<Product9/>} />
          <Route path="/product-10" element={<Product10 />} />
          <Route path="/product-11" element={<Product11 />} />
          <Route path="/product-12" element={<Product12 />} />
          <Route path="/product-13" element={<Product13 />} />
          <Route path="/product-14" element={<Product14 />} />
          <Route path="/product-15" element={<Product15 />} />
          <Route path="/product-16" element={<Product16 />} />
          <Route path="/product-17" element={<Product17 />} />
      
          
        </Routes>
    </div>
  );
}

export default App;
