import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  SparklesIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  HomeIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECTED ASSET IMPORTS FROM AROMA OILS IMG FOLDER ---
import P1 from "../../asset/Aroma oils img/ADDRESS.webp"; 
import P2 from "../../asset/Aroma oils img/ARABIAN PENSUILA.webp"; 
import P3 from "../../asset/Aroma oils img/ARABIAN  BAKHOOR.webp"; 
import P4 from "../../asset/Aroma oils img/EMAAR.webp"; 

const OrientalAromaOilsPage = () => {
  // Redirection Links
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Oriental%20Aroma%20Oils%20Collection.`;
  const contactPath = "/contact";

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
      path: "/aroma/address",
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
      path: "/aroma/arabian-peninsula",
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
      path: "/aroma/arabian-bakhour",
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
      path: "/aroma/emaar",
      top: "Rose, Floral",
      middle: "Cedarwood, Saffron",
      base: "Musk, Patchouli",
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
      <Helmet>
        <title>Oriental Aroma Oils for Hotels & Luxury Spaces | Cool Max Scent</title>
        <meta name="description" content="Explore premium oriental aroma oils by Cool Max Scent. Discover rich, long-lasting fragrances designed for hotels, offices, and luxury commercial spaces." />
        <link rel="canonical" href="https://coolmaxscent.com/oriental-aroma-oil" />
      </Helmet>

      <div className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-center">
              <SparklesIcon className="w-4 h-4" /> Luxury Commercial Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-6 leading-[1.1] tracking-tighter uppercase text-center">
              ORIENTAL AROMA OILS
            </h1>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-8 tracking-[0.05em] uppercase text-center">
              Premium Oriental Fragrances for Luxury & Commercial Spaces
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-10 italic text-center">
              Oriental aroma oils are known for their rich, warm, and long-lasting fragrance profiles. These scents are ideal for spaces that want to create a premium, elegant, and memorable atmosphere.
            </p>
            <div className="flex flex-wrap justify-center gap-5 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-xl shadow-blue-100">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> Order via WhatsApp
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 hover:border-blue-300 transition-all">
                Request Samples
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 1: COLLECTION GRID ================= */}
        <section className="py-20 bg-slate-50 px-6 lg:px-12" id="collection">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight text-slate-950 uppercase">
              Oriental <span className="italic font-light text-slate-700">Aroma Oil Collection</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {oils.map((oil, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeUp}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group flex flex-col h-full text-left"
                >
                  <div className="aspect-square bg-slate-50 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden">
                     <img 
                      src={oil.image} 
                      alt={oil.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
                     />
                     <div className="absolute top-5 right-5 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-slate-100 text-[9px] font-bold uppercase text-blue-600 shadow-sm">
                       {oil.strength} Strength
                     </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-blue-700 transition-colors tracking-tight italic text-left">{oil.name}</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 text-left">Category: {oil.category}</p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-6 text-left">Item Code: {oil.code}</p>
                  
                  <div className="space-y-5 mb-10 flex-grow text-left">
                    <h4 className="text-[11px] font-black uppercase text-slate-900 border-b border-slate-100 pb-2">Fragrance Notes:</h4>
                     <div className="pb-3 border-b border-slate-100">
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Top Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.top}</p>
                     </div>
                     <div className="pb-3 border-b border-slate-100">
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Middle Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.middle}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Base Notes</p>
                       <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.base}</p>
                     </div>
                  </div>

                  <Link 
                    to={oil.path}
                    className="w-full py-4 bg-slate-50 text-slate-900 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm font-sans"
                  >
                    View Product Details <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: ABOUT OILS ================= */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-6xl font-serif mb-10 tracking-tight text-slate-950 leading-tight uppercase text-center">
                About Our <span className="italic font-light text-slate-700">Oriental Aroma Oils</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 font-sans text-center">
                Our oriental aroma oils are professional-grade fragrances designed for use with advanced scent diffuser systems. Each fragrance is carefully selected to deliver consistent diffusion, balanced intensity, and long-lasting performance across different space sizes.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans text-justify md:text-center">
                These fragrances are commonly used in hotels, premium offices, showrooms, and high-end commercial environments where scent plays a key role in customer experience and brand perception.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: BEST USED FOR ================= */}
        <section className="py-24 bg-slate-950 text-white px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 tracking-tight text-blue-400 italic font-light uppercase text-center">Best Used For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { icon: BuildingOffice2Icon, label: "Hotels & resorts" },
                { icon: ShoppingBagIcon, label: "Luxury showrooms" },
                { icon: BuildingOffice2Icon, label: "Premium offices" },
                { icon: HomeIcon, label: "High-end residential spaces" }
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col items-center gap-6 hover:bg-blue-600/10 transition-colors group">
                   <item.icon className="w-14 h-14 text-blue-500 group-hover:scale-110 transition-transform duration-500" />
                   <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-200 font-sans text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
            <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase text-center">Create a Memorable <br/> <span className="italic font-light text-slate-300">Atmosphere</span></h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center">
              Ready to elevate your space with our premium Oriental oils? Our scent experts are ready to assist you.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3 text-center">
                 <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
              </a>
              <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3 text-center">
                Contact Cool Max <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default OrientalAromaOilsPage;