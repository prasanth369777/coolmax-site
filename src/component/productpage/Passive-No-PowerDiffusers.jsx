import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  BuildingOffice2Icon, 
  CheckCircleIcon, 
  HandThumbUpIcon, 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  BoltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/1.webp"; 
import Product1 from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/2.webp"; 
import FeatureImg from "../../asset/productimg/CMwebpimg/Natural Fragrance Diffusion/4.webp"; 

export default function PassiveDiffusersPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= NEW HERO SECTION (SPLIT: TEXT LEFT, IMAGE RIGHT) ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-16 text-left">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] font-sans">
                  Zero Electricity Required
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Passive / <br />
                <span className="italic text-slate-400 font-light pr-2">No-Power</span> <br />
                Diffusers.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Natural Fragrance Diffusion for Simple & Continuous Freshness.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Cool Max offers Passive / No-Power Diffusers designed for spaces where silent, maintenance-free, and electricity-free fragrance is required. Continuous freshness without batteries.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="/contact" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Request Solution
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

          {/* RIGHT: IMAGE STAGE (HIGH VISIBILITY) */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[600px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[4rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Passive Scent Diffusion Solution" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: PRODUCT COLLECTION ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">Sustainable Scenting</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Our Passive Solution</h3>
            <p className="text-lg text-slate-500 mt-8 font-light font-sans max-w-2xl mx-auto">
              Discover our reliable, non-electric aroma diffusion solution tailored for consistent freshness.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-8 md:p-12 rounded-[4rem] bg-slate-50 border border-slate-200 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-12 items-center text-left"
            >
              <div className="h-80 w-full md:w-1/2 bg-white rounded-[3rem] overflow-hidden flex items-center justify-center p-12 shadow-sm border border-slate-100">
                <img src={Product1} alt="Natural Fragrance Diffusion Device" className="h-full object-contain group-hover:scale-110 transition-transform duration-1000 ease-out drop-shadow-xl" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-serif text-slate-900 mb-2 tracking-tight leading-none">Natural Fragrance Diffusion</h3>
                <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-6 font-sans">Non-Electric Aroma Solution</p>
                <p className="text-slate-500 mb-8 leading-relaxed font-light text-lg font-sans">
                  Natural Fragrance Diffusion is a non-electric aroma diffusion solution that releases fragrance naturally into the air. It works without motors, fans, batteries, or power supply.
                </p>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-8 shadow-sm">
                  <span className="text-[10px] font-black text-slate-400 uppercase block mb-3 tracking-widest font-sans">Best suited for:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Washrooms", "Elevators", "Corridors", "Small offices", "Toilets"].map((suit, i) => (
                      <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-700 shadow-sm font-sans">
                        <CheckCircleIcon className="w-3 h-3 text-blue-500"/> {suit}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="/products" className="block w-full py-5 rounded-2xl bg-slate-900 text-white font-black tracking-widest uppercase text-[10px] hover:bg-blue-600 transition-all shadow-lg text-center font-sans">
                  View product details
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: EDITORIAL CONTENT ================= */}
        <section className="py-24">
          <div className="relative rounded-[4rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl text-left">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-24 flex flex-col justify-center bg-white">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
                    What Is Natural <br/>
                    <span className="italic text-slate-300 font-light">Diffusion?</span>
                  </h2>
                  <p className="text-slate-500 mb-8 leading-relaxed text-lg font-light font-sans">
                    Natural Fragrance Diffusion is a passive scenting method. Once placed in a space, it continuously releases fragrance without any user operation.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12 font-sans">
                    {["No electricity", "No battery", "No noise", "No programming"].map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-100 border border-slate-200 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-serif text-slate-900 mb-8">Why Choose Passive?</h3>
                  <ul className="space-y-6 font-sans">
                    {[
                      { title: "No Electricity Required", desc: "Works completely without power, reducing operational cost." },
                      { title: "Silent Operation", desc: "No sound at all — ideal for quiet environments." },
                      { title: "Low Maintenance", desc: "No wiring, no batteries, no technical setup." },
                      { title: "Safe & Reliable", desc: "No electrical components means fewer chances of failure." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-6 group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <CheckCircleIcon className="w-6 h-6" />
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
              
              <div className="relative min-h-[600px] overflow-hidden group">
                 <img src={FeatureImg} alt="Corridor Context" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
                 <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent text-center">
                    <div className="p-10 bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-2xl">
                      <p className="text-slate-900 font-serif text-2xl italic leading-tight">
                        "Basic but continuous freshness where adjustable scent intensity isn't required."
                      </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHERE USED ================= */}
        <section className="py-32">
          <div className="text-center mb-24">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6 font-sans">Presence</h2>
            <h3 className="text-4xl md:text-8xl font-serif text-slate-900 tracking-tighter leading-none">Common Applications</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-10 font-sans">
            {[
              { title: "Public and office washrooms", icon: <SparklesIcon /> },
              { title: "Elevators and lift cabins", icon: <BuildingOffice2Icon /> },
              { title: "Corridors and hallways", icon: <ArrowRightIcon /> },
              { title: "Toilets and utility rooms", icon: <BoltIcon /> },
              { title: "Small enclosed commercial spaces", icon: <BuildingOffice2Icon /> }
            ].map((item, idx) => (
              <div key={idx} className="w-full md:w-[45%] lg:w-[18%] p-10 bg-slate-50 border border-slate-100 rounded-[3rem] flex flex-col items-center text-center hover:bg-white hover:border-blue-100 hover:shadow-2xl transition-all duration-500 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-8 shadow-sm border border-slate-100">
                  {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-slate-400 text-sm font-light italic font-sans">These are places where basic but continuous freshness is more important than adjustable intensity.</p>
        </section>

        {/* ================= SECTION 4: TECH ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12 text-left">
          <div className="p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
            <h2 className="text-4xl font-serif mb-10 relative z-10 tracking-tight leading-none">How Evaporation <br/> Works</h2>
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed relative z-10 font-sans">
              Natural Fragrance Diffusion works through controlled exposure and evaporation. The fragrance is slowly released into the air over time, creating a consistent and gentle scent.
            </p>
            <ul className="space-y-6 relative z-10 font-sans">
              {["Continuous fragrance release", "No mechanical parts", "No power dependency", "Long-lasting performance"].map((tech, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/5">
                    <BoltIcon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[11px] uppercase tracking-widest text-slate-200">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-16 rounded-[4rem] bg-white border border-slate-100 flex flex-col justify-center shadow-sm">
            <h2 className="text-4xl font-serif text-slate-900 mb-10 tracking-tight">Selection Guide</h2>
            <div className="space-y-4 font-sans">
              {[
                { label: "Power Supply", desc: "Power supply is not available." },
                { label: "Silence", desc: "Silence is important." },
                { label: "Maintenance", desc: "Maintenance needs to be minimal." },
                { label: "Space", desc: "The space is small or enclosed." },
                { label: "Control", desc: "Strong scent control is not required." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-2xl">
                  <span className="font-black text-[10px] uppercase tracking-[0.2em] text-blue-600 mb-2 md:mb-0 text-left">{item.label}</span>
                  <span className="text-slate-900 font-bold text-right">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-slate-400 text-sm italic text-center font-light font-sans">For larger spaces, powered aroma diffusers are recommended.</p>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-slate-900 mb-16 text-center tracking-tight leading-none">Technology Comparison</h2>
          
          <div className="overflow-hidden bg-white border border-slate-100 rounded-[3rem] shadow-2xl max-w-5xl mx-auto font-sans">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-8">Feature Comparison</th>
                  <th className="p-8 text-blue-600">Passive / No-Power</th>
                  <th className="p-8">Powered Diffusers</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  { feature: "Electricity needed", pass: "No", pow: "Yes" },
                  { feature: "Noise", pass: "Silent", pow: "Very low" },
                  { feature: "Scent control", pass: "Basic", pow: "Advanced" },
                  { feature: "Maintenance", pass: "Very low", pow: "Low" },
                  { feature: "Best for", pass: "Washrooms, elevators", pow: "Offices, lobbies" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-serif text-slate-400 text-lg">{row.feature}</td>
                    <td className="p-8 text-blue-600 font-bold">{row.pass}</td>
                    <td className="p-8 text-slate-500">{row.pow}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 8: WHY COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tighter leading-none">Why Choose Cool Max?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16 font-sans">
                {[
                  "UAE-based with local experience", 
                  "Reliable & simple solutions", 
                  "Schools, hospitals, & facilities", 
                  "Consistent fragrance delivery", 
                  "Trusted by institutional clients"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50">"We focus on solutions that work without complexity."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: CTA (MASTER PLATE) ================= */}
        <section className="py-32 text-center bg-slate-50 rounded-[5rem] mb-20 border border-slate-200 shadow-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-12 tracking-tighter leading-none">
              Looking for <br/> 
              <span className="italic text-blue-600 font-light">No-Power Diffusers?</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-16 leading-relaxed font-light max-w-4xl mx-auto font-sans">
              If you need a simple, electricity-free fragrance solution for washrooms, elevators, or enclosed spaces, Natural Fragrance Diffusion from Cool Max is the right choice.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <HandThumbUpIcon className="w-6 h-6" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-[#128C7E] hover:shadow-2xl flex items-center justify-center gap-3"
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