import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";


const App = () => {
  return (
  
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App
