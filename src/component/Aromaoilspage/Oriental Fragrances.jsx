import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  SparklesIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECTED ASSET IMPORTS ---
import P1 from "../../asset/Aroma oils img/ADDRESS.webp"; 
import P2 from "../../asset/Aroma oils img/ARABIAN PENSUILA.webp"; 
import P3 from "../../asset/Aroma oils img/ARABIAN  BAKHOOR.webp"; 
import P4 from "../../asset/Aroma oils img/EMAAR.webp"; 
import P5 from "../../asset/Aroma oils img/Sweet Oud.webp"; // Added import for Sweet Oud

const OrientalAromaOilsPage = () => {
  // Redirection Links
  const whatsappNumber = "971509282702";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Oriental%20Aroma%20Oils%20Collection.`;
  const contactPath = "/contact/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const oils = [
    {
      name: "Address Aroma Oil",
      image: P1,
      category: "Oriental",
      code: "CM-0101-OR",
      strength: "Medium",
      path: "/oriental-aroma-oil/address/",
      top: "Mango, Myrrh, Saffron, Rose",
      middle: "Agarwood (Oud), Patchouli, Amber, Musk",
      base: "Passionfruit, Lemon, Cardamom",
    },
    {
      name: "Arabian Peninsula Aroma Oil",
      image: P2,
      category: "Oriental",
      code: "CM-0102-OR",
      strength: "Strong",
      path: "/oriental-aroma-oil/arabian-peninsula/",
      top: "Saffron, Oudh, Spiced Rose",
      middle: "Amber, Frankincense, Sandalwood",
      base: "Musk, Leather, Myrrh, Patchouli",
    },
    {
      name: "Arabian Bakhour Aroma Oil",
      image: P3,
      category: "Oriental",
      code: "CM-0103-OR",
      strength: "Strong",
      path: "/oriental-aroma-oil/arabian-bakhour/",
      top: "Jasmine, Rose",
      middle: "Saffron, Clove",
      base: "Vanilla, Pineapple",
    },
    {
      name: "Emaar Aroma Oil",
      image: P4,
      category: "Oriental",
      code: "CM-0104-OR",
      strength: "Medium",
      path: "/oriental-aroma-oil/emaar/",
      top: "Rose, Floral",
      middle: "Cedarwood, Saffron",
      base: "Musk, Patchouli",
    },
    {
      name: "Sweet Oud Aroma Oil",
      image: P5,
      category: "Oriental",
      code: "CM-0105-OR",
      strength: "Strong",
      path: "/oriental-aroma-oil/sweet-oud/",
      top: "Agarwood (Oud), Praline",
      middle: "Clove",
      base: "Rose",
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden tracking-tight text-left">
      
      {/* ================= SEO METADATA ================= */}
    
        <title>Oriental Aroma Oils for Hotels & Luxury Spaces | Cool Max Scent</title>
        <meta name="description" content="Explore premium oriental aroma oils by Cool Max Scent. Discover rich, long-lasting fragrances designed for hotels, offices, and luxury commercial spaces." />
        <link rel="canonical" href="https://www.coolmaxscent.com/oriental-aroma-oil/" />
    

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center text-left">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-left">
              <SparklesIcon className="w-4 h-4" /> Luxury Commercial Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase text-left text-center">
              ORIENTAL AROMA OILS
            </h1>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-8 tracking-[0.05em] uppercase text-left text-center">
              Premium Oriental Fragrances for Luxury & Commercial Spaces
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-10 italic text-left text-center">
              Oriental aroma oils are known for their rich, warm, and long-lasting fragrance profiles. These scents are ideal for spaces that want to create a premium, elegant, and memorable atmosphere.
            </p>
            <div className="flex flex-wrap justify-center gap-5 font-sans text-left">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-xl shadow-blue-100 text-left">
                <ChatBubbleLeftRightIcon className="w-4 h-4 text-left" /> Order via WhatsApp
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 hover:border-blue-300 transition-all text-left">
                Request Samples
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 1: COLLECTION GRID ================= */}
        <section className="py-20 bg-slate-50 px-6 lg:px-12 text-left" id="collection">
          <div className="max-w-[1400px] mx-auto text-center text-left">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight text-slate-950 uppercase text-center text-left">
              Oriental <span className="italic font-light text-left">Aroma Oil Collection</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 text-left">
              {oils.map((oil, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeUp}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group flex flex-col h-full text-left"
                >
                  <div className="aspect-square bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden text-left">
                     <img 
                      src={oil.image} 
                      alt={oil.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out text-left" 
                     />
                     <div className="absolute top-5 right-5 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-slate-100 text-[9px] font-bold uppercase text-blue-600 shadow-sm text-left">
                       {oil.strength} Strength
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-blue-700 transition-colors tracking-tight italic text-left">
                    {oil.name}
                  </h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-left">
                    Category: {oil.category}
                  </p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-6 text-left">
                    Item Code: {oil.code}
                  </p>
                  
                  <div className="space-y-5 mb-10 flex-grow text-left">
                    <h4 className="text-[11px] font-black uppercase text-slate-900 border-b border-slate-100 pb-2 text-left">Fragrance Notes:</h4>
                     <div className="pb-3 border-b border-slate-100 text-left">
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Top Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.top}</p>
                     </div>
                     <div className="pb-3 border-b border-slate-100 text-left">
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Middle Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.middle}</p>
                     </div>
                     <div className="text-left">
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Base Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.base}</p>
                     </div>
                  </div>

                  <Link 
                    to={oil.path}
                    className="w-full py-4 bg-slate-50 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm font-sans text-left"
                  >
                    View Product Details <ArrowRightIcon className="w-3.5 h-3.5 text-left" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: ABOUT OILS ================= */}
        <section className="py-32 bg-white px-6 text-left">
          <div className="max-w-[1000px] mx-auto text-center text-left">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-6xl font-serif mb-10 tracking-tight text-slate-950 leading-tight uppercase text-left text-center">
                About Our <span className="italic font-light text-slate-700 text-left">Oriental Aroma Oils</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 font-sans text-left text-center text-justify md:text-center">
                Our oriental aroma oils are professional-grade fragrances designed for use with advanced scent diffuser systems. Each fragrance is carefully selected to deliver consistent diffusion, balanced intensity, and long-lasting performance across different space sizes.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans text-justify md:text-center text-left">
                These fragrances are commonly used in hotels, premium offices, showrooms, and high-end commercial environments where scent plays a key role in customer experience and brand perception.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: BEST USED FOR ================= */}
        <section className="py-24 bg-slate-950 text-white px-6 text-left">
          <div className="max-w-[1200px] mx-auto text-center text-left">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 tracking-tight text-blue-400 italic font-light uppercase text-left text-center">Best Used For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
              {[
                { icon: BuildingOffice2Icon, label: "Hotels & resorts" },
                { icon: ShoppingBagIcon, label: "Luxury showrooms" },
                { icon: BuildingOffice2Icon, label: "Premium offices" },
                { icon: HomeIcon, label: "High-end residential spaces" }
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col items-center gap-6 hover:bg-blue-600/10 transition-colors group text-left">
                   <item.icon className="w-14 h-14 text-blue-500 group-hover:scale-110 transition-transform duration-500 text-left" />
                   <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-200 font-sans text-center text-left">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6 text-left">
          <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl text-left">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full text-left" />
            <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-left text-center">Create a Memorable <br/> <span className="italic font-light text-slate-300 text-left">Atmosphere</span></h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-left text-center">
              Ready to elevate your space with our premium Oriental oils? Our scent experts are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans text-left text-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3 text-left">
                 <ChatBubbleLeftRightIcon className="w-5 h-5 text-left" /> WhatsApp Scent Expert
              </a>
              <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3 text-left text-center">
                Contact Cool Max <ArrowRightIcon className="w-5 h-5 text-left" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default OrientalAromaOilsPage;