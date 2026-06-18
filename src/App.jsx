import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/Heroslider";
import ShopCollections from "./components/ShopCollections";
import SaleOffer from "./components/SaleOffer";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";

function HomePage() {
  return (
    <>
      <HeroSlider />
      <ShopCollections />
      <SaleOffer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
