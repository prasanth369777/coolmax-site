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
import Aroms from "./component/AromaOils";

// --- SOLUTION PAGE IMPORTS ---
import ScentMarketingPage from "./component/Solutionpage/ScentMarketingSolutions";
import Washroom from "./component/Solutionpage/WashroomHygieneSolutions";
import Carpersonal from "./component/Solutionpage/Car&PersonalSpaceScentingSolutions";
import Commercial from "./component/Solutionpage/CommercialAromaDiffusionSolutions";
import Hvac from "./component/Solutionpage/HVACScentingSolutions";
import Maintenance from "./component/Solutionpage/Maintenance&RefillSupportServices";

// --- PRODUCT CATEGORY IMPORTS ---
import CarAaromaD from "./component/productpage/CarAromaDiffusers";
import CommercialD from "./component/productpage/commercialDiffusers";
import Desktopsmall from "./component/productpage/Desktop&SmallSpaceAromaDiffusers";
import Floorstanding from "./component/productpage/Floor-StandingAromaDiffusers";
import Largearea from "./component/productpage/LargeareaDiffusers";
import Passivenopower from "./component/productpage/Passive-No-PowerDiffusers";
import WallmountedD from "./component/productpage/Wall-Mounted&CeilingAromaDiffusers";
import Scrollup from "./component/scrolluparrow";

// --- SEPARATE INDIVIDUAL PRODUCT IMPORTS (16 UNIQUE) ---
import AeroBlackMed from "./component/separateproducts/AeroBlack Med Diffuser";
import DriveMist from "./component/separateproducts/DriveScent Diffuser";
import NovaCar from "./component/separateproducts/NovaCar Diffuser";
import AutoLux from "./component/separateproducts/AeroBlack Pro Diffuser"; // Using Pro content for AutoLux
import VentoCar from "./component/separateproducts/VentoCar Diffuser";
import OpalMist from "./component/separateproducts/OpalMist Clock Diffuser";
import DeskMist from "./component/separateproducts/AromaDesk Diffuser";
import ZenBoxMini from "./component/separateproducts/ZenBox Mini Diffuser";
import LuxePanel from "./component/separateproducts/LuxePanel Diffuser";
import CeilAir from "./component/separateproducts/CeilAir Pro Diffuser";
import MistBox from "./component/separateproducts/MistBox X Diffuser";
import AirPulse from "./component/separateproducts/AirPulse 150 Diffuser";
import AeroPillar from "./component/separateproducts/AeroPillar Diffuser";
import AirPole from "./component/separateproducts/AirPole Pro Diffuser";
import NanoPillar from "./component/separateproducts/NanoPillar Diffuser";
import NaturalFlow from "./component/separateproducts/Natural Fragrance Diffuser";
import Titan from "./component/separateproducts/Titan Diffuser";

// --- HELPER: SCROLL TO TOP ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProductPage = () => (
  <>
    <Products />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Nav />
      <WhatsAppFloating />
      <Scrollup />

      <Routes>
        {/* --- MAIN PAGES --- */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<SolutionsSection />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/aromas" element={<Aroms />} />
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

        {/* --- PRODUCT CATEGORY ROUTES --- */}
        <Route path="/car-diffusers" element={<CarAaromaD />} />
        <Route path="/commercial-diffusers" element={<CommercialD />} />
        <Route path="/desktop-small-diffusers" element={<Desktopsmall />} />
        <Route path="/floor-standing-diffusers" element={<Floorstanding />} />
        <Route path="/large-area-diffusers" element={<Largearea />} />
        <Route path="/passive-diffusers" element={<Passivenopower />} />
        <Route path="/wall-mounted-diffusers" element={<WallmountedD />} />
        
        {/* --- INDIVIDUAL PRODUCT ROUTES (16+ UNIQUE PATHS) --- */}
        <Route path="/product/aeroblack-med" element={<AeroBlackMed />} />
        <Route path="/product/drivemist" element={<DriveMist />} />
        <Route path="/product/novacar" element={<NovaCar />} />
        <Route path="/product/autolux" element={<AutoLux />} />
        <Route path="/product/ventocar" element={<VentoCar />} />
        <Route path="/product/opalmist" element={<OpalMist />} />
        <Route path="/product/deskmist" element={<DeskMist />} />
        <Route path="/product/zenbox-mini" element={<ZenBoxMini />} />
        <Route path="/product/luxepanel" element={<LuxePanel />} />
        <Route path="/product/ceilair" element={<CeilAir />} />
        <Route path="/product/mistbox" element={<MistBox />} />
        <Route path="/product/airpulse" element={<AirPulse />} />
        <Route path="/product/aeropillar" element={<AeroPillar />} />
        <Route path="/product/airpole" element={<AirPole />} />
        <Route path="/product/nanopillar" element={<NanoPillar />} />
        <Route path="/product/naturalflow" element={<NaturalFlow />} />
        <Route path="/product/titan" element={<Titan />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;