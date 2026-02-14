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

// --- AROMA CATEGORY IMPORTS ---
import OrientalFragrances from "./component/Aromaoilspage/Oriental Fragrances";
import FreshFragrances from "./component/Aromaoilspage/Fresh Fragrances";
import PerfumersChoice from "./component/Aromaoilspage/Perfumers Choice";
import FruityFragrances from "./component/Aromaoilspage/Fruity Fragrances";
import FoodBeverageFragrances from "./component/Aromaoilspage/Food & Beverage Fragrances";
import PremiumCollection from "./component/Aromaoilspage/Premium Collection";

// --- AROMA DETAILED PAGE IMPORTS ---
import AddressAromaOilDetail from "./component/Aromaoilspage/detailedpage/AddressAromaOil";
import ArabianBakhourAromaOil from "./component/Aromaoilspage/detailedpage/ArabianBakhourAromaOil";
import ArabianPeninsulaAromaOil from "./component/Aromaoilspage/detailedpage/ArabianPeninsulaAromaOil";
import BrownOrchidAromaOil from "./component/Aromaoilspage/detailedpage/BrownOrchidAromaOil";
import ClassicAromaOil from "./component/Aromaoilspage/detailedpage/ClassicAromaOil";
import CrystalAromaOil from "./component/Aromaoilspage/detailedpage/CrystalAromaOil";
import EmaarAromaOil from "./component/Aromaoilspage/detailedpage/EmaarAromaOil";
import EnglishLavenderAromaOil from "./component/Aromaoilspage/detailedpage/EnglishLavenderAromaOil";
import EventAromaOil from "./component/Aromaoilspage/detailedpage/EventAromaOil";
import FloralAromaOil from "./component/Aromaoilspage/detailedpage/FloralAromaOil";
import ForYouAromaOil from "./component/Aromaoilspage/detailedpage/ForYouAromaOil";
import GoldAromaOil from "./component/Aromaoilspage/detailedpage/GoldAromaOil";
import HarmonyAromaOil from "./component/Aromaoilspage/detailedpage/HarmonyAromaOil";
import LavenderAromaOil from "./component/Aromaoilspage/detailedpage/LavenderAromaOil";
import LotusFlowerAromaOil from "./component/Aromaoilspage/detailedpage/LotusFlowerAromaOil";
import PassionAromaOil from "./component/Aromaoilspage/detailedpage/PassionAromaOil";
import ScentsNaturalAromaOil from "./component/Aromaoilspage/detailedpage/ScentsNaturalAromaOil";
import SplendorAromaOil from "./component/Aromaoilspage/detailedpage/SplendorAromaOil";
import StoryAromaOil from "./component/Aromaoilspage/detailedpage/StoryAromaOil";
import TajSunsetAromaOil from "./component/Aromaoilspage/detailedpage/TajSunsetAromaOil";
import TrueCoffeeAromaOil from "./component/Aromaoilspage/detailedpage/TrueCoffeeAromaOil";
import TuscanLeatherAromaOil from "./component/Aromaoilspage/detailedpage/TuscanLeatherAromaOil";
import WhiteTeaAromaOil from "./component/Aromaoilspage/detailedpage/WhiteTeaAromaOil";

// --- SEPARATE INDIVIDUAL PRODUCT IMPORTS (16 UNIQUE) ---
import AeroBlackMed from "./component/separateproducts/AeroBlack Med Diffuser";
import DriveMist from "./component/separateproducts/DriveScent Diffuser";
import NovaCar from "./component/separateproducts/NovaCar Diffuser";
import AutoLux from "./component/separateproducts/AeroBlack Pro Diffuser"; // Using Pro content for AutoLux
import VentoCar from "./component/separateproducts/VentoCar Diffuser";
import OpalMist from "./component/separateproducts/OpalMist Clock Diffuser";
import DeskMist from "./component/separateproducts/AromaDesk Diffuser";
import ZenBoxMini from "./component/separateproducts/ZenBox Mini Diffuser";
import Titan from "./component/separateproducts/Titan Diffuser";
import LuxePanel from "./component/separateproducts/LuxePanel Diffuser";
import CeilAir from "./component/separateproducts/CeilAir Pro Diffuser";
import MistBox from "./component/separateproducts/MistBox X Diffuser";
import AirPulse from "./component/separateproducts/AirPulse 150 Diffuser";
import AeroPillar from "./component/separateproducts/AeroPillar Diffuser";
import AirPole from "./component/separateproducts/AirPole Pro Diffuser";
import NanoPillar from "./component/separateproducts/NanoPillar Diffuser";
import NaturalFlow from "./component/separateproducts/Natural Fragrance Diffuser";
import Solution from "./component/Solutionpage/Solution";
import AeroCubePage from "./component/separateproducts/AeroCube Diffuser";
import Aeromaxpro from "./component/separateproducts/AeroMax Pro";
import DeskScentPage from "./component/separateproducts/DeskScent";


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
        <Route path="/solution" element={<Solution />} />
        
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

        {/* --- AROMA CATEGORY ROUTES --- */}
        <Route path="/Oriental-Fragrances" element={<OrientalFragrances />} />
        <Route path="/Fresh-Fragrances" element={<FreshFragrances />} />
        <Route path="/Perfumers-Choice" element={<PerfumersChoice />} />
        <Route path="/Fruity-Fragrances" element={<FruityFragrances />} />
        <Route path="/Food-BeverageFragrances" element={<FoodBeverageFragrances />} />
        <Route path="/Premium-Collection" element={<PremiumCollection />} />
        
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
        <Route path="/product/aerocube" element={<AeroCubePage />} />
         <Route path="/product/aeromaxpro" element={<Aeromaxpro />} />
          <Route path="/product/deskscent" element={<DeskScentPage />} />

        {/* --- AROMA DETAILED PAGES ROUTES --- */}
        <Route path="/aroma/address" element={<AddressAromaOilDetail/>} />
        <Route path="/aroma/arabian-bakhour" element={<ArabianBakhourAromaOil/>} />
        <Route path="/aroma/arabian-peninsula" element={<ArabianPeninsulaAromaOil/>} />
        <Route path="/aroma/brown-orchid" element={<BrownOrchidAromaOil/>} />
        <Route path="/aroma/classic" element={<ClassicAromaOil/>} />
        <Route path="/aroma/crystal" element={<CrystalAromaOil/>} />
        <Route path="/aroma/emaar" element={<EmaarAromaOil/>} />
        <Route path="/aroma/english-lavender" element={<EnglishLavenderAromaOil/>} />
        <Route path="/aroma/event" element={<EventAromaOil/>} />
        <Route path="/aroma/floral" element={<FloralAromaOil/>} />
        <Route path="/aroma/for-you" element={<ForYouAromaOil/>} />
        <Route path="/aroma/gold" element={<GoldAromaOil/>} />
        <Route path="/aroma/harmony" element={<HarmonyAromaOil/>} />
        <Route path="/aroma/lavender" element={<LavenderAromaOil/>} />
        <Route path="/aroma/lotus-flower" element={<LotusFlowerAromaOil/>} />
        <Route path="/aroma/passion" element={<PassionAromaOil/>} />
        <Route path="/aroma/scents-natural" element={<ScentsNaturalAromaOil/>} />
        <Route path="/aroma/splendor" element={<SplendorAromaOil/>} />
        <Route path="/aroma/story" element={<StoryAromaOil/>} />
        <Route path="/aroma/taj-sunset" element={<TajSunsetAromaOil/>} />
        <Route path="/aroma/true-coffee" element={<TrueCoffeeAromaOil/>} />
        <Route path="/aroma/tuscan-leather" element={<TuscanLeatherAromaOil/>} />
        <Route path="/aroma/white-tea" element={<WhiteTeaAromaOil/>} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;