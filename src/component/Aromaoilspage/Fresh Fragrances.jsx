import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  SparklesIcon, 
  ArrowRightIcon, 
  BuildingOffice2Icon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

// --- ASSET IMPORTS ---
import P5 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp"; 
import P6 from "../../asset/productimg/CMwebpimg/AeroMax Pro/1.webp"; 
import P7 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp"; 
import P8 from "../../asset/productimg/CMwebpimg/AromaDesk/4.webp"; 
import P9 from "../../asset/productimg/CMwebpimg/DriveScent/1.webp"; 

const FreshAromaOilsPage = () => {
  const whatsappNumber = "971522286401";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Cool%20Max%20Scent,%20I%20am%20interested%20in%20your%20Fresh%20Aroma%20Oils%20Collection.`;
  const contactPath = "/contact";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const oils = [
    {
      name: "Lavender Aroma Oil",
      image: P5,
      category: "Fresh",
      code: "CM-0117-FH",
      strength: "Strong",
      path: "/aroma/lavender",
      top: "Eucalyptus Leaves",
      middle: "Lavender, Fresh Accord",
      base: "Tonka Bean, Oakmoss",
    },
    {
      name: "English Lavender Aroma Oil",
      image: P6,
      category: "Fresh",
      code: "CM-0118-FH",
      strength: "Strong",
      path: "/aroma/english-lavender",
      top: "Eucalyptus, Bergamot",
      middle: "Geranium, Lavender",
      base: "Patchouli, Tonka Bean, Musk",
    },
    {
      name: "White Tea Aroma Oil",
      image: P7,
      category: "Fresh",
      code: "CM-0119-FH",
      strength: "Medium",
      path: "/aroma/white-tea",
      top: "Rose, Jasmine",
      middle: "Apple, Lemon",
      base: "Lavender, Thyme",
    },
    {
      name: "Floral Aroma Oil",
      image: P8,
      category: "Fresh",
      code: "CM-0120-FH",
      strength: "Medium",
      path: "/aroma/floral",
      top: "Orange Blossom, Bergamot",
      middle: "Tuberose, Indian Jasmine",
      base: "Madagascar Vanilla, White Musk, Virginia Cedar",
    },
    {
      name: "Lotus Flower Aroma Oil",
      image: P9,
      category: "Fresh",
      code: "CM-0121-FH",
      strength: "Medium",
      path: "/aroma/lotus-flower",
      top: "Mandarin, Orange, Orange Peel, Bergamot, Fig Leaf, Pear, Apple",
      middle: "White Lotus, Lotus Flower, Jasmine, Gardenia, Freesia",
      base: "Vanilla, Patchouli, Musk, Cashmere, Iris",
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
        <title>Fresh Aroma Oils for Home, Spas & Wellness Space | Cool Max</title>
        <meta name="description" content="Discover fresh aroma oils by Cool Max Scent, featuring clean, calming fragrances like Lavender, English Lavender, & etch for homes, clinics, and wellness space." />
        <link rel="canonical" href="https://coolmaxscent.com/fresh-aroma-oil" />
      </Helmet>

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-24 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <SparklesIcon className="w-4 h-4" /> Fresh & Wellness Series
            </div>
            <h3 className="text-5xl md:text-7xl font-serif text-slate-950 mb-4 leading-[1.1] tracking-tighter uppercase">
              Fresh <span className="italic font-light text-slate-700">Aroma Oils</span>
            </h3>
            <p className="text-lg md:text-xl text-blue-600 font-medium mb-8 tracking-[0.05em] uppercase">
              Clean, Calm & Refreshing Fragrances for Wellness & Everyday Spaces
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-5xl mx-auto leading-relaxed font-light mb-6">
              Fresh aroma oils are designed to create a clean, soothing, and refreshing atmosphere. These fragrances are ideal for spaces that focus on comfort, relaxation, and freshness, helping people feel calm and at ease.
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-5xl mx-auto leading-relaxed font-light mb-10 italic">
              At Cool Max Scent, our Fresh Aroma Oil collection features carefully balanced fragrances inspired by nature, florals, and herbal notes, making them perfect for both residential and commercial environments.
            </p>
            <div className="flex flex-wrap justify-center gap-5 font-sans">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 shadow-xl shadow-blue-100">
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
              Fresh <span className="italic font-light">Aroma Oil</span> Collection
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oils.map((oil, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeUp}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all group flex flex-col"
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
                About Our <span className="italic font-light text-slate-700">Fresh Aroma Oils</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-8 font-sans">
                Our fresh aroma oils are professional-grade fragrances developed for use with advanced scent diffuser systems. These fragrances are formulated to deliver consistent diffusion and balanced intensity, creating a pleasant and refreshing environment without being overpowering.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light font-sans text-justify md:text-center">
                Fresh aroma oils are widely chosen for spaces where calmness, cleanliness, and comfort are essential to the overall experience.
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
                { icon: HomeIcon, label: "Homes & residential spaces" },
                { icon: ShieldCheckIcon, label: "Clinics & hospitals" },
                { icon: HeartIcon, label: "Spas & wellness centers" },
                { icon: SparklesIcon, label: "Yoga & meditation areas" },
                { icon: BuildingOffice2Icon, label: "Offices & reception areas" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center gap-5 hover:bg-blue-600/10 transition-colors group">
                   <item.icon className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-500" />
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
                { name: "Fruity Fragrances", path: "/Fruity-Fragrances" },
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
            <h2 className="text-4xl md:text-6xl font-serif mb-10 relative z-10 tracking-tighter leading-tight uppercase italic text-slate-200">Refresh Your Space</h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-12 relative z-10 max-w-3xl mx-auto leading-relaxed font-light font-sans text-center">
              Ready to bring calm and freshness to your environment? Our specialists are here to help you select the perfect aroma system.
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

export default FreshAromaOilsPage;