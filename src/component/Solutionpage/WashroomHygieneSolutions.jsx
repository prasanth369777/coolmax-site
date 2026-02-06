import React from "react";
import { motion } from "framer-motion";
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  BeakerIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon, 
  ShoppingBagIcon, 
  FaceSmileIcon, 
 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- UPDATED IMAGE IMPORTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/CeilAir Pro Diffuser/1.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/AeroCube Diffuser/2.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/2.webp"; 


export default function WashroomHygienePage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-teal-600" />
                <span className="text-teal-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  Clean & Fresh
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Washroom <br />
                <span className="italic text-slate-400 font-light pr-2">Hygiene</span> <br />
                Solutions.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Professional Odor Control & Air Freshening for Commercial Washrooms.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Cool Max Scent provides professional washroom hygiene solutions in UAE designed to maintain clean, fresh, and odor-free washrooms in commercial environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#explore" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-teal-600 transition-all shadow-xl">
                  View Systems
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
                alt="Washroom Hygiene Solution" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO (Editorial) ================= */}
        <section className="py-24 border-t border-slate-100 font-sans" id="explore">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 space-y-10 text-left"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-teal-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Washrooms are one of the most frequently used and closely judged areas in any facility. A poorly maintained washroom can negatively impact user perception, hygiene confidence, and brand image. At Cool Max Scent, we provide professional washroom hygiene solutions in UAE designed to maintain clean, fresh, and odor-free washrooms in commercial and institutional environments.
            </p>
            <div className="p-8 bg-slate-50 border-l-4 border-teal-600 rounded-r-3xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Our washroom hygiene systems combine advanced scent diffuser machines, professional air freshening technology, and reliable service support to ensure consistent freshness throughout the day. From offices and schools to hospitals, malls, and restaurants, Cool Max helps businesses maintain washroom environments that meet modern hygiene expectations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHY CRITICAL? ================= */}
        <section className="py-24">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left font-sans">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter">Why Washroom Hygiene Is Critical</h2>
                <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
                  Washrooms directly influence how people perceive cleanliness and professionalism. Odors must be properly managed to maintain a positive facility image.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "First Impressions", desc: "A fresh-smelling washroom immediately reassures users about hygiene standards. Using professional diffusers ensures washrooms remain pleasant even during peak usage." },
                    { title: "Health & Comfort", desc: "Effective washroom hygiene helps reduce unpleasant odors and supports a cleaner indoor environment, contributing to overall comfort." },
                    { title: "Brand Responsibility", desc: "For hotels, malls, and public facilities, washroom hygiene reflects how much attention a business gives to user experience and care." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <h3 className="text-lg font-bold text-teal-600 mb-2 font-serif">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-[3rem] border border-white overflow-hidden shadow-2xl group"
              >
                 <img src={FeatureImg1} alt="Hygiene Standards" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
                       <div className="p-3 bg-teal-600 rounded-xl">
                         <ShieldCheckIcon className="w-6 h-6 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-lg">Maintaining professional standards.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT ARE THEY? ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-left font-sans">
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[550px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Washroom Visual" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter leading-none">Hygiene Solutions</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                      Professional air scent machines and aroma diffusers designed specifically for high-traffic restroom environments.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  {["Automated", "Long-lasting", "Consistent", "Commercial Usage"].map((tag, i) => (
                    <div key={i} className="py-4 px-6 bg-slate-50 border border-slate-200 rounded-2xl text-teal-600 font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] text-center shadow-sm">
                      {tag}
                    </div>
                  ))}
                </div>
                
                <p className="text-slate-400 text-sm italic border-l-4 border-slate-100 pl-6">
                  At Cool Max, our solutions are tailored to different washroom sizes and usage levels to ensure reliable performance.
                </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-24 border-t border-slate-100 font-sans">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-teal-600 mb-6">Expert Systems</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Our Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Washroom Air Freshening", desc: "Commercial scent diffuser machines designed to neutralize odors and release controlled fragrance at set intervals." },
              { title: "Wall-Mounted & Compact", desc: "Discreet, space-saving diffusers adapted for washroom use—ideal for cubicles, corridors, and common restroom areas." },
              { title: "Low-Maintenance Systems", desc: "Many washroom solutions use battery-powered scent air machines, reducing installation complexity and maintenance effort." },
              { title: "Consistent Scent Control", desc: "Systems allowing controlled scent release, preventing overpowering smells while maintaining freshness throughout operating hours." }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-teal-200 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-6 right-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <SparklesIcon className="w-16 h-16 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif leading-snug">{sol.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED ================= */}
        <section className="py-24 font-sans text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 tracking-tighter leading-none">Spaces We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BuildingOfficeIcon />, title: "Offices & Corporate", desc: "Reflecting workplace hygiene standards and employee comfort." },
              { icon: <BeakerIcon />, title: "Hospitals & Clinics", desc: "Subtle fragrance solutions suitable for clinical healthcare environments." },
              { icon: <AcademicCapIcon />, title: "Educational Institutions", desc: "Ensuring fresh and hygienic washrooms for students and staff." },
              { icon: <ShoppingBagIcon />, title: "Retail & Malls", desc: "Reliable odor control systems that operate throughout the day." },
              { icon: <FaceSmileIcon />, title: "Restaurants & Chains", desc: "Neutralize odors while maintaining a welcoming environment." },
              { icon: <SparklesIcon />, title: "Hotels & Hospitality", desc: "Complementing premium scenting with dedicated hygiene solutions." },
            ].map((space, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-teal-200 transition-all group shadow-sm">
                <div className="w-14 h-14 bg-white text-teal-600 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-teal-600 group-hover:text-white transition-all">
                  {React.cloneElement(space.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{space.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON ================= */}
        <section className="py-24 font-sans">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 text-center tracking-tighter leading-none">Professional Matrix</h2>
          
          <div className="overflow-hidden bg-white border border-slate-100 rounded-[3rem] shadow-2xl max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-8">Comparison Matrix</th>
                  <th className="p-8">Regular Air Freshener</th>
                  <th className="p-8 text-teal-600">Professional Hygiene</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  { feature: "Coverage", reg: "Limited", pro: "Designed for washrooms" },
                  { feature: "Duration", reg: "Short-term", pro: "Continuous" },
                  { feature: "Control", reg: "Manual", pro: "Automated" },
                  { feature: "Maintenance", reg: "Frequent replacement", pro: "Scheduled service" },
                  { feature: "Suitability", reg: "Home use", pro: "Commercial environments" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-serif text-slate-400 text-lg">{row.feature}</td>
                    <td className="p-8 text-slate-500">{row.reg}</td>
                    <td className="p-8 text-teal-600 font-bold">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 8: IMPLEMENTATION ================= */}
        <section className="py-24 text-left font-sans">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">Deployment</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Assessment", desc: "We evaluate washroom size, foot traffic, and patterns." },
              { step: "02", title: "Solution", desc: "We recommend the most suitable air freshening system." },
              { step: "03", title: "Installation", desc: "Our team installs the system for optimal distribution." },
              { step: "04", title: "Support", desc: "Ongoing refill support to ensure uninterrupted freshness." }
            ].map((proc, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-teal-200 transition-all group">
                <span className="text-5xl font-serif text-slate-200 group-hover:text-teal-100 transition-colors duration-500 mb-6 block">{proc.step}</span>
                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{proc.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 10: WHY CHOOSE ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tighter leading-none">Why Cool Max UAE?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16 font-sans">
                {[
                  "UAE-based service team", 
                  "Professional-grade systems", 
                  "Scalable solutions", 
                  "Easy-to-maintain", 
                  "Reliable refills"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-teal-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"Businesses across the UAE trust Cool Max for dependable hygiene solutions and service-driven excellence."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: CTA ================= */}
        <section className="py-32 text-center relative font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">
              Washroom <br /> <span className="italic text-teal-600 font-light">Hygiene Excellence</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Whether you manage an office, hospital, restaurant, or commercial facility, Cool Max offers reliable washroom hygiene solutions in UAE. Our team handles the service—so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-teal-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-[#128C7E] hover:shadow-2xl flex items-center justify-center gap-3 shadow-xl"
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