// src/App.jsx
import React from "react";
import Nav from './component/Nav';
import Home from "./component/hero";
import AboutUs from "./component/aboutus";
import Products from "./component/Products";
import Clientsscroll from "./component/clientsscroll";
import Categories from "./component/categories";
import Testimonials from "./component/Testimonials";
import TalkToExpert from "./component/TalkToExpert";
import Dragscrollp from "./component/Dragscrollp";
import FAQSection from "./component/Frequently";
import Footer from "./component/Footer";
import WhatsAppFloating  from "./component/WhatsAppFloating";
import Gallery from "./component/Gallery";
import Banner from "./component/banner";
function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Home />
      <WhatsAppFloating />
      <Clientsscroll/>
      <AboutUs />
      <Products />
      <Categories />
       <Dragscrollp />
       <Gallery />
      <Testimonials />
      <TalkToExpert />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
