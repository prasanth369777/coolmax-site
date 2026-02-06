import React from "react";
import { motion } from "framer-motion";
import { 
  BuildingStorefrontIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  BoltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/Titan Diffuser/1.webp"; 
import Product3 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/4.webp"; 

// Optimized animation settings
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function CommercialDiffusersPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION (DECREASED HEIGHT) ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 gap-12">
          
          <div className="lg:w-1/2 flex flex-col items-start text-left z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Boost Sales & Engagement
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Commercial <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusers.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Elevate Your Business Ambiance with Professional Scenting.
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic">
                  Cool Max provides advanced commercial scenting solutions that turn ordinary business spaces into memorable experiences. Designed for retail stores, spas, gyms, and corporate offices.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Get a Quote
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] p-6"
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Commercial Diffuser Hero" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.1)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION (COMPACT GRID) ================= */}
        <section className="py-20 border-t border-slate-100">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Commercial Units</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter">Our Scent Collection</h3>
            <p className="text-lg text-slate-500 mt-4 font-light">
              Explore our versatile range of aroma machines designed for medium to large business environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: Product1, path: "/product/mistbox", name: "ProScent 2000", tag: "Versatile Retail Diffuser", desc: "A flexible scent machine that can be wall-mounted or placed on a shelf. It delivers powerful fragrance coverage for retail shops and mid-sized spaces.", suits: ["Fashion Boutiques", "Cafes", "Clinics"] },
              { img: Product2, path: "/product/titan", name: "RetailAir Max", tag: "High-Traffic Area System", desc: "Built for busy environments, this durable diffuser maintains consistent scent intensity even during peak hours. Can be connected to HVAC or used standalone.", suits: ["Supermarkets", "Gyms", "Hotel Lobbies"] },
              { img: Product3, path: "/product/aeroblack-med", name: "OmniScent", tag: "Smart Business Diffuser", desc: "Featuring advanced programmable timers and app control (optional), this diffuser offers precise scent management for businesses with varying operating hours.", suits: ["Corporate Offices", "Banks", "Spas"] }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                {...smoothFadeUp}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-[3rem] bg-slate-50 border border-slate-200 transition-colors duration-300 hover:bg-white hover:shadow-2xl"
              >
                {/* COMPACT IMAGE CONTAINER */}
                <div className="h-64 w-full bg-white rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center p-8 border border-slate-50">
                  <img src={product.img} alt={product.name} className="h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-1 tracking-tight">{product.name}</h3>
                <p className="text-blue-600 font-black text-[9px] uppercase tracking-[0.3em] mb-4">{product.tag}</p>
                <p className="text-slate-500 mb-6 leading-relaxed font-light text-base h-20 overflow-hidden">
                  {product.desc}
                </p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 text-left shadow-sm">
                  <span className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Best suited for:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.suits.map((suit, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-700">
                        <CheckCircleIcon className="w-3 h-3 text-blue-500"/> {suit}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={product.path} className="block w-full py-4 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-600 transition-all text-center">
                  View product details
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 2: WHY INVEST (COMPACT) ================= */}
        <section className="py-20">
          <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-16 flex flex-col justify-center bg-white text-left">
                <motion.div {...smoothFadeUp}>
                  <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
                    Why Invest in <br/>
                    <span className="italic text-slate-300 font-light">Commercial Scenting?</span>
                  </h2>
                  <p className="text-slate-500 mb-10 leading-relaxed text-xl font-light">
                    Scent marketing is a powerful tool. In a competitive market, the right aroma can increase dwell time, boost sales, and create a lasting brand connection.
                  </p>
                  
                  <ul className="space-y-6">
                    {[
                      { title: "Enhance Brand Identity", desc: "Create a signature scent that customers recognize instantly." },
                      { title: "Increase Dwell Time", desc: "Customers stay up to 40% longer in pleasantly scented environments." },
                      { title: "Eliminate Odors", desc: "Neutralize unwanted smells from food, sweat, or chemicals." },
                      { title: "Boost Sales Conversion", desc: "Studies show improved willingness to purchase in scented stores." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-5 group text-left">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <CheckCircleIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="relative min-h-[400px] lg:min-h-full overflow-hidden group">
                 <img src={FeatureImg} alt="Retail Scenting" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent text-center">
                    <div className="p-8 bg-white/80 backdrop-blur-md rounded-[2rem] border border-white/50">
                      <p className="text-slate-900 font-serif text-2xl italic leading-tight">
                        "Customers stay up to 40% longer in pleasantly scented environments."
                      </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-24">
          <motion.div {...smoothFadeUp} className="text-center mb-16">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Presence</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter">Industries We Serve</h3>
            <p className="text-lg text-slate-500 mt-4 font-light max-w-2xl mx-auto">
              Cool Max commercial scent machines are engineered to perform across diverse business sectors in the UAE.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Retail Stores & Showrooms", icon: <BuildingStorefrontIcon /> },
              { title: "Hotels & Hospitality", icon: <UserGroupIcon /> },
              { title: "Banks & Corporate Offices", icon: <CurrencyDollarIcon /> },
              { title: "Spas & Wellness Centers", icon: <SparklesIcon /> },
              { title: "Gyms & Fitness Clubs", icon: <BoltIcon /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...smoothFadeUp}
                transition={{ delay: idx * 0.1 }}
                className="w-full md:w-[45%] lg:w-[18%] p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-6 border border-slate-100 shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= MASTER CTA (COMPACT) ================= */}
        <section className="py-24 text-center bg-slate-50 rounded-[4rem] mb-20 border border-slate-200">
          <motion.div {...smoothFadeUp} className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">
              Ready to Upgrade Your <br/> 
              <span className="italic text-blue-600 font-light">Atmosphere?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Whether you run a boutique, a gym, or a corporate office, Cool Max offers professional commercial aroma diffusers that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all shadow-xl hover:bg-blue-600 flex items-center justify-center gap-3">
                Request a Free Quote <ArrowRightIcon className="w-5 h-5"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl overflow-hidden transition-all shadow-xl hover:bg-[#128C7E] flex items-center justify-center gap-3"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}