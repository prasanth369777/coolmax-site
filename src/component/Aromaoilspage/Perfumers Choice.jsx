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
  ChatBubbleLeftRightIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS (Mapping P10-P19 for 10 Oils) ---
import P10 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp"; 
import P11 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp";
import P12 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp";
import P13 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/2.webp";
import P14 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp";
import P15 from "../../asset/productimg/CMwebpimg/AirPulse 150/4.webp";
import P16 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/3.webp";
import P17 from "../../asset/productimg/CMwebpimg/DeskScent/3.webp";
import P18 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/4.webp";
import P19 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp";

const PerfumersChoiceOilsPage = () => {
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Perfumers%20Choice%20Collection.`;
  const contactPath = "/contact";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const oils = [
    {
      name: "Harmony Aroma Oil",
      image: P10,
      code: "CM-0107-OR",
      category: "Perfumers Choice",
      strength: "Medium",
      path: "/aroma/harmony",
      top: "Bergamot, Pink Pepper, Pear",
      middle: "Rose, Jasmine, Orris",
      base: "Sandalwood, Cedarwood, Musk, Amber",
    },
    {
      name: "Event Aroma Oil",
      image: P11,
      code: "CM-0108-OR",
      category: "Perfumers Choice",
      strength: "Strong",
      path: "/aroma/event",
      top: "Lavender, Rosemary",
      middle: "Cedar, Wood",
      base: "Pepper",
    },
    {
      name: "For You Aroma Oil",
      image: P12,
      code: "CM-0109-OR",
      category: "Perfumers Choice",
      strength: "Medium",
      path: "/aroma/for-you",
      top: "Yuzu, Pomegranate, Apricot, Bergamot",
      middle: "Jasmine, Peony, Magnolia, Peach, Osmanthus, Lotus Flower",
      base: "White Musk, Vanilla, Mahogany, Amber",
    },
    {
      name: "Passion Aroma Oil",
      image: P13,
      code: "CM-0110-OR",
      category: "Perfumers Choice",
      strength: "Strong",
      path: "/aroma/passion",
      top: "Exquisite Aroma",
      middle: "Floral Essence",
      base: "Elegant Finish",
    },
    {
      name: "Gold Aroma Oil",
      image: P14,
      code: "CM-0111-OR",
      category: "Perfumers Choice",
      strength: "Strong",
      path: "/aroma/gold",
      top: "Bergamot, Pink Pepper, Mandarin",
      middle: "Jasmine, Rose, Patchouli",
      base: "Amber, Vanilla, Oud, Musk",
    },
    {
      name: "Tuscan Leather Aroma Oil",
      image: P15,
      code: "CM-0112-OR",
      category: "Perfumers Choice",
      strength: "Strong",
      path: "/aroma/tuscan-leather",
      top: "Fruity, Green, Aromatic",
      middle: "Floral, Powdery",
      base: "Leather, Woody, Musky",
    },
    {
      name: "Story Aroma Oil",
      image: P16,
      code: "CM-0113-OR",
      category: "Perfumers Choice",
      strength: "Medium",
      path: "/aroma/story",
      top: "Citrus Zest, Pink Pepper, Bergamot",
      middle: "Jasmine Petals, Rosewood, Cardamom",
      base: "Sandalwood, Vanilla Bean, Musk",
    },
    {
      name: "Brown Orchid Aroma Oil",
      image: P17,
      code: "CM-0114-OR",
      category: "Perfumers Choice",
      strength: "Medium",
      path: "/aroma/brown-orchid",
      top: "Orange, Bergamot, Greedy, Jasmine",
      middle: "White Flowers, Lilac, Violet",
      base: "Musk, Vanilla, Cedar Wood, Dry Woody, Patchouli",
    },
    {
      name: "Scents Natural Aroma Oil",
      image: P18,
      code: "CM-0115-OR",
      category: "Perfumers Choice",
      strength: "Medium",
      path: "/aroma/scents-natural",
      top: "Bergamot, Tangerine, Black Currant, Nectarine, Apple",
      middle: "Gardenia, Magnolia, Jasmine, Freesia, Lily-of-the-Valley",
      base: "Patchouli, Musk, Sandalwood, Vanilla, Amber",
    },
    {
      name: "Splendor Aroma Oil",
      image: P19,
      code: "CM-0116-OR",
      category: "Perfumers Choice",
      strength: "Strong",
      path: "/aroma/splendor",
      top: "Bergamot, Green Apple, Grapefruit",
      middle: "Jasmine, Rose, Violet, Orchid",
      base: "Amber, Cedarwood, Patchouli, Musk, Vanilla",
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
        <title>Perfumers Choice Aroma Oils for Offices & Homes | Cool Max</title>
        <meta name="description" content="Explore Perfumers Choice aroma oils by Cool Max Scent. Discover elegant, balanced fragrances like Harmony, Event, Gold, Tuscan Leather, and more." />
        <link rel="canonical" href="https://coolmaxscent.com/perfumers-choice-aroma-oil" />
      </Helmet>

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <SparklesIcon className="w-4 h-4" /> Fine Perfumery Series
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-950 mb-4 leading-[1.1] tracking-tighter uppercase">
              Perfumers Choice Aroma Oils
            </h1>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-8 tracking-[0.05em] uppercase">
              Elegant, Balanced & Everyday Fragrances for Professional Spaces
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light mb-10 italic">
              Perfumers Choice aroma oils are inspired by fine perfumery, offering a perfect balance between freshness, florals, and warm base notes. These fragrances are designed for daily use, creating a pleasant and comfortable environment without being overpowering.
            </p>
            <p className="text-base text-slate-400 max-w-3xl mx-auto mb-10 font-sans">
              At Cool Max Scent, our Perfumers Choice collection is ideal for spaces that require a refined, professional, and universally appealing scent experience.
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
              Perfumers Choice <span className="italic font-light">Aroma Oil Collection</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oils.map((oil, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeUp}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group flex flex-col h-full"
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
                    {oil.top && (
                      <div className="pb-3 border-b border-slate-100">
                        <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Top Notes</p>
                        <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.top}</p>
                      </div>
                    )}
                    {oil.middle && (
                      <div className="pb-3 border-b border-slate-100">
                        <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Middle Notes</p>
                        <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.middle}</p>
                      </div>
                    )}
                    {oil.base && (
                      <div>
                        <p className="text-[9px] font-bold uppercase text-slate-400 mb-1.5 tracking-widest text-left">Base Notes</p>
                        <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{oil.base}</p>
                      </div>
                    )}
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

        {/* ================= SECTION 2: ABOUT ================= */}
        <section className="py-32 bg-white px-6">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-6xl font-serif mb-10 tracking-tight text-slate-950 leading-tight uppercase">
                About Our <span className="italic font-light text-slate-700">Perfumers Choice Aroma Oils</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 font-sans">
                Perfumers Choice aroma oils are professional-grade fragrances developed for use with advanced scent diffuser systems. These oils are carefully selected to provide a smooth, balanced scent experience that suits everyday environments.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans text-justify md:text-center">
                They are ideal for businesses and homes that want a refined fragrance without overwhelming intensity.
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
                { icon: BuildingOffice2Icon, label: "Offices & corporate spaces" },
                { icon: HomeIcon, label: "Homes & residential interiors" },
                { icon: ShoppingBagIcon, label: "Boutiques & retail stores" },
                { icon: UserGroupIcon, label: "Reception areas" },
                { icon: SparklesIcon, label: "Premium commercial environments" }
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
            <h2 className="text-3xl md:text-5xl font-serif mb-16 tracking-tight text-slate-950 uppercase text-center">
              Explore More <span className="italic font-light text-slate-700">Fragrance Categories</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-sans">
              {[
                { name: "Oriental Aroma Oils", path: "/Oriental-Fragrances" },
                { name: "Fresh Aroma Oils", path: "/Fresh-Fragrances" },
                { name: "Fruity Fragrances", path: "/Fruity-Fragrances" },
                { name: "Food & Beverage Fragrances", path: "/Food-BeverageFragrances" },
                { name: "Premium Collection", path: "/Premium-Collection" }
              ].map((cat, i) => (
                <Link 
                  key={i} 
                  to={cat.path}
                  className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 mb-2 text-center">Collection</p>
                  <h4 className="text-sm font-bold text-slate-800 text-center">{cat.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
            <h2 className="text-4xl md:text-7xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase italic text-slate-200">Refine Your Environment</h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center">
              Ready to elevate your space with a professional fragrance choice? Our scent experts are standing by to guide your selection.
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

export default PerfumersChoiceOilsPage;