
import HeroSection from "../hero"; // Assuming file is named hero.jsx
import Clientsscroll from "../clientsscroll";
import About1 from "../pages/About1";
import Solution1 from "../pages/Solution1";
import Product1 from "../../component/pages/Product1";
import AromaOils1 from "../pages/AromaOils1";
import Industries1 from "../../component/pages/industries1";
import Blog1 from "../pages/Blog1";
import Testimonials from "../Testimonials"; // Fixed 'Testimonials is not defined'
import TalkToExpert from "../TalkToExpert"; // Fixed 'TalkToExpert is not defined'
import Clear1 from "../pages/clear1";


export default function Homepage() {
  return (
    <div>
      {/* Note: You usually don't need Nav/Footer here if they are already in App.js */}
      <HeroSection />
    
    
      <Product1 />
        <Clientsscroll />
      <About1 />
      <Solution1/>
      
      <AromaOils1 />
      <Industries1/>
      <Blog1 />
      <Clear1 />
      <Testimonials />
      <TalkToExpert />
    </div>
  );
}