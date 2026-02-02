import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT COMPONENTS ---
import Nav from './component/Nav'; 
import Footer from "./component/Footer";
import WhatsAppFloating from "./component/WhatsAppFloating";
import AboutUs from "./component/aboutus";
import SolutionsSection from "./component/Solutions";
import Products from "./component/Products";
import IndustriesWeServe from "./component/IndustriesWeServe";
import Blog from "./component/blog";
import TalkToExpert from "./component/TalkToExpert";
import Homepage from "./component/pages/Homepage"; 

// --- SOLUTION PAGE IMPORTS ---
import ScentMarketingPage from "./component/Solutionpage/ScentMarketingSolutions";
import Washroom from "./component/Solutionpage/WashroomHygieneSolutions";
import Carpersonal from "./component/Solutionpage/Car&PersonalSpaceScentingSolutions";
import Commercial from "./component/Solutionpage/CommercialAromaDiffusionSolutions";
import Hvac from "./component/Solutionpage/HVACScentingSolutions";
import Maintenance from "./component/Solutionpage/Maintenance&RefillSupportServices";

// --- PRODUCT PAGE IMPORTS ---
import CarAaromaD from "./component/productpage/CarAromaDiffusers";
import CommercialD from "./component/productpage/commercialDiffusers";
import Desktopsmall from "./component/productpage/Desktop&SmallSpaceAromaDiffusers";
import Floorstanding from "./component/productpage/Floor-StandingAromaDiffusers";
import Largearea from "./component/productpage/LargeareaDiffusers";
import Passivenopower from "./component/productpage/Passive-No-PowerDiffusers";
import WallmountedD from "./component/productpage/Wall-Mounted&CeilingAromaDiffusers";
import Scrollup from "./component/scrolluparrow";
// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// --- HELPER: MAIN PRODUCT PAGE GROUP ---
// This typically shows the list of all categories
const ProductPage = () => (
  <>
    <Products />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Navbar visible on all pages */}
      <Nav />
      <WhatsAppFloating />
      <Scrollup />

      <Routes>
        {/* --- MAIN PAGES --- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<SolutionsSection />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/industries" element={<IndustriesWeServe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<TalkToExpert />} />
        
        {/* --- SOLUTION ROUTES --- */}
        <Route path="/scent-marketing" element={<ScentMarketingPage />} />
        <Route path="/commercial-diffusion" element={<Commercial />} />
        <Route path="/hvac-scenting" element={<Hvac />} />
        <Route path="/washroom-hygiene" element={<Washroom />} />
        <Route path="/car-scenting" element={<Carpersonal />} />
        <Route path="/maintenance" element={<Maintenance/>} />

        {/* --- PRODUCT ROUTES (New Added) --- */}
        <Route path="/car-diffusers" element={<CarAaromaD />} />
        <Route path="/commercial-diffusers" element={<CommercialD />} />
        <Route path="/desktop-small-diffusers" element={<Desktopsmall />} />
        <Route path="/floor-standing-diffusers" element={<Floorstanding />} />
        <Route path="/large-area-diffusers" element={<Largearea />} />
        <Route path="/passive-diffusers" element={<Passivenopower />} />
        <Route path="/wall-mounted-diffusers" element={<WallmountedD />} />
        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;