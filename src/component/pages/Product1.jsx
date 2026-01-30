import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CubeIcon, 
  SpeakerWaveIcon, 
  ArrowDownTrayIcon, 
  TagIcon,
  SwatchIcon,
  BoltIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

/* ================= IMAGE IMPORTS ================= */
import M10Black from "../../asset/productimg/Model M10/M10 - 1.jpeg";
import M10White from "../../asset/productimg/Model M10/M10 - 2.jpeg";
import Q500Black from "../../asset/productimg/Model Q500/Model Q500 - 1.jpeg";
import Q500White from "../../asset/productimg/Model Q500/Model Q500 - 2.jpeg";
import M45Black from "../../asset/productimg/Model M45/Model M45 1.jpeg";
import M45White from "../../asset/productimg/Model M45/Model M45 2.jpeg";
import M41BBlack from "../../asset/productimg/Model M41-B/Model M41-B - 1.jpeg";
import M41BWhite from "../../asset/productimg/Model M41-B/Model M41-B - 2.jpeg";
import D100Black from "../../asset/productimg/Model D100/Model D100 - 1.jpeg";
import D100White from "../../asset/productimg/Model D100/Model D100 - 2.jpeg";
import H11Black from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 1.jpeg";
import H11White from "../../asset/productimg/Model H11-A-2026/Model H11-A-2026 - 10.jpeg";
import A500Black from "../../asset/productimg/Model D100/Model D100 - 11.jpeg";
import A500White from "../../asset/productimg/Model D100/Model D100 - 13.jpeg";
import VS160Black from "../../asset/productimg/Model VS160/Model VS160 - 2.jpeg";
import VS160White from "../../asset/productimg/Model VS160/Model VS160 - 1.jpeg";
import DSQBlack from "../../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (1).jpeg";
import DSQWhite from "../../asset/productimg/Model DSQ1010-1/Model DSQ1010-1 (2).jpeg";

/* ================= DATA STRUCTURE ================= */
const categoryData = [
  {
    id: "home",
    label: "Home & Desktop",
    products: [
      {
        id: "h1", name: "OpalMist Clock", model: "U2 Smart",
        desc: "2-in-1 Smart Clock Diffuser. Combines timekeeping with aromatherapy for bedside tables.",
        specs: { coverage: "50 m³", noise: "< 30dB", tank: "100ml", voltage: "5V USB" },
        variants: [{ name: "Black", img: M41BBlack }, { name: "White", img: M41BWhite }]
      },
      {
        id: "h2", name: "ZenBox Mini", model: "D50-Mini",
        desc: "Ultra-compact silent diffuser perfect for personal study desks and small bedrooms.",
        specs: { coverage: "60 m³", noise: "< 28dB", tank: "60ml", voltage: "5V USB" },
        variants: [{ name: "Black", img: M10Black }, { name: "White", img: M10White }]
      },
      {
        id: "h3", name: "AromaDesk Pro", model: "H10-A",
        desc: "Minimalist desktop unit with high-frequency ultrasonic vibration.",
        specs: { coverage: "80 m³", noise: "< 30dB", tank: "120ml", voltage: "12V" },
        variants: [{ name: "Black", img: M41BBlack }, { name: "White", img: M41BWhite }]
      },
      {
        id: "h4", name: "LuxePanel Small", model: "OV-5",
        desc: "Sleek flat-panel design that fits on bookshelves without taking space.",
        specs: { coverage: "100 m³", noise: "< 32dB", tank: "150ml", voltage: "12V" },
        variants: [{ name: "Black", img: M45Black }, { name: "White", img: M45White }]
      },
      {
        id: "h5", name: "Natural Flow", model: "M10-Eco",
        desc: "Battery-operated, eco-friendly passive diffuser for bathrooms.",
        specs: { coverage: "40 m³", noise: "0dB", tank: "Oil Pad", voltage: "Battery" },
        variants: [{ name: "Black", img: M10Black }, { name: "White", img: M10White }]
      }
    ]
  },
  {
    id: "wall",
    label: "Wall-Mounted",
    products: [
      {
        id: "w1", name: "CeilAir Pro", model: "M45-W",
        desc: "Discreet wall-mounted unit ideal for corridors and washrooms.",
        specs: { coverage: "300 m³", noise: "< 35dB", tank: "200ml", voltage: "12V" },
        variants: [{ name: "Black", img: M45Black }, { name: "White", img: M45White }]
      },
      {
        id: "w2", name: "AeroWall S", model: "M41-W",
        desc: "Compact wall diffuser with app control for scheduling.",
        specs: { coverage: "150 m³", noise: "< 32dB", tank: "150ml", voltage: "12V" },
        variants: [{ name: "Black", img: M41BBlack }, { name: "White", img: M41BWhite }]
      },
      {
        id: "w3", name: "AeroWall Max", model: "Q500-W",
        desc: "High-capacity wall unit for large waiting areas and lobbies.",
        specs: { coverage: "500 m³", noise: "< 40dB", tank: "500ml", voltage: "12V" },
        variants: [{ name: "Black", img: Q500Black }, { name: "White", img: Q500White }]
      },
      {
        id: "w4", name: "SlimLine 200", model: "SL-200",
        desc: "Ultra-thin profile wall diffuser that blends into modern architecture.",
        specs: { coverage: "200 m³", noise: "< 30dB", tank: "180ml", voltage: "12V" },
        variants: [{ name: "Black", img: M45Black }, { name: "White", img: M45White }]
      },
      {
        id: "w5", name: "CornerFit", model: "CF-100",
        desc: "Specially designed triangular unit to fit perfectly in room corners.",
        specs: { coverage: "100 m³", noise: "< 28dB", tank: "100ml", voltage: "12V" },
        variants: [{ name: "Black", img: M41BBlack }, { name: "White", img: M41BWhite }]
      }
    ]
  },
  {
    id: "commercial",
    label: "Commercial",
    products: [
      {
        id: "c1", name: "MistBox X", model: "OV-10",
        desc: "Heavy-duty commercial scent machine for retail stores.",
        specs: { coverage: "800 m³", noise: "< 42dB", tank: "800ml", voltage: "12V" },
        variants: [{ name: "Black", img: D100Black }, { name: "White", img: D100White }]
      },
      {
        id: "c2", name: "AeroBlack Med", model: "Q500-C",
        desc: "Medium range commercial diffuser with locking mechanism.",
        specs: { coverage: "500 m³", noise: "< 35dB", tank: "500ml", voltage: "12V" },
        variants: [{ name: "Black", img: Q500Black }, { name: "White", img: Q500White }]
      },
      {
        id: "c3", name: "RetailPro 1000", model: "RP-1K",
        desc: "Designed specifically for clothing stores and showrooms.",
        specs: { coverage: "1000 m³", noise: "< 45dB", tank: "1L", voltage: "24V" },
        variants: [{ name: "Black", img: D100Black }, { name: "White", img: D100White }]
      },
      {
        id: "c4", name: "LobbyMaster", model: "LM-500",
        desc: "Silent operation commercial unit for hotel reception areas.",
        specs: { coverage: "600 m³", noise: "< 38dB", tank: "500ml", voltage: "12V" },
        variants: [{ name: "Black", img: Q500Black }, { name: "White", img: Q500White }]
      },
      {
        id: "c5", name: "EventScent", model: "ES-Portable",
        desc: "Portable high-output diffuser for temporary events and weddings.",
        specs: { coverage: "700 m³", noise: "< 40dB", tank: "750ml", voltage: "Battery/AC" },
        variants: [{ name: "Black", img: D100Black }, { name: "White", img: D100White }]
      }
    ]
  },
  {
    id: "floor",
    label: "Floor Standing",
    products: [
      {
        id: "f1", name: "Titan Diffuser", model: "A700",
        desc: "Luxury aluminum floor standing unit with 360-degree dispersion.",
        specs: { coverage: "500 m³", noise: "< 36dB", tank: "500ml", voltage: "12V" },
        variants: [{ name: "Black", img: A500Black }, { name: "White", img: A500White }]
      },
      {
        id: "f2", name: "AeroPillar", model: "F-Air",
        desc: "Slim tower design, perfect for narrow hallways and corners.",
        specs: { coverage: "600 m³", noise: "< 38dB", tank: "600ml", voltage: "12V" },
        variants: [{ name: "Black", img: VS160Black }, { name: "White", img: VS160White }]
      },
      {
        id: "f3", name: "AirPole Pro", model: "G-Air",
        desc: "Advanced floor unit with high velocity fan for large lobbies.",
        specs: { coverage: "900 m³", noise: "< 40dB", tank: "800ml", voltage: "24V" },
        variants: [{ name: "Black", img: VS160Black }, { name: "White", img: VS160White }]
      },
      {
        id: "f4", name: "NanoPillar", model: "A500-S",
        desc: "Compact floor standing unit for smaller luxury boutiques.",
        specs: { coverage: "400 m³", noise: "< 35dB", tank: "400ml", voltage: "12V" },
        variants: [{ name: "Black", img: A500Black }, { name: "White", img: A500White }]
      },
      {
        id: "f5", name: "AeroMax Tower", model: "A315L",
        desc: "Industrial look floor diffuser for gyms and large venues.",
        specs: { coverage: "1000 m³", noise: "< 45dB", tank: "1L", voltage: "24V" },
        variants: [{ name: "Black", img: A500Black }, { name: "White", img: A500White }]
      }
    ]
  },
  {
    id: "hvac",
    label: "HVAC Systems",
    products: [
      {
        id: "hv1", name: "AeroBlack Pro", model: "Q3000",
        desc: "Massive output HVAC connected system for malls and airports.",
        specs: { coverage: "3000 m³", noise: "< 50dB", tank: "2L", voltage: "24V" },
        variants: [{ name: "Black", img: DSQBlack }, { name: "White", img: DSQWhite }]
      },
      {
        id: "hv2", name: "AirPulse 150", model: "VS-160",
        desc: "Compact HVAC unit for medium sized offices and homes.",
        specs: { coverage: "1500 m³", noise: "Silent", tank: "500ml", voltage: "12V" },
        variants: [{ name: "Black", img: VS160Black }, { name: "White", img: VS160White }]
      },
      {
        id: "hv3", name: "DuctMaster 500", model: "DM-500",
        desc: "Specialized nozzle design for direct duct insertion.",
        specs: { coverage: "2000 m³", noise: "< 45dB", tank: "1L", voltage: "24V" },
        variants: [{ name: "Black", img: DSQBlack }, { name: "White", img: DSQWhite }]
      },
      {
        id: "hv4", name: "CentralAir X", model: "CA-X",
        desc: "Smart HVAC diffuser with Wi-Fi control and monitoring.",
        specs: { coverage: "2500 m³", noise: "< 48dB", tank: "1.5L", voltage: "24V" },
        variants: [{ name: "Black", img: VS160Black }, { name: "White", img: VS160White }]
      },
      {
        id: "hv5", name: "MegaFlow 5K", model: "MF-5000",
        desc: "Our most powerful unit for stadiums and convention centers.",
        specs: { coverage: "5000 m³", noise: "< 55dB", tank: "5L", voltage: "110-240V" },
        variants: [{ name: "Black", img: DSQBlack }, { name: "White", img: DSQWhite }]
      }
    ]
  },
  {
    id: "car",
    label: "Automotive",
    products: [
      {
        id: "ca1", name: "DriveScent", model: "H11-A",
        desc: "Fits perfectly in cup holders. USB rechargeable.",
        specs: { coverage: "15 m³", noise: "< 30dB", tank: "10ml", voltage: "5V Battery" },
        variants: [{ name: "Black", img: H11Black }, { name: "White", img: H11White }]
      },
      {
        id: "ca2", name: "VentoCar", model: "H11-B",
        desc: "Clip-on vent diffuser for direct airflow fragrance.",
        specs: { coverage: "10 m³", noise: "< 25dB", tank: "5ml", voltage: "Passive" },
        variants: [{ name: "Black", img: H11Black }, { name: "White", img: H11White }]
      },
      {
        id: "ca3", name: "AutoElite Metal", model: "DA1004",
        desc: "Premium aluminum alloy body for luxury vehicles.",
        specs: { coverage: "20 m³", noise: "< 30dB", tank: "20ml", voltage: "5V USB" },
        variants: [{ name: "Black", img: H11Black }, { name: "White", img: H11White }]
      },
      {
        id: "ca4", name: "MotionScent", model: "MS-Auto",
        desc: "Smart sensor activates only when the car is moving.",
        specs: { coverage: "15 m³", noise: "< 28dB", tank: "15ml", voltage: "Battery" },
        variants: [{ name: "Black", img: H11Black }, { name: "White", img: H11White }]
      },
      {
        id: "ca5", name: "TravelMini", model: "TM-Go",
        desc: "Pocket-sized portable diffuser for rental cars and travel.",
        specs: { coverage: "10 m³", noise: "< 25dB", tank: "10ml", voltage: "Battery" },
        variants: [{ name: "Black", img: H11Black }, { name: "White", img: H11White }]
      }
    ]
  }
];

export default function ProductDetail() {
  const [activeCategory, setActiveCategory] = useState(categoryData[0]);
  const [activeProduct, setActiveProduct] = useState(categoryData[0].products[0]);
  const [activeVariant, setActiveVariant] = useState(categoryData[0].products[0].variants[0]);

  useEffect(() => {
    setActiveProduct(activeCategory.products[0]);
    setActiveVariant(activeCategory.products[0].variants[0]);
  }, [activeCategory]);

  const handleProductChange = (product) => {
    setActiveProduct(product);
    setActiveVariant(product.variants[0]);
  };

  return (
    <section className="relative py-24 bg-[#F8FAFC] font-sans overflow-hidden min-h-screen text-slate-600">
      
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* HEADER */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
           <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
             Product Catalogue 2026
           </span>
           <h3 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
             Precision Air <span className="italic text-blue-700">Treatment</span>
           </h3>
        </div>

        {/* --- CATEGORY TABS: Updated for two-column mobile grid --- */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/80 backdrop-blur-md p-2 rounded-3xl md:rounded-full border border-slate-200 shadow-sm w-full md:w-auto">
            <div className="grid grid-cols-2 md:flex md:flex-nowrap gap-2">
              {categoryData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 md:px-6 py-3 rounded-2xl md:rounded-full text-[10px] md:text-sm font-bold uppercase tracking-wider transition-all duration-300 text-center ${
                    activeCategory.id === cat.id 
                    ? "bg-slate-900 text-white shadow-lg" 
                    : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SIDEBAR: PRODUCT LIST */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 z-20">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <TagIcon className="w-4 h-4" /> Models
                </span>
                <span className="px-2 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-600">
                   {activeCategory.products.length} Items
                </span>
              </div>

              <div className="max-h-[300px] lg:max-h-[600px] overflow-y-auto custom-scrollbar p-3 space-y-2 bg-white">
                {activeCategory.products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductChange(product)}
                    className={`w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left border ${
                      activeProduct.id === product.id
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-100"
                    }`}
                  >
                    <div>
                      <span className={`block text-sm font-bold transition-colors ${activeProduct.id === product.id ? "text-blue-900" : "text-slate-600"}`}>
                        {product.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-medium text-slate-400">
                        {product.model}
                      </span>
                    </div>
                    {activeProduct.id === product.id && (
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN DISPLAY */}
          <div className="lg:col-span-9 grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24">
            
            {/* Left: Image Stage */}
            <div className="relative flex flex-col items-center">
               <motion.div 
                 key={activeProduct.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="relative w-full aspect-[4/5] bg-white rounded-[3rem] border border-slate-200 flex items-center justify-center overflow-hidden p-12 shadow-2xl shadow-slate-200/50"
               >
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-50 rounded-full blur-3xl opacity-60" />
                 <AnimatePresence mode="wait">
                   <motion.img
                     key={activeVariant.img}
                     src={activeVariant.img}
                     alt={activeProduct.name}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.4 }}
                     className="relative z-10 w-full h-full object-contain drop-shadow-xl mix-blend-multiply"
                   />
                 </AnimatePresence>
                 <div className="absolute top-8 right-8 px-4 py-2 bg-white/90 backdrop-blur border border-slate-100 rounded-lg shadow-sm">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {activeCategory.label}
                    </span>
                 </div>
               </motion.div>

               {/* Color Selector */}
               <div className="mt-8 flex items-center gap-6 bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <SwatchIcon className="w-4 h-4" /> Finish
                  </span>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <div className="flex gap-4">
                    {activeProduct.variants.map((variant) => (
                      <button
                        key={variant.name}
                        onClick={() => setActiveVariant(variant)}
                        className={`group relative w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center ${
                          activeVariant.name === variant.name ? "ring-2 ring-blue-500 ring-offset-2" : "hover:scale-110"
                        }`}
                        title={variant.name}
                      >
                         <span className={`w-full h-full rounded-full border border-slate-200 shadow-inner ${variant.name === 'Black' ? 'bg-slate-900' : 'bg-white'}`} />
                      </button>
                    ))}
                  </div>
               </div>
            </div>

            {/* Right: Specs & Info */}
            <div className="flex flex-col justify-center pt-4">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-12 bg-blue-600"></span>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Model: {activeProduct.model}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                  {activeProduct.name}
                </h2>
                <p className="text-slate-500 leading-relaxed text-lg font-light max-w-lg">
                  {activeProduct.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12 border-t border-slate-200 pt-8">
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <CubeIcon className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Coverage</span>
                    </div>
                    <span className="text-xl font-serif text-slate-900">{activeProduct.specs.coverage}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <SpeakerWaveIcon className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Noise Level</span>
                    </div>
                    <span className="text-xl font-serif text-slate-900">{activeProduct.specs.noise}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <BeakerIcon className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Oil Capacity</span>
                    </div>
                    <span className="text-xl font-serif text-slate-900">{activeProduct.specs.tank}</span>
                 </div>
                 <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                       <BoltIcon className="w-4 h-4" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Voltage</span>
                    </div>
                    <span className="text-xl font-serif text-slate-900">{activeProduct.specs.voltage}</span>
                 </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-300/50 hover:shadow-blue-500/30 hover:-translate-y-1">
                    Get Quote
                </button>
                <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-xs rounded-full hover:border-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2">
                   <ArrowDownTrayIcon className="w-4 h-4" />
                   Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}