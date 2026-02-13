import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  BoltIcon,
  ChatBubbleLeftRightIcon,
  SpeakerXMarkIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/2.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion wtc/4.webp"; 

// Optimized animation settings
const smoothFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function PassiveDiffusersPage() {
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

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm mt-16">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em]">Zero Electricity Required</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Passive / <br />
                <span className="italic text-slate-400 font-light pr-2">No-Power Diffusers</span> <br />
                in UAE.
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                Natural Fragrance Diffusion for Simple & Continuous Freshness
              </h2>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-[2rem] mb-8 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic">
                  Cool Max offers Passive / No-Power Diffusers designed for spaces where silent, maintenance-free, and electricity-free fragrance is required. Our Natural Fragrance Diffusion solution provides continuous freshness without using electricity, batteries, or mechanical systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">Request Solution</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[500px] p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img src={HeroImg} alt="Natural Fragrance Diffusion" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT SOLUTION ================= */}
        <section className="py-20 border-t border-slate-100" id="collection">
          <motion.div {...smoothFadeUp} className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Our Passive / No-Power Diffuser Solution</h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div {...smoothFadeUp} className="group p-8 md:p-12 rounded-[3.5rem] bg-slate-50 border border-slate-200 transition-all hover:bg-white hover:shadow-2xl flex flex-col md:flex-row gap-12 items-center text-left">
              <div className="w-full md:w-1/2 bg-white rounded-[2.5rem] overflow-hidden flex items-center justify-center p-10 border border-slate-100 shadow-sm">
                <img src={Product1} alt="Natural Fragrance Diffuser" className="h-full object-contain transition-transform group-hover:scale-105" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-serif text-slate-900 mb-4">Natural Fragrance Diffusion</h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  Natural Fragrance Diffusion is a non-electric aroma diffusion solution that releases fragrance naturally into the air. It works without motors, fans, batteries, or power supply, making it one of the most reliable and low-maintenance scenting options available.
                </p>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-8">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest block mb-3">Best suited for:</span>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed font-sans">Washrooms • Elevators • Corridors • Small offices • Toilets • Utility areas</p>
                </div>
                <a href="/product/naturalflow" className="block w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all text-center font-sans">View product details</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2 & 3: WHAT IS IT & WHY CHOOSE ================= */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-8 text-left">
            <div className="p-10 md:p-16 bg-slate-50 rounded-[3rem] border border-slate-100">
              <h2 className="text-3xl font-serif text-slate-900 mb-6">What Is Natural Fragrance Diffusion?</h2>
              <p className="text-slate-500 mb-8 font-light leading-relaxed">Natural Fragrance Diffusion is a passive scenting method. Once placed in a space, it continuously releases fragrance without any user operation.</p>
              <div className="grid grid-cols-2 gap-4">
                {["No electricity", "No battery", "No noise", "No programming"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold text-slate-700 uppercase font-sans">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-400 italic">This makes it ideal for locations where power access is limited or where silent operation is required.</p>
            </div>

            <div className="p-10 md:p-16 bg-slate-900 rounded-[3rem] text-white">
              <h2 className="text-3xl font-serif mb-8">Why Choose Passive / No-Power Diffusers?</h2>
              <ul className="space-y-6">
                {[
                  { title: "No Electricity Required", desc: "Works completely without power, reducing operational cost.", icon: <BoltIcon /> },
                  { title: "Silent Operation", desc: "No sound at all — ideal for quiet environments.", icon: <SpeakerXMarkIcon /> },
                  { title: "Low Maintenance", desc: "No wiring, no batteries, no technical setup.", icon: <WrenchScrewdriverIcon /> },
                  { title: "Safe & Reliable", desc: "No electrical components means fewer chances of failure.", icon: <ShieldCheckIcon /> }
                ].map((item, i) => (
                  <li key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/5">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight font-sans">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-light mt-1 font-sans">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: WHERE USED ================= */}
        <section className="py-20 text-left">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Passive / No-Power Diffusers Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 font-sans">
            {[
              { title: "Public and office washrooms", icon: <SparklesIcon /> },
              { title: "Elevators and lift cabins", icon: <BuildingOffice2Icon /> },
              { title: "Corridors and hallways", icon: <ArrowRightIcon /> },
              { title: "Toilets and utility rooms", icon: <CheckCircleIcon /> },
              { title: "Small enclosed commercial spaces", icon: <BuildingOffice2Icon /> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-white transition-all shadow-sm">
                <div className="w-12 h-12 text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-slate-500 text-center italic">These are places where basic but continuous freshness is more important than adjustable scent intensity.</p>
        </section>

        {/* ================= SECTION 5 & 6: HOW IT WORKS & WHEN TO CHOOSE ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">How Natural Fragrance Diffusion Works</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                Natural Fragrance Diffusion works through controlled exposure and evaporation. The fragrance is slowly released into the air over time, creating a consistent and gentle scent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {["Continuous fragrance release", "No mechanical parts", "No power dependency", "Long-lasting performance"].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 font-sans">
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-serif text-slate-900 mb-4">When Should You Choose This Solution?</h3>
              <ul className="space-y-3 font-sans">
                {[
                  "Power supply is not available",
                  "Silence is important",
                  "Maintenance needs to be minimal",
                  "The space is small or enclosed",
                  "Strong scent control is not required"
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img src={FeatureImg} alt="Evaporation technology" className="w-full h-auto object-cover transition-transform group-hover:scale-105 duration-700" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON ================= */}
        <section className="py-16 overflow-x-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 text-center tracking-tighter">Passive / No-Power vs Powered Diffusers</h2>
          <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-xl max-w-4xl mx-auto min-w-[600px] font-sans">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-6">Feature</th>
                  <th className="p-6 text-blue-600">Passive / No-Power</th>
                  <th className="p-6">Powered Diffusers</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm font-medium">
                {[
                  { f: "Electricity needed", p: "No", d: "Yes" },
                  { f: "Noise", p: "Silent", d: "Very low" },
                  { f: "Scent control", p: "Basic", d: "Advanced" },
                  { f: "Maintenance", p: "Very low", d: "Low" },
                  { f: "Best for", p: "Washrooms, elevators", d: "Offices, lobbies" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-serif text-slate-400 text-base">{row.f}</td>
                    <td className="p-6 text-blue-600 font-bold">{row.p}</td>
                    <td className="p-6 text-slate-500">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 8: WHY COOL MAX ================= */}
        <section className="py-16 font-sans">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 text-left shadow-sm">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-none text-center">Why Choose Cool Max for Passive Diffusers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based company with local experience",
                "Reliable and simple fragrance solutions",
                "Suitable for offices, schools, hospitals, and facilities",
                "Consistent fragrance performance",
                "Trusted by commercial and institutional clients"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-blue-100">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-blue-600 font-serif italic text-lg text-center">We focus on solutions that work without complexity.</p>
          </div>
        </section>

        {/* ================= SECTION 9: RELATED ================= */}
        <section className="py-16 text-center font-sans">
           <h2 className="text-2xl md:text-4xl font-serif text-slate-900 mb-12 tracking-tighter">Related Scenting Solutions</h2>
           <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Desktop & Small Space Aroma Diffusers", path: "/desktop-and-small-space-aroma-diffuser" },
                { name: "Wall-Mounted & Ceiling Aroma Diffusers", path: "/wall-mounted-and-ceiling-aroma-diffuser" },
                { name: "Maintenance & Refill Support", path: "/contact" }
              ].map((sol, i) => (
                <a href={sol.path} key={i} className="px-8 py-5 bg-white border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm cursor-pointer">{sol.name}</a>
              ))}
           </div>
           <p className="mt-8 text-slate-400 text-sm italic">These solutions complement passive fragrance diffusion where more control is required.</p>
        </section>

        {/* ================= SECTION 10: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10 text-center font-sans">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Looking for Passive / <br /> <span className="italic text-blue-600 font-light">No-Power Diffusers in UAE?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              If you need a simple, electricity-free fragrance solution for washrooms, elevators, or enclosed spaces, Natural Fragrance Diffusion from Cool Max is the right choice. Our team will help you understand whether this solution fits your space or if another option is better.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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