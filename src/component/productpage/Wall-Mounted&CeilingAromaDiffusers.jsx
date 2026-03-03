import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  BuildingOfficeIcon, 
  WrenchScrewdriverIcon, 
  CheckCircleIcon, 
  QueueListIcon, 
  ShieldCheckIcon,
  ArrowRightIcon,
  Square2StackIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowsPointingOutIcon,
  BoltIcon,
  ClockIcon,
  AcademicCapIcon,
  BeakerIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS BASED ON YOUR DIRECTORY ---
import HeroImg from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/2.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/AeroMax Pro/4.webp"; 
import Product3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp"; 
import Product4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp"; 
import Product5 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/5.webp"; 

// Optimized animation settings
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function WallMountedDiffusersPage() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Wall-Mounted & Ceiling Aroma Diffusers in UAE | Cool Max";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore wall-mounted & ceiling aroma diffusers in UAE for offices, clinics, and commercial spaces. Space-saving, professional scent solutions by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      {/* ================= SEO METADATA ================= */}
     
        <link rel="canonical" href="https://www.coolmaxscent.com/wall-mounted-and-ceiling-aroma-diffurers/" />
   
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 relative z-10">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Wall-Mounted & Ceiling Aroma Diffusers in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Wall-Mounted & Ceiling <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusers in UAE.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                Professional Fixed-Installation Scent Solutions for Commercial Spaces
              </h2>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic">
                  Wall-Mounted Aroma Diffusers and Ceiling Aroma Diffusers from Cool Max are designed for spaces where consistent fragrance coverage is required without occupying desk or floor space. These professional scent diffuser machines are ideal for offices, clinics, corridors, reception areas, and commercial interiors where a clean, fixed installation is preferred.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans text-left">
                <Link to="/contact/" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl text-center">
                  Get a Quote
                </Link>
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 justify-center text-center"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] p-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50 text-center" />
              <img 
                src={HeroImg} 
                alt="Wall-Mounted and Ceiling Diffusers UAE" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl mx-auto" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section className="py-20 border-t border-slate-100 text-left">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none text-center">Our Wall-Mounted & Ceiling Diffuser Range</h2>
            <p className="text-lg text-slate-500 mt-4 font-light text-center">Explore our range of fixed-installation aroma diffusers designed for reliable daily use in commercial and semi-commercial environments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1400px] mx-auto text-left">
            {[
              { 
                img: Product1, 
                name: "CeilAir Pro – Ceiling-Mounted Aroma Diffuser", 
                desc: "A discreet Ceiling Aroma Diffusers unit designed for even fragrance distribution in enclosed commercial spaces. Ideal where minimal visual presence is required.",
                suits: "Corridors • Clinics • Small lobbies • Office hallways",
                path: "/wall-mounted-and-ceiling-aroma-diffusers/ceil-air-pro-diffuser/"
              },
              { 
                img: Product2, 
                name: "AeroMax Pro – Wall-Mounted Professional Diffuser", 
                desc: "A robust Wall-Mounted Aroma Diffusers unit designed for steady performance and consistent fragrance output throughout the day.",
                suits: "Offices • Waiting areas • Reception zones • Meeting rooms",
                path: "/wall-mounted-and-ceiling-aroma-diffurers/aeromax-pro-diffuser/"
              },
              { 
                img: Product3, 
                name: "ZenBox Mini – Small Room Aroma Diffuser", 
                path: "/wall-mounted-and-ceiling-aroma-diffurers/zenbox-mini-diffuser/", 
                desc: "A compact diffuser designed for enclosed spaces where consistent fragrance is needed without overwhelming the environment.", 
                suits: "Small rooms • Meeting rooms • Personal spaces" 
              },
              { 
                img: Product4, 
                name: "AeroCube – Professional Desktop Diffuser", 
                path: "/wall-mounted-and-ceiling-aroma-diffusers/aerocube-diffuser/", 
                desc: "Designed for steady daily use, this diffuser provides reliable fragrance output for professional environments.", 
                suits: "Corporate desks • Clinics • Reception counters" 
              },
              { 
                img: Product5, 
                name: "LuxePanel – Premium Desk & Cabin Diffuser", 
                path: "/wall-mounted-and-ceiling-aroma-diffurers/luxepanel-diffuser/", 
                desc: "A refined aroma diffuser with a clean, modern design. Ideal for users who want both performance and aesthetics.", 
                suits: "Executive desks • Cabins • Premium workspaces" 
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                {...smoothFadeUp}
                className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full"
              >
                <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-8 border border-slate-100 shadow-sm text-center">
                  <img src={product.img} alt={product.name} className="h-full object-contain transition-transform group-hover:scale-105 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 text-left">{product.name}</h3>
                <p className="text-slate-600 mb-6 font-light flex-grow text-left text-justify md:text-left">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8 text-left">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 font-sans text-left">Best suited for:</span>
                  <p className="text-[10px] font-bold text-slate-700 leading-relaxed uppercase tracking-wider font-sans text-left">{product.suits}</p>
                </div>
                <Link to={product.path} className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black uppercase text-center text-[10px] tracking-widest hover:bg-blue-600 transition-all font-sans">
                  View product details
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: WHY CHOOSE ================= */}
        <section className="py-16 text-left">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter leading-none text-left uppercase">Why Choose Wall-Mounted & Ceiling Aroma Diffusers in UAE?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl text-left">Fixed-installation aroma diffusers are preferred in professional environments where space efficiency and reliability are important.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Space-Saving Design", desc: "Wall and ceiling mounting keeps desks and floors clear.", icon: <ArrowsPointingOutIcon /> },
                { title: "Even Fragrance Distribution", desc: "Strategic mounting allows fragrance to spread uniformly across the space.", icon: <SparklesIcon /> },
                { title: "Professional Appearance", desc: "Clean installation enhances the overall look of the interior.", icon: <CheckCircleIcon /> },
                { title: "Low Maintenance", desc: "Designed for continuous operation with minimal attention.", icon: <ClockIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4 text-left">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 text-left">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-lg leading-tight font-sans text-left">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed text-left font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED ================= */}
        <section className="py-20 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">Where Our Fixed Diffusers Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { icon: <Square2StackIcon />, title: "Office corridors and hallways" },
              { icon: <BeakerIcon />, title: "Clinics and healthcare facilities" },
              { icon: <QueueListIcon />, title: "Reception and waiting areas" },
              { icon: <BuildingOfficeIcon />, title: "Commercial cabins and meeting rooms" },
              { icon: <AcademicCapIcon />, title: "Educational institutions" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center hover:bg-white transition-all shadow-sm text-center">
                <div className="w-10 h-10 text-blue-600 mb-6 text-center">{item.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 text-center leading-tight font-sans">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-16 bg-slate-50 rounded-[4rem] border border-slate-100 text-left">
          <div className="grid lg:grid-cols-2 gap-16 items-center px-8 md:px-16 text-left shadow-sm">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-left uppercase font-bold">How Wall-Mounted & Ceiling Aroma Diffusers Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8 text-justify text-left">
                These aroma diffusers use controlled atomization technology to release fragrance evenly into the air. Their fixed position allows consistent diffusion without interference from movement or airflow changes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: "Quiet operation", icon: <SpeakerXMarkIcon /> },
                  { title: "Controlled fragrance intensity", icon: <BoltIcon /> },
                  { title: "Durable design for daily use", icon: <WrenchScrewdriverIcon /> },
                  { title: "Efficient fragrance consumption", icon: <SparklesIcon /> }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" text-left />
                    <span className="text-sm font-bold text-slate-700 font-sans text-left">{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative text-center">
              <img src={FeatureImg} alt="Ceiling Scenting Technology" className="w-full h-auto object-cover mx-auto" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: HOW TO CHOOSE ================= */}
        <section className="py-16 text-left border-t border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">How to Choose the Right Fixed Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left font-sans">
            {[
              { title: "Space Layout", desc: "Wall or ceiling placement should allow even fragrance distribution." },
              { title: "Area Size", desc: "Choose a diffuser designed to match the room size." },
              { title: "Foot Traffic", desc: "High-traffic areas benefit from continuous diffusion." },
              { title: "Design Preference", desc: "Discreet designs work best in professional interiors." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm text-left">
                <h3 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3 text-left font-sans">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed text-left text-justify md:text-left font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: WHY COOL MAX ================= */}
        <section className="py-16 text-left font-sans border-t border-slate-100">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-sm text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-none text-center lg:text-left uppercase font-bold">Why Choose Cool Max?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "UAE-based company with local support",
                "Professional-grade scent diffuser machines",
                "Suitable for offices, clinics, and commercial spaces",
                "Easy maintenance and refill support",
                "Trusted by businesses across UAE industries"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100 text-left">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" text-left />
                  <span className="text-slate-700 text-sm font-medium text-left font-sans">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: RELATED ================= */}
        <section className="py-16 text-center border-t border-slate-100">
            <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter leading-tight text-center uppercase">Related Scenting Solutions</h2>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {[
                { name: "Commercial Aroma diffurers", path: "/commercial-aroma-diffurers/" },
                { name: "Large Area & HVAC Aroma diffurers", path: "/large-area-and-hvac-aroma-diffurers/" },
                { name: "Maintenance & Refill Support", path: "/maintenance-and-refill-support-services/" }
              ].map((sol, i) => (
                <Link key={i} to={sol.path} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer text-center font-sans">{sol.name}</Link>
              ))}
            </div>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4 border-t border-slate-100">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10 text-center font-sans">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light text-center">Right Fixed-Installation Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center text-justify md:text-center font-sans">
              Whether you are planning a new office setup or upgrading an existing commercial space, Cool Max offers reliable Wall-Mounted Aroma Diffusers and Ceiling Aroma Diffusers tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-center">
              <Link to="/contact/" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 text-center">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" text-center/>
              </Link>
              <a href={`https://wa.me/${whatsappNumber.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3 text-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5" text-center /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}

// Dummy component for missing icon in source but referenced in code
function SpeakerXMarkIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6.75h3l5.063-3.038A.468.468 0 0115 4.5v15a.468.468 0 01-.687.412L9.25 16.875h-3a1.125 1.125 0 01-1.125-1.125v-4.5A1.125 1.125 0 015.125 10.125z" />
    </svg>
  );
}