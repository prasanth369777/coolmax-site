import React, { useEffect } from "react";
import { motion } from "framer-motion";
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

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/8.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/4.webp"; 
import Product2 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/4.webp"; 

// Optimized animation settings
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function WallMountedDiffusersPage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Wall-Mounted & Ceiling Aroma Diffusers in UAE | Cool Max";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore wall-mounted & ceiling aroma diffusers in UAE for offices, clinics, and commercial spaces. Space-saving, professional scent solutions by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <link rel="canonical" href="https://coolmaxscent.com/wall-mounted-and-ceiling-aroma-diffuser" />
      
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
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">
                  **Wall-Mounted & Ceiling Aroma Diffusers in UAE**
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-6xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Wall-Mounted & Ceiling <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusers in UAE.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                Professional Fixed-Installation Scent Solutions for Commercial Spaces
              </h2>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic">
                  **Wall-Mounted Aroma Diffusers** and **Ceiling Aroma Diffusers** from Cool Max are designed for spaces where consistent fragrance coverage is required without occupying desk or floor space. These professional scent diffuser machines are ideal for offices, clinics, corridors, reception areas, and commercial interiors where a clean, fixed installation is preferred.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
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
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Wall-Mounted and Ceiling Diffusers UAE" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: COLLECTION ================= */}
        <section className="py-20 border-t border-slate-100">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Wall-Mounted & Ceiling Diffuser Range</h2>
            <p className="text-lg text-slate-500 mt-4 font-light">Explore our range of fixed-installation aroma diffusers designed for reliable daily use in commercial and semi-commercial environments.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              { 
                img: Product1, 
                name: "CeilAir Pro – Ceiling-Mounted Aroma Diffuser", 
                desc: "A discreet **Ceiling Aroma Diffusers** unit designed for even fragrance distribution in enclosed commercial spaces. Ideal where minimal visual presence is required.",
                suits: ["Corridors", "Clinics", "Small lobbies", "Office hallways"]
              },
              { 
                img: Product2, 
                name: "AeroMax Pro – Wall-Mounted Professional Diffuser", 
                desc: "A robust **Wall-Mounted Aroma Diffusers** unit designed for steady performance and consistent fragrance output throughout the day.",
                suits: ["Offices", "Waiting areas", "Reception zones", "Meeting rooms"]
              }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                {...smoothFadeUp}
                className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl text-left flex flex-col h-full"
              >
                <div className="h-72 w-full bg-white rounded-[2rem] mb-8 flex items-center justify-center p-8 border border-slate-100 shadow-sm">
                  <img src={product.img} alt={product.name} className="h-full object-contain transition-transform group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{product.name}</h3>
                <p className="text-slate-600 mb-6 font-light flex-grow">{product.desc}</p>
                <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-8">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-2">Best suited for:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.suits.map((suit, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-bold text-slate-700">{suit}</span>
                    ))}
                  </div>
                </div>
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all">View product details</button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: WHY CHOOSE ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-left text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-tighter leading-none">Why Choose **Wall-Mounted & Ceiling Aroma Diffusers in UAE**?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-3xl">Fixed-installation aroma diffusers are preferred in professional environments where space efficiency and reliability are important.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Space-Saving Design", desc: "Wall and ceiling mounting keeps desks and floors clear.", icon: <ArrowsPointingOutIcon /> },
                { title: "Even Fragrance Distribution", desc: "Strategic mounting allows fragrance to spread uniformly across the space.", icon: <SparklesIcon /> },
                { title: "Professional Appearance", desc: "Clean installation enhances the overall look of the interior.", icon: <CheckCircleIcon /> },
                { title: "Low Maintenance", desc: "Designed for continuous operation with minimal attention.", icon: <ClockIcon /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED ================= */}
        <section className="py-20 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Our Fixed Diffusers Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Square2StackIcon />, title: "Office corridors and hallways" },
              { icon: <BeakerIcon />, title: "Clinics and healthcare facilities" },
              { icon: <QueueListIcon />, title: "Reception and waiting areas" },
              { icon: <BuildingOfficeIcon />, title: "Commercial cabins and meeting rooms" },
              { icon: <AcademicCapIcon />, title: "Educational institutions" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center hover:bg-white transition-all shadow-sm">
                <div className="w-10 h-10 text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 text-center leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: HOW IT WORKS ================= */}
        <section className="py-16 bg-slate-50 rounded-[4rem] border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center px-8 md:px-16 text-left shadow-sm">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How Wall-Mounted & Ceiling Aroma Diffusers Work</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                These aroma diffusers use controlled atomization technology to release fragrance evenly into the air. Their fixed position allows consistent diffusion without interference from movement or airflow changes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Quiet operation", icon: <SpeakerXMarkIcon /> },
                  { title: "Controlled fragrance intensity", icon: <BoltIcon /> },
                  { title: "Durable design for daily use", icon: <WrenchScrewdriverIcon /> },
                  { title: "Efficient fragrance consumption", icon: <SparklesIcon /> }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img src={FeatureImg} alt="Ceiling Scenting Technology" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: HOW TO CHOOSE ================= */}
        <section className="py-16 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How to Choose the Right Fixed Diffuser</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Space Layout", desc: "Wall or ceiling placement should allow even fragrance distribution." },
              { title: "Area Size", desc: "Choose a diffuser designed to match the room size." },
              { title: "Foot Traffic", desc: "High-traffic areas benefit from continuous diffusion." },
              { title: "Design Preference", desc: "Discreet designs work best in professional interiors." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                <h3 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: WHY COOL MAX ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter text-center lg:text-left">Why Choose Cool Max **Wall-Mounted & Ceiling Aroma Diffusers in UAE**?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local support",
                "Professional-grade scent diffuser machines",
                "Suitable for offices, clinics, and commercial spaces",
                "Easy maintenance and refill support",
                "Trusted by businesses across multiple industries"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-200">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-blue-600 font-serif italic text-lg text-center">We focus on long-term performance and reliability.</p>
          </div>
        </section>

        {/* ================= SECTION 8: RELATED ================= */}
        <section className="py-16 text-center">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter leading-tight">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
             {["Commercial Aroma Diffusers", "HVAC Scenting Solutions", "Maintenance & Refill Support"].map((sol, i) => (
               <div key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol}</div>
             ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm italic text-center">These solutions help maintain freshness across different environments.</p>
        </section>

        {/* ================= SECTION 9: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Need Help Choosing the <br /> <span className="italic text-blue-600 font-light">Right Fixed-Installation Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed text-center font-sans">
              Whether you are planning a new office setup or upgrading an existing commercial space, Cool Max offers reliable **Wall-Mounted Aroma Diffusers** and **Ceiling Aroma Diffusers** tailored to your needs. Our team will help you select the right solution and provide ongoing support.
            </p>
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for wall-mounted and ceiling aroma diffusers in UAE?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3">
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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