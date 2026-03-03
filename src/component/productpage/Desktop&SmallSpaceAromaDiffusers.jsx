import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  HomeIcon,
  BeakerIcon,
  ArrowsPointingOutIcon
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/OpalMist Clock Diffuser/1.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/AromaDesk/2.webp"; 

import FeatureImg from "../../asset/productimg/CMwebpimg/AromaDesk/4.webp"; 

const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function DesktopSmallSpacePage() {
  const whatsappNumber = "971509282702";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Desktop & Small Space Aroma Diffusers in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore desktop & small space aroma diffusers in UAE for offices, cabins, and small rooms. Quiet, compact, and professional scent solutions by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      {/* ================= SEO METADATA ================= */}
   
        <link rel="canonical" href="https://www.coolmaxscent.com/desktop-and-small-space-aroma-diffusers/" />
    
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
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 relative z-10 text-left">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">Desktop & Small Space Aroma Diffusers in UAE</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95] text-left">
                Desktop & <br />
                <span className="italic text-slate-400 font-light">Small Space</span> <br />
                Diffusers in UAE.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed text-left">
                Desktop Aroma Diffusers and Small Space Aroma Diffusers for Offices, Cabins & Small Rooms.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic text-left">
                  Office Desk Aroma Diffusers from Cool Max are designed to create fresh, calm, and comfortable environments in compact areas. These scent diffuser machines are ideal for office desks, cabins, meeting rooms, home offices, and other small indoor spaces where subtle and controlled fragrance is required.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 font-sans text-left">
                <Link to="/contact/" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl text-center">Get a Quote</Link>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 justify-center text-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[500px] p-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HeroImg} alt="Desktop & Small Space Aroma Diffusers in UAE" className="w-full h-full object-contain relative z-10 drop-shadow-2xl mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section id="collection" className="py-20 border-t border-slate-100 text-left">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Desktop & Small Space Diffuser Collection</h2>
            <p className="text-lg text-slate-500 mt-4 font-light text-center">Explore our range of compact Desktop Aroma Diffusers designed for desks, cabins, and small rooms.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { img: Product1, name: "OpalMist Clock Diffuser– Smart Desk Aroma Diffuser", path: "/desktop-and-small-space-aroma-diffusers/opalmist-clock-diffuser/", desc: "A modern Office Desk Aroma Diffusers unit designed for office desks and study tables. It delivers gentle fragrance diffusion while operating quietly in the background.", suits: "Office desks • Study rooms • Home offices" },
              { img: Product2, name: "AromaDesk – Compact Personal Space Diffuser", path: "/desktop-and-small-space-aroma-diffusers/aroma-desk-diffuser/", desc: "A small yet efficient Small Space Aroma Diffusers unit built for cabins and personal workspaces. Easy to maintain and visually minimal.", suits: "Office cabins • Small rooms • Workstations" },
            ].map((product, idx) => (
              <motion.div key={idx} {...smoothFadeUp} className="group p-6 rounded-[3rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
                <div className="h-64 w-full bg-white rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center p-8 border border-slate-100">
                  <img src={product.img} alt={product.name} className="h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4 text-left">{product.name}</h3>
                <p className="text-slate-600 mb-6 font-light text-sm flex-grow text-left">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 text-left">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2 text-left font-sans">Best suited for:</span>
                  <p className="text-sm font-bold text-slate-700 font-sans text-left">{product.suits}</p>
                </div>
                <Link to={product.path} className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-center text-[10px] hover:bg-blue-600 transition-all font-sans">View product details</Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: WHY USE ================= */}
        <section className="py-20 text-left">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter text-left uppercase">Why Use Desktop & Small Space Aroma Diffusers in UAE?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl text-left">Small indoor spaces require a different approach to scenting. Ordinary air fresheners often create uneven or strong smells.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
              {[
                { title: "Balanced Fragrance Output", desc: "Desktop aroma diffusers release fragrance evenly, creating a pleasant atmosphere.", icon: <CheckCircleIcon /> },
                { title: "Quiet & Discreet Operation", desc: "Designed for work environments where silence and focus are important.", icon: <SpeakerXMarkIcon /> },
                { title: "Compact & Space-Saving", desc: "Small footprint makes them ideal for desks, shelves, and side tables.", icon: <ArrowsPointingOutIcon /> },
                { title: "Consistent Freshness", desc: "Provides long-lasting fragrance compared to sprays or plug-in fresheners.", icon: <SparklesIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4 text-left">
                  <div className="w-10 h-10 text-blue-400 text-left">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-lg leading-tight text-left font-sans">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed text-left font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED ================= */}
        <section className="py-16 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">Where Desktop Aroma Diffusers Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Office desks and workstations", icon: <ComputerDesktopIcon /> },
              { title: "Personal cabins and cubicles", icon: <UserIcon /> },
              { title: "Meeting and conference rooms", icon: <BriefcaseIcon /> },
              { title: "Home offices and study rooms", icon: <HomeIcon /> },
              { title: "Reception desks and counters", icon: <BeakerIcon /> }
            ].map((space, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white hover:border-blue-200 transition-all shadow-sm text-left">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all text-left">
                  {React.cloneElement(space.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-bold text-slate-700 text-left font-sans">{space.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-16 text-left font-sans">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-left uppercase">How Desktop Aroma Diffusers Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8 text-left">
                Small Space Aroma Diffusers use controlled atomization technology to release fragrance in fine particles. This allows the scent to spread gently within enclosed areas without becoming overpowering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {["Low-noise performance", "Efficient fragrance usage", "Compact and elegant design", "Safe for continuous indoor use"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm text-left">
                    <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-slate-700 text-left">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative text-left">
              <img src={FeatureImg} alt="Desktop & Small Space Aroma Diffusers Technology" className="w-full h-auto object-cover mx-auto" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-16 border-t border-slate-100 text-left font-sans">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">How to Choose the Right Desktop Aroma Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Space Size", desc: "Designed for desks, cabins, and small enclosed rooms." },
              { title: "Working Environment", desc: "Choose quiet models for offices and meeting rooms." },
              { title: "Design Preference", desc: "Modern designs blend well with professional interiors." },
              { title: "Ease of Maintenance", desc: "Low-maintenance systems are ideal for daily use." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm text-left">
                <h3 className="text-blue-600 font-black text-[10px] uppercase mb-3 text-left tracking-widest">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed text-left text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: WHY COOL MAX ================= */}
        <section className="py-16 text-left font-sans">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-none text-center lg:text-left uppercase">Why Choose Cool Max?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "UAE-based company with local support",
                "Professional-grade scent diffuser machines",
                "Suitable for offices, clinics, and homes",
                "Easy maintenance and refill support",
                "Trusted by businesses across UAE"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100 text-left">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium text-left">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: RELATED ================= */}
        <section className="py-16 text-center font-sans border-t border-slate-100">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6 text-center">
             {[
               { name: "Car & Personal Space Scenting Solutions", path: "/car-and-personal-space-scenting-solutions/" },
               { name: "Commercial Aroma Diffurers", path: "/commercial-aroma-diffurers/" },
               { name: "Maintenance & Refill Support", path: "/maintenance-and-refill-support-services/" }
             ].map((sol, i) => (
               <Link key={i} to={sol.path} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer text-center">{sol.name}</Link>
             ))}
           </div>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4 font-sans">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light text-center">Right Desktop Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center">
              Whether you are setting up a single workstation or multiple office cabins, Cool Max offers reliable Desktop & Small Space Aroma Diffusers in UAE tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <Link to="/contact/" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 text-center">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4 text-center"/>
              </Link>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 text-center">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-center" /> WhatsApp Expert
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