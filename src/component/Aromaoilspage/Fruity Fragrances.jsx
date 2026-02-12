import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  SparklesIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  UserGroupIcon,
  CakeIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import P1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/2.webp"; 

const FruityAromaOilsPage = () => {
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Fruity%20Aroma%20Oils%20Collection.`;
  const contactPath = "/contact";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const oils = [
    {
      name: "Crystal Aroma Oil",
      image: P1,
      code: "CM-0100-FR",
      category: "Fruity",
      strength: "Strong",
      path: "/aroma/crystal", 
      top: "Zesty Bergamot",
      middle: "Ylang Ylang, Caramel",
      base: "Vanilla, Musk, Amber, Patchouli",
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="mt-16 bg-white text-slate-900 font-sans selection:bg-blue-50 overflow-hidden tracking-tight text-left">
      
      {/* ================= SEO METADATA ================= */}
      <Helmet>
        <title>Fruity Aroma Oils for Retail & Lively Space | Cool Max Scent</title>
        <meta name="description" content="Explore fruity aroma oils by Cool Max Scent, featuring fresh and vibrant fragrances like Crystal. Ideal for retail stores, malls, & energetic commercial spaces." />
        <link rel="canonical" href="https://coolmaxscent.com/fruity-aroma-oil" />
      </Helmet>

      <div className="relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <SunIcon className="w-4 h-4" /> Vibrant & Uplifting Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-4 leading-[1.1] tracking-tighter uppercase text-center">
              Fruity Aroma Oils
            </h1>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-8 tracking-[0.05em] uppercase text-center">
              Fresh, Vibrant & Uplifting Fragrances for Energetic Spaces
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-5xl mx-auto leading-relaxed font-light mb-6 text-center">
              Fruity aroma oils are crafted to create a bright, cheerful, and energetic atmosphere. These fragrances are refreshing and instantly noticeable, making spaces feel lively, welcoming, and engaging.
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-5xl mx-auto leading-relaxed font-light mb-10 italic text-center">
              At Cool Max Scent, our Fruity Aroma Oil collection is designed for environments where freshness and positivity play an important role in enhancing customer experience.
            </p>
            <div className="flex flex-wrap justify-center gap-5 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
                <ChatBubbleLeftRightIcon className="w-4 h-4" /> Order via WhatsApp
              </a>
              <Link to={contactPath} className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-blue-50 hover:border-blue-300 transition-all">
                Contact Expert
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 1: COLLECTION GRID ================= */}
        <section className="py-20 bg-slate-50 px-6 lg:px-12" id="collection">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center tracking-tight text-slate-950 uppercase">
              Fruity <span className="italic font-light text-slate-700">Aroma Oil Collection</span>
            </h2>
            
            <div className="flex justify-center">
              {oils.map((oil, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeUp}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group max-w-md flex flex-col h-full"
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
                  
                  <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-blue-700 transition-colors tracking-tight italic">Product Card – {oil.name}</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Category: {oil.category}</p>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-6">Item Code: {oil.code}</p>
                  
                  <div className="space-y-5 mb-10 flex-grow">
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
                    [View Product Details] <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: ABOUT ================= */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-6xl font-serif mb-10 tracking-tight text-slate-950 leading-tight uppercase">
                About Our <span className="italic font-light text-slate-700">Fruity Aroma Oils</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 font-sans">
                Our fruity aroma oils are professional-grade fragrances developed for use with advanced scent diffuser systems. These oils are formulated to deliver consistent diffusion and long-lasting freshness, making them ideal for spaces that require an energetic and uplifting scent presence.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans text-justify md:text-center">
                Fruity fragrances help create a positive mood and encourage customers to feel comfortable and engaged within the space.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: BEST USED FOR ================= */}
        <section className="py-24 bg-slate-950 text-white px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-20 tracking-tight text-blue-400 italic font-light uppercase">Best Used For</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { icon: ShoppingBagIcon, label: "Retail stores & boutiques" },
                { icon: BuildingOffice2Icon, label: "Shopping malls" },
                { icon: CakeIcon, label: "Cafes & casual dining spaces" },
                { icon: UserGroupIcon, label: "Reception areas" },
                { icon: SparklesIcon, label: "Youth-focused environments" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center gap-5 hover:bg-blue-600/10 transition-colors group h-full">
                   <item.icon className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-500 shrink-0" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-200 font-sans text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: EXPLORE CATEGORIES ================= */}
        <section className="py-32 bg-slate-50 px-6">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight text-slate-950 uppercase">
              Explore More <span className="italic font-light text-slate-700">Fragrance Categories</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-sans">
              {[
                { name: "Oriental Aroma Oils", path: "/Oriental-Fragrances" },
                { name: "Fresh Aroma Oils", path: "/Fresh-Fragrances" },
                { name: "Perfumers Choice", path: "/Perfumers-Choice" },
                { name: "Food & Beverage Fragrances", path: "/Food-BeverageFragrances" },
                { name: "Premium Collection", path: "/Premium-Collection" }
              ].map((cat, i) => (
                <Link 
                  key={i} 
                  to={cat.path}
                  className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 mb-2">Collection</p>
                  <h4 className="text-sm font-bold text-slate-800">{cat.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
            <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase italic text-slate-200">Energize Your Atmosphere</h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center">
              Ready to bring vibrant freshness to your space? Our scent architects will help you design a welcoming and cheerful experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center gap-3">
                 <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Scent Expert
              </a>
              <Link to={contactPath} className="px-12 py-5 bg-white/5 text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 border border-white/10 transition-all flex items-center gap-3">
                Consultation & Installation <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FruityAromaOilsPage;