import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT COMPONENTS ---
// Note: adjusting paths assuming App.js is directly in src/
import Nav from './component/Nav'; 
import Footer from "./component/Footer";
import WhatsAppFloating from "./component/WhatsAppFloating";
import AboutUs from "./component/aboutus";
import SolutionsSection from "./component/Solutions";
import Products from "./component/Products";
import AromaOils from "./component/AromaOils";
import IndustriesWeServe from "./component/IndustriesWeServe";
import Blog from "./component/blog";
import TalkToExpert from "./component/TalkToExpert";
// Page Components
import Homepage from "./component/pages/Homepage"; // Update path if you moved it to pages folder

// --- HELPER: SCROLL TO TOP ---
// (This fixes the 'ScrollToTop is not defined' error)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- HELPER: PRODUCT PAGE GROUP ---
// (This fixes the 'ProductPage is not defined' error)
const ProductPage = () => (
  <>
    <Products />
    <AromaOils /> 
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Navbar visible on all pages */}
      <Nav />
      
      {/* Floating Button visible on all pages */}
      <WhatsAppFloating />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<SolutionsSection />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/industries" element={<IndustriesWeServe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<TalkToExpert />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;