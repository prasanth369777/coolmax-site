import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

// --- IMAGE ASSETS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Aerosol Dispensers/2.webp"; 
import Dispenser from "../../asset/productimg/CMwebpimg/Aerosol Dispensers/1.webp"; 
import DispenserBlackLCD from "../../asset/productimg/CMwebpimg/Aerosol Dispensers/4.webp"; 
import DispenserWhiteLED from "../../asset/productimg/CMwebpimg/Aerosol Dispensers/5.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Aerosol Dispensers/3.webp"; 

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function AerosolDispensersPage() {
  const whatsappNumber = "+971509282702";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Aerosol Dispensers in UAE | Cool Max Scent";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Discover automatic aerosol dispensers in UAE for commercial spaces. Consistent fragrance and hygiene control by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION (H1) ================= */}
        <section className="min-h-[70vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-10 gap-10 text-left">
          
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 text-left">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
                  Automatic Fragrance & Hygiene Control
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95] text-left">
                Aerosol <br />
                <span className="italic text-slate-400 font-light pr-2">Dispensers in UAE</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed text-left">
                Automatic Fragrance & Hygiene Control for Commercial Spaces
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic text-left text-justify">
                  Cool Max aerosol dispensers are designed to deliver consistent fragrance and hygiene support in washrooms, corridors, offices, and public areas. These automatic dispensers provide controlled scent release using standard aerosol refills, making them ideal for high-traffic commercial environments where simplicity and reliability matter. Our aerosol dispenser solutions are widely used across offices, hotels, restaurants, clinics, malls, and commercial facilities in the UAE.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans text-left">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  View Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] p-6 text-center"
            >
              <div className="absolute inset-0 bg-slate-50 rounded-[3rem] border border-slate-200 shadow-inner" />
              <img 
                src={HeroImg} 
                alt="Automatic Aerosol Dispenser UAE" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] mx-auto" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT RANGE (H2) ================= */}
        <section id="collection" className="py-16 border-t border-slate-100 text-left">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Aerosol Dispenser Range</h2>
            <p className="text-lg text-slate-500 mt-4 font-light max-w-2xl mx-auto">
              Explore our range of automatic aerosol dispensers designed for easy operation, clean installation, and dependable daily performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            
            {/* Product 1: White LCD (H3) */}
            <motion.div {...fadeInUp} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
              <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-12 border border-slate-100">
                <img src={Dispenser} alt="Aerosol Dispenser White LCD" className="h-full object-contain transition-transform group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">Aerosol Dispenser</h3>
              <p className="text-slate-500 mb-6 font-light leading-relaxed text-justify">
                A sleek automatic aerosol dispenser with LCD display, designed for controlled fragrance release in professional environments.
              </p>
              <div className="space-y-2 mb-8 text-left">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-sans">Key Highlights:</p>
                <ul className="text-sm text-slate-600 space-y-1 font-sans font-medium">
                  <li>• LCD display for time & mode visibility</li>
                  <li>• Compatible with standard 300ml aerosol refills</li>
                  <li>• Button control operation</li>
                  <li>• Wall-mountable design</li>
                  <li>• Suitable for washrooms, offices & corridors</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8 mt-auto text-left">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 font-sans text-left">Best suited for:</span>
                <p className="text-sm font-bold text-slate-700 font-sans text-left">Washrooms • Office areas • Commercial corridors</p>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all font-sans text-center"
              >
                Order Now <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Product 2: Black LCD (H3) */}
            <motion.div {...fadeInUp} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
              <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-12 border border-slate-100">
                <img src={DispenserWhiteLED} alt="Aerosol Dispenser Black LCD" className="h-full object-contain transition-transform group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">Aerosol Dispenser – Black</h3>
              <p className="text-slate-500 mb-6 font-light leading-relaxed text-justify">
                A modern black-finish LCD aerosol dispenser offering the same reliable performance with a premium professional look.
              </p>
              <div className="space-y-2 mb-8 text-left">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-sans">Key Highlights:</p>
                <ul className="text-sm text-slate-600 space-y-1 font-sans font-medium">
                  <li>• LCD screen for easy monitoring</li>
                  <li>• Standard 300ml aerosol compatibility</li>
                  <li>• Button-controlled settings</li>
                  <li>• Wall-mounted installation</li>
                  <li>• Battery powered for easy maintenance</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8 mt-auto text-left">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 font-sans text-left">Best suited for:</span>
                <p className="text-sm font-bold text-slate-700 font-sans text-left">Corporate washrooms • Hotels • Restaurants • Clinics</p>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all font-sans text-center"
              >
                Order Now <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Product 3: White LED (H3) */}
            <motion.div {...fadeInUp} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
              <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-12 border border-slate-100">
                <img src={DispenserBlackLCD} alt="Aerosol Dispenser White LED" className="h-full object-contain transition-transform group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">Aerosol Dispenser – White</h3>
              <p className="text-slate-500 mb-6 font-light leading-relaxed text-justify">
                An LED-enabled automatic aerosol dispenser designed for simple fragrance control with visual indicators.
              </p>
              <div className="space-y-2 mb-8 text-left">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest font-sans">Key Highlights:</p>
                <ul className="text-sm text-slate-600 space-y-1 font-sans font-medium">
                  <li>• LED indicator support</li>
                  <li>• Button control operation</li>
                  <li>• Compatible with 300ml aerosol refills</li>
                  <li>• Wall-mountable & space-saving</li>
                  <li>• Battery operated design</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8 mt-auto text-left">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 font-sans text-left">Best suited for:</span>
                <p className="text-sm font-bold text-slate-700 font-sans text-left">Public washrooms • Office restrooms • Retail spaces</p>
              </div>
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all font-sans text-center"
              >
                Order Now <ArrowRightIcon className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
        </section>

        {/* ================= SECTION 2: WHY USE? (H2) ================= */}
        <section className="py-16 text-left">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter text-left">Why Use Aerosol Dispensers?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl text-left">Aerosol dispensers are a practical solution for maintaining freshness and hygiene perception in enclosed areas.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
              {[
                { title: "Automatic Release", desc: "Fragrance release at set intervals.", icon: <ClockIcon /> },
                { title: "Reduced Effort", desc: "No manual spraying required.", icon: <BoltIcon /> },
                { title: "Improved Hygiene", desc: "Boosts positive hygiene perception.", icon: <ShieldCheckIcon /> },
                { title: "Easy Install", desc: "Wall-mount and battery operated.", icon: <WrenchScrewdriverIcon /> },
                { title: "Cost-Effective", desc: "Ideal for washrooms and utility areas.", icon: <SparklesIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-white/5 text-left">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight font-sans text-left">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed font-sans text-left">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-blue-300 italic font-light text-left">They are especially useful where continuous manual intervention is not practical.</p>
          </div>
        </section>

        {/* ================= SECTION 3: OUR APPROACH (H2) ================= */}
        <section className="py-16 bg-slate-50 rounded-[4rem] border border-slate-100 text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center px-8 md:px-16 text-left shadow-sm">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-left">How Cool Max Approaches Aerosol & Hygiene Solutions</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8 text-left text-justify">
                At Cool Max, we do not just supply dispensers—we provide professional scent & hygiene solutions in the UAE. Our approach ensures reliable performance and long-term results.
              </p>
              
              <div className="grid grid-cols-1 gap-4 text-left">
                {[
                  { title: "Analysis", desc: "Understanding usage areas & traffic levels", icon: <EyeIcon /> },
                  { title: "Matching", desc: "Recommending the right dispenser type", icon: <CheckCircleIcon /> },
                  { title: "Integration", desc: "Ensuring compatibility with refill solutions", icon: <CpuChipIcon /> },
                  { title: "Maintenance", desc: "Supporting ongoing maintenance & refills", icon: <WrenchScrewdriverIcon /> }
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-left">
                    <div className="text-blue-600 flex-shrink-0 text-left">{React.cloneElement(point.icon, { className: "w-6 h-6" })}</div>
                    <span className="text-sm font-bold text-slate-700 font-sans text-left">{point.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative text-left">
              <img src={FeatureImg} alt="Hygiene Control Technology" className="w-full h-auto object-cover mx-auto" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: MASTER CTA (H2) ================= */}
        <section className="py-24 text-center relative px-4 font-sans">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Need an Aerosol Dispenser <br /> <span className="italic text-blue-600 font-light text-center">for Your Facility?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center text-justify lg:text-center">
              Whether you manage an office, hotel, restaurant, or commercial facility, Cool Max offers reliable aerosol dispenser solutions tailored to your hygiene and fragrance needs.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8 text-center">Contact Cool Max today to get expert guidance or WhatsApp us for quick help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <Link to="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4 text-center"/>
              </Link>
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3 text-center"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-center" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}