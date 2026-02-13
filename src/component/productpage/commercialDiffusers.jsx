import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  BuildingStorefrontIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  BoltIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  AcademicCapIcon,
  ClockIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS MAPPED TO COMMERCIAL COLLECTION ---
import HeroImg from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/1.webp"; 
import Product1Img from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp"; 
import Product2Img from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/1.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp"; 

// Optimized animation settings
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function CommercialDiffusersPage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Commercial Aroma Diffusers in UAE | Cool Max Scent";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore commercial aroma diffusers in UAE for offices and business spaces. Professional scent diffuser machines with reliable performance & support by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      <link rel="canonical" href="https://coolmaxscent.com/commercial-aroma-diffuser" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12">
          
          <div className="lg:w-1/2 flex flex-col items-start text-left z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16 relative z-10">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Commercial Aroma Diffusers in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95] uppercase">
                Commercial Aroma <br />
                <span className="italic text-slate-400 font-light pr-2">Diffusers in UAE.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-sans text-slate-600 mb-6 font-medium">
                Professional Scent Diffuser Machines for Offices & Business Spaces
              </h2>
              
              <p className="text-lg text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Commercial aroma diffusers from Cool Max are designed for professional environments where consistent fragrance, reliability, and controlled diffusion are essential. These scent diffuser machines are suitable for offices, clinics, retail stores, educational institutions, and other medium-sized commercial spaces.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl font-sans">
                  Explore Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 font-sans"
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
              className="relative w-full aspect-square max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Commercial Aroma Diffusers UAE" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.1)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-20 border-t border-slate-100" id="collection">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter uppercase">Our Commercial Aroma Diffuser Collection</h2>
            <p className="text-lg text-slate-500 mt-4 font-light text-center">
              Explore our range of professional aroma diffusers designed for commercial and semi-commercial environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* AeroBlack Med */}
            <motion.div {...smoothFadeUp} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all flex flex-col">
              <div className="h-72 w-full bg-white rounded-[2.5rem] mb-8 flex items-center justify-center p-12 border border-slate-50 shadow-sm">
                <img src={Product1Img} alt="AeroBlack Med" className="h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-serif text-slate-900 mb-4">AeroBlack Med – Commercial Aroma Diffuser</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-light text-base flex-grow">
                A reliable commercial scent diffuser designed for continuous use in offices and business interiors. Provides even fragrance distribution without overpowering the space.
              </p>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6">
                <span className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest font-sans">Best suited for:</span>
                <p className="text-xs font-bold text-slate-700 font-sans">Offices • Clinics • Training centers • Corporate spaces</p>
              </div>
              <a href="/product/aeroblack-med" className="block w-full py-4 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-600 transition-all text-center font-sans shadow-lg">
                View product details
              </a>
            </motion.div>

            {/* MistBox X */}
            <motion.div {...smoothFadeUp} transition={{ delay: 0.2 }} className="group p-8 rounded-[3rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all flex flex-col">
              <div className="h-72 w-full bg-white rounded-[2.5rem] mb-8 flex items-center justify-center p-12 border border-slate-50 shadow-sm">
                <img src={Product2Img} alt="MistBox X" className="h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-serif text-slate-900 mb-4">MistBox X – Mid-Size Commercial Diffuser</h3>
              <p className="text-slate-600 mb-6 leading-relaxed font-light text-base flex-grow">
                A compact yet powerful aroma diffuser suitable for medium-sized commercial areas. Designed for steady performance and easy maintenance.
              </p>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6">
                <span className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest font-sans">Best suited for:</span>
                <p className="text-xs font-bold text-slate-700 font-sans">Retail stores • Reception areas • Waiting lounges • Salons</p>
              </div>
              <a href="/product/mistbox" className="block w-full py-4 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-600 transition-all text-center font-sans shadow-lg">
                View product details
              </a>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: WHY USE ================= */}
        <section className="py-20">
          <div className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
            <motion.div {...smoothFadeUp} className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter uppercase text-left">Why Use Commercial Aroma Diffusers?</h2>
              <p className="text-slate-400 mb-12 text-xl font-light max-w-3xl text-left">
                Business environments require scenting solutions that go beyond basic air fresheners. Commercial aroma diffusers are designed to perform consistently throughout operating hours.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Consistent Fragrance Coverage", desc: "Ensures the space remains fresh from opening to closing time.", icon: <ClockIcon /> },
                  { title: "Professional & Balanced Scenting", desc: "Subtle fragrance that enhances comfort without distraction.", icon: <SparklesIcon /> },
                  { title: "Designed for Daily Use", desc: "Built to handle continuous operation in busy environments.", icon: <BoltIcon /> },
                  { title: "Low Maintenance", desc: "Reduced need for frequent refills and manual intervention.", icon: <Cog6ToothIcon /> }
                ].map((item, i) => (
                  <div key={i} className="space-y-4 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/10">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg leading-tight font-sans">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-20 text-left font-sans">
          <motion.div {...smoothFadeUp}>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter uppercase text-center md:text-left">Where Commercial Aroma Diffusers Are Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Corporate offices", icon: <BuildingOfficeIcon /> },
                { title: "Clinics and healthcare centers", icon: <BeakerIcon /> },
                { title: "Retail stores and showrooms", icon: <BuildingStorefrontIcon /> },
                { title: "Educational institutions", icon: <AcademicCapIcon /> },
                { title: "Business reception areas", icon: <UserGroupIcon /> }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white transition-all shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg">{item.title}</h3>
                </div>
              ))}
            </div>
            <p className="mt-12 text-slate-500 font-light italic border-l-4 border-blue-600 pl-6 text-left">
              They are ideal for spaces where customer experience and employee comfort are important.
            </p>
          </motion.div>
        </section>

        {/* ================= SECTION 4: HOW THEY WORK ================= */}
        <section className="py-20 border-t border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...smoothFadeUp} className="text-left font-sans">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter uppercase text-left">How Commercial Aroma Diffusers Work</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 text-left">
                Commercial aroma diffusers use controlled atomization technology to disperse fragrance evenly across the space. The system releases fine fragrance particles that remain suspended in the air, ensuring uniform scent distribution.
              </p>
              <div className="space-y-4">
                {[
                  "Quiet operation suitable for workspaces",
                  "Adjustable fragrance intensity",
                  "Efficient fragrance oil consumption",
                  "Durable construction for long-term use"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-medium text-left">
                    <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-500 italic text-left">This technology ensures reliable and comfortable scenting for business environments.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 flex items-center justify-center">
              <img src={FeatureImg} alt="Commercial Aroma Diffusion Technology" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 5: CHOOSING ================= */}
        <section className="py-20 bg-slate-50 rounded-[4rem] px-8 md:px-16 border border-slate-200">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center uppercase">Choosing the Right Commercial Aroma Diffuser</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left font-sans">
            {[
              { title: "Space Size", desc: "Choose a diffuser that matches the area coverage requirement." },
              { title: "Foot Traffic", desc: "Higher traffic areas benefit from continuous fragrance diffusion." },
              { title: "Working Hours", desc: "Commercial diffusers are ideal for long operating hours." },
              { title: "Maintenance Preference", desc: "Low-maintenance systems reduce operational effort." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col text-left">
                <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-3 text-left">Factor {i+1}</h4>
                <h3 className="font-bold text-xl text-slate-900 mb-3 text-left">{item.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed text-left">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-slate-900 font-bold uppercase tracking-widest text-xs font-sans">
            Our team can help you select the right commercial aroma diffuser based on your business needs.
          </p>
        </section>

        {/* ================= SECTION 6: WHY COOL MAX ================= */}
        <section className="py-24 text-left font-sans">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter uppercase text-center md:text-left">Why Choose Cool Max Commercial Aroma Diffusers?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "UAE-based company with local support",
              "Professional-grade commercial scent diffuser machines",
              "Suitable for offices, clinics, and retail spaces",
              "Easy maintenance and refill support available",
              "Trusted by businesses across multiple industries"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all text-left">
                <CheckCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 font-light text-center">We focus on providing practical solutions that support real working environments.</p>
        </section>

        {/* ================= SECTION 7: RELATED ================= */}
        <section className="py-20 border-t border-slate-100 text-center font-sans">
          <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter uppercase text-center">Related Scenting Solutions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Large Area & HVAC Aroma Diffusers", path: "/large-area-and-hvac-aroma-diffusers" },
              { label: "Wall-Mounted & Ceiling Diffusers", path: "/wall-mounted-and-ceiling-aroma-diffuser" },
              { label: "Maintenance & Refill Support", path: "/contact" }
            ].map((item, idx) => (
              <a key={idx} href={item.path} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm text-center">
                {item.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-slate-400 text-sm text-center italic">These solutions help create a complete scenting setup for business spaces.</p>
        </section>

        {/* ================= MASTER CTA ================= */}
        <section className="py-24 text-center bg-slate-900 rounded-[4rem] mb-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
          <motion.div {...smoothFadeUp} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-7xl font-serif mb-10 tracking-tighter leading-none uppercase text-center text-white">
              Need Help Choosing the <br/> 
              <span className="italic text-blue-400 font-light text-center">Right Commercial Aroma Diffuser?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light font-sans text-center">
              Whether you manage a single office or multiple commercial locations, Cool Max offers dependable commercial aroma diffusers designed for professional use. Our team will help you select the right solution and ensure long-term performance.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-500 tracking-widest mb-8 text-center">Looking for commercial aroma diffusers in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-center">
              <a href="/contact" className="w-full sm:w-auto px-12 py-6 bg-white text-slate-900 font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl hover:bg-blue-600 hover:text-white flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-5 h-5 text-center"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl hover:bg-[#128C7E] flex items-center justify-center gap-3 text-center"
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