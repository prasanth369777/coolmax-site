import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT COMPONENTS ---
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
import Homepage from "./component/pages/Homepage"; 

// --- FIX: Correct Import Path ---
// Changed "../src/..." to "./component/..." assuming App.js is in the src folder
import ScentMarketingPage from "./component/Solutionpage/ScentMarketingSolutions";
import Washroom from "./component/Solutionpage/WashroomHygieneSolutions";
import Carpersonal from "./component/Solutionpage/Car&PersonalSpaceScentingSolutions";
import Commercial from "./component/Solutionpage/CommercialAromaDiffusionSolutions";
import Hvac from "./component/Solutionpage/HVACScentingSolutions";
import Maintenance from "./component/Solutionpage/Maintenance&RefillSupportServices";


// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- HELPER: PRODUCT PAGE GROUP ---
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
      <WhatsAppFloating />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<SolutionsSection />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/industries" element={<IndustriesWeServe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<TalkToExpert />} />
        
        {/* --- FIX: Route Definition --- */}
        <Route path="/scent-marketing" element={<ScentMarketingPage />} />
        <Route path="/commercial-diffusion" element={<Commercial />} />
         <Route path="/hvac-scenting" element={<Hvac />} />
        <Route path="/washroom-hygiene" element={<Washroom />} />
         <Route path="/car-scenting" element={<Carpersonal />} />
        <Route path="/Maintenance" element={<Maintenance/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;