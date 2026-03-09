import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- STATIC IMPORTS (Core UI components to avoid flicker) ---
import Nav from './component/Nav'; 
import Footer from "./component/Footer";
import WhatsAppFloating from "./component/WhatsAppFloating";
import Scrollup from "./component/scrolluparrow";

// --- LAZY LOADED COMPONENTS ---
const Homepage = lazy(() => import("./component/pages/Homepage"));
const AboutUs = lazy(() => import("./component/aboutus"));
const SolutionsSection = lazy(() => import("./component/Solutions"));
const Products = lazy(() => import("./component/Products"));
const IndustriesWeServe = lazy(() => import("./component/IndustriesWeServe"));
const Blog = lazy(() => import("./component/blog"));
const TalkToExpert = lazy(() => import("./component/TalkToExpert"));
const Aroms = lazy(() => import("./component/AromaOils"));
const SprayCollectionPage = lazy(() => import("./component/Spray/spraypage"));
const Solution = lazy(() => import("./component/Solutionpage/Solution"));
const ThankYouPage = lazy(() => import("./component/Thankyoupage"));

// --- SOLUTION PAGES ---
const ScentMarketingPage = lazy(() => import("./component/Solutionpage/ScentMarketingSolutions"));
const Washroom = lazy(() => import("./component/Solutionpage/WashroomHygieneSolutions"));
const Carpersonal = lazy(() => import("./component/Solutionpage/Car&PersonalSpaceScentingSolutions"));
const Commercial = lazy(() => import("./component/Solutionpage/CommercialAromaDiffusionSolutions"));
const Hvac = lazy(() => import("./component/Solutionpage/HVACScentingSolutions"));
const Maintenance = lazy(() => import("./component/Solutionpage/Maintenance&RefillSupportServices"));

// --- PRODUCT CATEGORIES ---
const CarAaromaD = lazy(() => import("./component/productpage/CarAromaDiffusers"));
const CommercialD = lazy(() => import("./component/productpage/commercialDiffusers"));
const Desktopsmall = lazy(() => import("./component/productpage/Desktop&SmallSpaceAromaDiffusers"));
const Floorstanding = lazy(() => import("./component/productpage/Floor-StandingAromaDiffusers"));
const Largearea = lazy(() => import("./component/productpage/LargeareaDiffusers"));
const Passivenopower = lazy(() => import("./component/productpage/Passive-No-PowerDiffusers"));
const WallmountedD = lazy(() => import("./component/productpage/Wall-Mounted&CeilingAromaDiffusers"));
const AerosolDispensersPage = lazy(() => import("./component/productpage/Aerosol Dispensers"));

// --- AROMA CATEGORIES ---
const OrientalFragrances = lazy(() => import("./component/Aromaoilspage/Oriental Fragrances"));
const FreshFragrances = lazy(() => import("./component/Aromaoilspage/Fresh Fragrances"));
const PerfumersChoice = lazy(() => import("./component/Aromaoilspage/Perfumers Choice"));
const FruityFragrances = lazy(() => import("./component/Aromaoilspage/Fruity Fragrances"));
const FoodBeverageFragrances = lazy(() => import("./component/Aromaoilspage/Food & Beverage Fragrances"));
const PremiumCollection = lazy(() => import("./component/Aromaoilspage/Premium Collection"));

// --- AROMA DETAILS ---
const AddressAromaOilDetail = lazy(() => import("./component/Aromaoilspage/detailedpage/AddressAromaOil"));
const ArabianBakhourAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/ArabianBakhourAromaOil"));
const ArabianPeninsulaAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/ArabianPeninsulaAromaOil"));
const BrownOrchidAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/BrownOrchidAromaOil"));
const ClassicAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/ClassicAromaOil"));
const CrystalAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/CrystalAromaOil"));
const EmaarAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/EmaarAromaOil"));
const EnglishLavenderAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/EnglishLavenderAromaOil"));
const EventAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/EventAromaOil"));
const FloralAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/FloralAromaOil"));
const ForYouAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/ForYouAromaOil"));
const GoldAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/GoldAromaOil"));
const HarmonyAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/HarmonyAromaOil"));
const LavenderAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/LavenderAromaOil"));
const LotusFlowerAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/LotusFlowerAromaOil"));
const PassionAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/PassionAromaOil"));
const ScentsNaturalAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/ScentsNaturalAromaOil"));
const SplendorAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/SplendorAromaOil"));
const StoryAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/StoryAromaOil"));
const TajSunsetAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/TajSunsetAromaOil"));
const TrueCoffeeAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/TrueCoffeeAromaOil"));
const TuscanLeatherAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/TuscanLeatherAromaOil"));
const WhiteTeaAromaOil = lazy(() => import("./component/Aromaoilspage/detailedpage/WhiteTeaAromaOil"));
const SweetOudAromaOilDetail = lazy(() => import("./component/Aromaoilspage/detailedpage/SweetOudAromaOil"));

// --- SPRAY DETAILS ---
const FloraSpray = lazy(() => import("./component/Spray/Flora"));
const ForYouSpray = lazy(() => import("./component/Spray/ForYouAerosolSpray"));
const SenseSpray = lazy(() => import("./component/Spray/SenseAerosolSpray"));
const EventSpray = lazy(() => import("./component/Spray/EventAerosolSpray"));
const VanillaSpray = lazy(() => import("./component/Spray/VarillaIceCreamAerosolSpray"));
const PassionSpray = lazy(() => import("./component/Spray/PassionAerosolSpray"));
const ParisSpray = lazy(() => import("./component/Spray/ParisAerosolSpray"));
const FreshBakhoorSpray = lazy(() => import("./component/Spray/FreshBakhoorAerosolSpray"));
const FreshJasmineSpray = lazy(() => import("./component/Spray/FreshJasmineAerosolSpray"));
const ClassicSpray = lazy(() => import("./component/Spray/ClassicAerosolSpray"));
const StrawberrySpray = lazy(() => import("./component/Spray/StrawberryAerosolSpray"));
const RoseSpray = lazy(() => import("./component/Spray/RoseAerosolSpray"));
const TraditionSpray = lazy(() => import("./component/Spray/TraditionAerosolSpray"));
const FreshLavenderSpray = lazy(() => import("./component/Spray/FreshLavenderAerosolSpray"));
const AuraSpray = lazy(() => import("./component/Spray/AuraAerosolSpray"));
const ProfumoSpray = lazy(() => import("./component/Spray/ProfumoAerosolSpray"));
const FantasticSpray = lazy(() => import("./component/Spray/FantasticAerosolSpray"));
const FloralSpray = lazy(() => import("./component/Spray/FloralAerosolSpray"));
const VoyageSpray = lazy(() => import("./component/Spray/VoyageAerosolSpray"));

// --- SEPARATE PRODUCTS ---
const AeroBlackMed = lazy(() => import("./component/separateproducts/AeroBlack Med Diffuser"));
const DriveMist = lazy(() => import("./component/separateproducts/DriveScent Diffuser"));
const NovaCar = lazy(() => import("./component/separateproducts/NovaCar Diffuser"));
const AeroBlackpro = lazy(() => import("./component/separateproducts/AeroBlack Pro Diffuser")); 
const VentoCar = lazy(() => import("./component/separateproducts/VentoCar Diffuser"));
const OpalMist = lazy(() => import("./component/separateproducts/OpalMist Clock Diffuser"));
const DeskMist = lazy(() => import("./component/separateproducts/AromaDesk Diffuser"));
const ZenBoxMini = lazy(() => import("./component/separateproducts/ZenBox Mini Diffuser"));
const Titan = lazy(() => import("./component/separateproducts/Titan Diffuser"));
const LuxePanel = lazy(() => import("./component/separateproducts/LuxePanel Diffuser"));
const CeilAir = lazy(() => import("./component/separateproducts/CeilAir Pro Diffuser"));
const MistBox = lazy(() => import("./component/separateproducts/MistBox X Diffuser"));
const AirPulse = lazy(() => import("./component/separateproducts/AirPulse 150 Diffuser"));
const AeroPillar = lazy(() => import("./component/separateproducts/AeroPillar Diffuser"));
const AirPole = lazy(() => import("./component/separateproducts/AirPole Pro Diffuser"));
const NanoPillar = lazy(() => import("./component/separateproducts/NanoPillar Diffuser"));
const NaturalFlow = lazy(() => import("./component/separateproducts/Natural Fragrance Diffuser"));
const AeroCubePage = lazy(() => import("./component/separateproducts/AeroCube Diffuser"));
const Aeromaxpro = lazy(() => import("./component/separateproducts/AeroMax Pro"));
const DeskScentPage = lazy(() => import("./component/separateproducts/DeskScent"));

// --- BLOGS ---
const Blog1 = lazy(() => import("../src/component/blogs/blog1"));
const Blog2 = lazy(() => import("../src/component/blogs/blog2"));
const Blog3 = lazy(() => import("../src/component/blogs/blog3"));
const Blog4 = lazy(() => import("../src/component/blogs/blog4"));
const Blog5 = lazy(() => import("../src/component/blogs/blog5"));

// --- HELPERS ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ProductPage = () => (
  <Suspense fallback={<PageLoader />}>
    <Products />
  </Suspense>
);

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <WhatsAppFloating />
      <Scrollup />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* --- MAIN PAGES --- */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/solutions/" element={<SolutionsSection />} />
          <Route path="/products/" element={<ProductPage />} />
          <Route path="/aromas/" element={<Aroms />} />
          <Route path="/industries/" element={<IndustriesWeServe />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/contact/" element={<TalkToExpert />} />
          <Route path="/solution/" element={<Solution />} />
          <Route path="/spray/" element={<SprayCollectionPage />} />
          <Route path="/thank-you/" element={<ThankYouPage />} />

          {/* --- SOLUTION ROUTES --- */}
          <Route path="/scent-marketing-solutions/" element={<ScentMarketingPage />} />
          <Route path="/commercial-aroma-diffusion-solutions/" element={<Commercial />} />
          <Route path="/hvac-scenting-solutions/" element={<Hvac />} />
          <Route path="/washroom-hygiene-solutions/" element={<Washroom />} />
          <Route path="/car-and-personal-space-scenting-solutions/" element={<Carpersonal />} />
          <Route path="/maintenance-and-refill-support-services/" element={<Maintenance/>} />

          {/* --- PRODUCT CATEGORY ROUTES --- */}
          <Route path="/car-aroma-diffusers/" element={<CarAaromaD />} />
          <Route path="/commercial-aroma-diffusers/" element={<CommercialD />} />
          <Route path="/desktop-and-small-space-aroma-diffusers/" element={<Desktopsmall />} />
          <Route path="/floor-standing-aroma-diffusers/" element={<Floorstanding />} />
          <Route path="/large-area-and-hvac-aroma-diffusers/" element={<Largearea />} />
          <Route path="/no-power-diffusers/" element={<Passivenopower />} />
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/" element={<WallmountedD />} />
          <Route path="/aerosol-dispensers/" element={<AerosolDispensersPage />} />

          {/* --- AROMA CATEGORY ROUTES --- */}
          <Route path="/oriental-aroma-oil/" element={<OrientalFragrances />} />
          <Route path="/fresh-aroma-oil/" element={<FreshFragrances />} />
          <Route path="/perfumers-choice-aroma-oil/" element={<PerfumersChoice />} />
          <Route path="/fruity-aroma-oil/" element={<FruityFragrances />} />
          <Route path="/food-and-beverage-aroma-oil/" element={<FoodBeverageFragrances />} />
          <Route path="/premium-aroma-oil/" element={<PremiumCollection />} />
          
          {/* Commercial Aroma Diffusers */}
          <Route path="/commercial-aroma-diffusers/aeroblack-med-diffuser/" element={<AeroBlackMed />} />
          <Route path="/commercial-aroma-diffusers/mistbox-x-diffuser/" element={<MistBox />} />
          <Route path="/commercial-aroma-diffusers/aeroblack-pro/" element={<AeroBlackpro />} />

          {/* Large Area & HVAC */}
          <Route path="/large-area-and-hvac-aroma-diffusers/aeroblack-pro-diffuser/" element={<AeroBlackpro />} />
          <Route path="/large-area-and-hvac-aroma-diffusers/air-pulse-150-diffuser/" element={<AirPulse />} />

          {/* Car Aroma Diffusers */}
          <Route path="/car-aroma-diffusers/vento-car-diffuser/" element={<VentoCar />} />
          <Route path="/car-aroma-diffusers/drive-scent-diffuser/" element={<DriveMist />} />
          <Route path="/car-aroma-diffusers/desk-scent-diffuser/" element={<DeskScentPage />} />
          <Route path="/car-aroma-diffusers/nova-car-diffuser/" element={<NovaCar />} />

          {/* Desktop & Small Space */}
          <Route path="/desktop-and-small-space-aroma-diffusers/aero-cube-diffuser/" element={<AeroCubePage />} />
          <Route path="/desktop-and-small-space-aroma-diffusers/zembox-mini-diffuser/" element={<ZenBoxMini />} />
          <Route path="/desktop-and-small-space-aroma-diffusers/aroma-desk-diffuser/" element={<DeskMist />} />
          <Route path="/desktop-and-small-space-aroma-diffusers/luxepanel-diffuser/" element={<LuxePanel />} />
          <Route path="/desktop-and-small-space-aroma-diffusers/opalmist-clock-diffuser/" element={<OpalMist />} />

          {/* Wall-Mounted & Ceiling */}
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/ceil-air-pro-diffuser/" element={<CeilAir />} />
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/aeromax-pro-diffuser/" element={<Aeromaxpro />} />
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/aerocube-diffuser/" element={<AeroCubePage />} />
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/zenbox-mini-diffuser/" element={<ZenBoxMini />} />
          <Route path="/wall-mounted-and-ceiling-aroma-diffusers/luxepanel-diffuser/" element={<LuxePanel />} />

          {/* Floor Standing */}
          <Route path="/floor-standing-aroma-diffusers/nano-pillar-diffuser/" element={<NanoPillar />} />
          <Route path="/floor-standing-aroma-diffusers/titan-diffuser/" element={<Titan />} />
          <Route path="/floor-standing-aroma-diffusers/aeropillar-diffuser/" element={<AeroPillar />} />
          <Route path="/floor-standing-aroma-diffusers/airpole-pro-diffuser/" element={<AirPole />} />

          {/* No Power */}
          <Route path="/no-power-diffusers/natural-fragrance-diffuser/" element={<NaturalFlow />} />

          {/* --- AROMA DETAILED PAGES --- */}
          <Route path="/oriental-aroma-oil/address/" element={<AddressAromaOilDetail />} />
          <Route path="/oriental-aroma-oil/arabian-peninsula/" element={<ArabianPeninsulaAromaOil />} />
          <Route path="/oriental-aroma-oil/arabian-bakhour/" element={<ArabianBakhourAromaOil />} />
          <Route path="/oriental-aroma-oil/emaar/" element={<EmaarAromaOil />} />
          <Route path="/oriental-aroma-oil/sweet-oud/" element={<SweetOudAromaOilDetail/>} />
          <Route path="/fresh-aroma-oil/lavender/" element={<LavenderAromaOil />} />
          <Route path="/fresh-aroma-oil/english-lavender/" element={<EnglishLavenderAromaOil />} />
          <Route path="/fresh-aroma-oil/white-tea/" element={<WhiteTeaAromaOil />} />
          <Route path="/fresh-aroma-oil/floral/" element={<FloralAromaOil />} />
          <Route path="/fresh-aroma-oil/lotus-flower/" element={<LotusFlowerAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/harmony/" element={<HarmonyAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/event/" element={<EventAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/for-you/" element={<ForYouAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/passion/" element={<PassionAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/gold/" element={<GoldAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/tuscan-leather/" element={<TuscanLeatherAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/story/" element={<StoryAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/brown-orchid/" element={<BrownOrchidAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/scents-natural/" element={<ScentsNaturalAromaOil />} />
          <Route path="/perfumers-choice-aroma-oil/splendor/" element={<SplendorAromaOil />} />
          <Route path="/fruity-aroma-oil/crystal/" element={<CrystalAromaOil />} />
          <Route path="/food-and-beverage-aroma-oil/true-coffee/" element={<TrueCoffeeAromaOil />} />
          <Route path="/premium-aroma-oil/taj-sunset/" element={<TajSunsetAromaOil />} />
          <Route path="/premium-aroma-oil/classic/" element={<ClassicAromaOil />} />

          {/* --- AEROSOL SPRAY COLLECTION --- */}
          <Route path="/spray/flora-aerosol-spray/" element={<FloraSpray />} />
          <Route path="/spray/for-you-aerosol-spray/" element={<ForYouSpray />} />
          <Route path="/spray/sense-aerosol-spray/" element={<SenseSpray />} />
          <Route path="/spray/event-aerosol-spray/" element={<EventSpray />} />
          <Route path="/spray/varilla-ice-cream-aerosol-spray/" element={<VanillaSpray />} />
          <Route path="/spray/passion-aerosol-spray/" element={<PassionSpray />} />
          <Route path="/spray/paris-aerosol-spray/" element={<ParisSpray />} />
          <Route path="/spray/fresh-bakhoor-aerosol-spray/" element={<FreshBakhoorSpray />} />
          <Route path="/spray/fresh-jasmine-aerosol-spray/" element={<FreshJasmineSpray />} />
          <Route path="/spray/classic-aerosol-spray/" element={<ClassicSpray />} />
          <Route path="/spray/strawberry-aerosol-spray/" element={<StrawberrySpray />} />
          <Route path="/spray/rose-aerosol-spray/" element={<RoseSpray />} />
          <Route path="/spray/tradition-aerosol-spray/" element={<TraditionSpray />} />
          <Route path="/spray/fresh-lavender-aerosol-spray/" element={<FreshLavenderSpray />} />
          <Route path="/spray/aura-aerosol-spray/" element={<AuraSpray />} />
          <Route path="/spray/profumo-aerosol-spray/" element={<ProfumoSpray />} />
          <Route path="/spray/fantastic-aerosol-spray/" element={<FantasticSpray />} />
          <Route path="/spray/floral-aerosol-spray/" element={<FloralSpray />} />
          <Route path="/spray/voyage-aerosol-spray/" element={<VoyageSpray />} />

          {/* --- BLOGS --- */}
          <Route path="/blog/scent-marketing-hotels-uae/" element={<Blog1 />} />
          <Route path="/blog/choose-commercial-aroma-diffuser-uae/" element={<Blog2 />} />
          <Route path="/blog/scent-marketing-101-uae/" element={<Blog3 />} />
          <Route path="/blog/why-5-star-hotels-dubai-use-scent-diffusers/" element={<Blog4 />} />
           <Route path="/blog/how-to-choose-best-scent-diffuser-machine/" element={<Blog5 />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;