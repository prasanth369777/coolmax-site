import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon, 
  BriefcaseIcon, 
  CheckCircleIcon, 
  UserIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  SpeakerXMarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  BeakerIcon,
  ArrowsPointingOutIcon
} from "@heroicons/react/24/outline";

// --- IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/DeskScent/1.webp"; 
import Product3 from "../../asset/productimg/CMwebpimg/ZenBox Mini Diffuser/1.webp"; 
import Product4 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/3.webp"; 
import Product5 from "../../asset/productimg/CMwebpimg/LuxePanel Diffuser wtc/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/DeskScent/4.webp"; 

const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function DesktopSmallSpacePage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Desktop & Small Space Aroma Diffusers in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore desktop & small space aroma diffusers in UAE for offices, cabins, and small rooms. Quiet, compact, and professional scent solutions by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      {/* Canonical URL */}
      <link rel="canonical" href="https://coolmaxscent.com/desktop-and-small-space-aroma-diffuser" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 gap-12 text-left">
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 relative z-10">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">**Desktop & Small Space Aroma Diffusers in UAE**</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Desktop & <br />
                <span className="italic text-slate-400 font-light">Small Space</span> <br />
                Diffusers in UAE.
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                **Desktop Aroma Diffusers** and **Small Space Aroma Diffusers** for Offices, Cabins & Small Rooms.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic text-left">
                  **Office Desk Aroma Diffusers** from Cool Max are designed to create fresh, calm, and comfortable environments in compact areas. These scent diffuser machines are ideal for office desks, cabins, meeting rooms, home offices, and other small indoor spaces where subtle and controlled fragrance is required.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">Get a Quote</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[500px] p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HeroImg} alt="Desktop & Small Space Aroma Diffusers in UAE" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section id="collection" className="py-20 border-t border-slate-100">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Desktop & Small Space Diffuser Collection</h2>
            <p className="text-lg text-slate-500 mt-4 font-light">Explore our range of compact **Desktop Aroma Diffusers** designed for desks, cabins, and small rooms. Each product combines ease of use, modern design, and reliable performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: Product1, name: "OpalMist Clock Diffuser– Smart Desk Aroma Diffuser", desc: "A modern **Office Desk Aroma Diffusers** unit designed for office desks and study tables. It delivers gentle fragrance diffusion while operating quietly in the background.", suits: "Office desks • Study rooms • Home offices" },
              { img: Product2, name: "AromaDesk – Compact Personal Space Diffuser", desc: "A small yet efficient **Small Space Aroma Diffusers** unit built for cabins and personal workspaces. Easy to maintain and visually minimal.", suits: "Office cabins • Small rooms • Workstations" },
              { img: Product3, name: "ZenBox Mini – Small Room Aroma Diffuser", desc: "A compact diffuser designed for enclosed spaces where consistent fragrance is needed without overwhelming the environment.", suits: "Small rooms • Meeting rooms • Personal spaces" },
              { img: Product4, name: "AeroCube – Professional Desktop Diffuser", desc: "Designed for steady daily use, this diffuser provides reliable fragrance output for professional environments.", suits: "Corporate desks • Clinics • Reception counters" },
              { img: Product5, name: "LuxePanel – Premium Desk & Cabin Diffuser", desc: "A refined aroma diffuser with a clean, modern design. Ideal for users who want both performance and aesthetics.", suits: "Executive desks • Cabins • Premium workspaces" }
            ].map((product, idx) => (
              <motion.div key={idx} {...smoothFadeUp} className="group p-6 rounded-[3rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full">
                <div className="h-64 w-full bg-white rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center p-8 border border-slate-100">
                  <img src={product.img} alt={product.name} className="h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-500 mb-6 font-light text-sm flex-grow">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Best suited for:</span>
                  <p className="text-xs font-bold text-slate-700">{product.suits}</p>
                </div>
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-600 transition-all">View product details</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: WHY USE ================= */}
        <section className="py-20">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter">Why Use **Desktop & Small Space Aroma Diffusers in UAE**?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl">Small indoor spaces require a different approach to scenting. Ordinary air fresheners often create uneven or strong smells that become uncomfortable over time.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Balanced Fragrance Output", desc: "Desktop aroma diffusers release fragrance evenly, creating a pleasant atmosphere without distraction.", icon: <CheckCircleIcon /> },
                { title: "Quiet & Discreet Operation", desc: "Designed for work environments where silence and focus are important.", icon: <SpeakerXMarkIcon /> },
                { title: "Compact & Space-Saving", desc: "Small footprint makes them ideal for desks, shelves, and side tables.", icon: <ArrowsPointingOutIcon /> },
                { title: "Consistent Freshness", desc: "Provides long-lasting fragrance compared to sprays or plug-in fresheners.", icon: <SparklesIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-10 h-10 text-blue-400">{item.icon}</div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED ================= */}
        <section className="py-16 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where **Desktop Aroma Diffusers** Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Office desks and workstations", icon: <ComputerDesktopIcon /> },
              { title: "Personal cabins and cubicles", icon: <UserIcon /> },
              { title: "Meeting and conference rooms", icon: <BriefcaseIcon /> },
              { title: "Home offices and study rooms", icon: <HomeIcon /> },
              { title: "Reception desks and counters", icon: <BeakerIcon /> }
            ].map((space, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white hover:border-blue-200 transition-all shadow-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(space.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-bold text-slate-700">{space.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 font-light italic border-l-4 border-slate-100 pl-6 text-center">They are ideal wherever subtle scenting is preferred via **Small Space Aroma Diffusers**.</p>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How **Desktop Aroma Diffusers** Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                **Small Space Aroma Diffusers** use controlled atomization technology to release fragrance in fine particles. This allows the scent to spread gently within enclosed areas without becoming overpowering.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Low-noise performance", "Efficient fragrance usage", "Compact and elegant design", "Safe for continuous indoor use"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-bold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-400 font-light text-left">These features make our **Office Desk Aroma Diffusers** suitable for long working hours.</p>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={FeatureImg} alt="Desktop & Small Space Aroma Diffusers in UAE Technology" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CHOOSING THE RIGHT ONE ================= */}
        <section className="py-16 border-t border-slate-100 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How to Choose the Right **Desktop Aroma Diffuser**</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Space Size", desc: "Designed for desks, cabins, and small enclosed rooms." },
              { title: "Working Environment", desc: "Choose quiet models for offices and meeting rooms." },
              { title: "Design Preference", desc: "Modern designs blend well with professional interiors." },
              { title: "Ease of Maintenance", desc: "Low-maintenance systems are ideal for daily use." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm">
                <h3 className="text-blue-600 font-black text-xs uppercase mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-slate-600 font-medium">Our team can guide you in choosing the most suitable **Small Space Aroma Diffusers** based on your space.</p>
        </section>

        {/* ================= SECTION 7: WHY COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">Why Choose Cool Max **Desktop & Small Space Aroma Diffusers in UAE**?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local support",
                "Professional-grade scent diffuser machines",
                "Suitable for offices, clinics, and homes",
                "Easy maintenance and refill support",
                "Trusted by businesses across multiple sectors"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-200">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-blue-600 font-serif italic text-lg">We focus on delivering **Office Desk Aroma Diffusers** that work quietly and consistently.</p>
          </div>
        </section>

        {/* ================= SECTION 8: RELATED ================= */}
        <section className="py-16 text-center">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
             {["Car & Personal Space Scenting Solutions", "Commercial Aroma Diffusers", "Maintenance & Refill Support"].map((sol, i) => (
               <div key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol}</div>
             ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm italic">These solutions help maintain freshness across all environments.</p>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light">Right **Desktop Aroma Diffuser**?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center font-sans">
              Whether you are setting up a single workstation or multiple office cabins, Cool Max offers reliable **Desktop & Small Space Aroma Diffusers in UAE** tailored to your needs. Our team will help you select the right solution and ensure long-term performance.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for desktop and small space aroma diffusers in UAE?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3 font-sans">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}