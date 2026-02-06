import React from "react";
import { motion } from "framer-motion";
import { 
  WrenchScrewdriverIcon, 
  ArrowPathIcon, 
  ClipboardDocumentCheckIcon, 
  ClockIcon, 
  CheckBadgeIcon,

  Cog6ToothIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- IMAGE ASSETS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/1.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp"; 


export default function MaintenancePage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-emerald-50/30 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-8 shadow-sm">
                <WrenchScrewdriverIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  Reliable Ongoing Care
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Maintenance & <br />
                <span className="italic text-slate-400 font-light pr-2">Refill Support</span> <br />
                Services.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Reliable Ongoing Care for Scent & Hygiene Systems in UAE
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Professional maintenance and refill support services in UAE ensure your scent diffuser machines and hygiene systems operate reliably every day.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#explore" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-600 transition-all shadow-xl">
                  Our Services
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
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
                alt="System Maintenance Support" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-emerald-900/5 blur-3xl rounded-full" />
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
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-emerald-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Installing a scent system is only the first step. To maintain consistent fragrance quality, system performance, and hygiene standards, regular maintenance and timely refilling are essential. At Cool Max Scent, we provide professional maintenance and refill support services in UAE to ensure your scent diffuser machines, commercial scent machines, and hygiene systems operate reliably every day.
            </p>
            <div className="p-8 bg-slate-50 border-l-4 border-emerald-600 rounded-r-3xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Our maintenance and refill programs are designed for businesses that value consistency, efficiency, and peace of mind. Whether you use a home scent diffuser, a commercial scent diffuser, or an HVAC scent diffuser, Cool Max ensures your system continues to deliver the right fragrance at the right intensity—without disruption.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHY IT MATTERS ================= */}
        <section className="py-24">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter">Why Maintenance & Refill Support Matters</h2>
                <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
                  Scent systems are often overlooked once installed, but without proper care, performance can decline over time.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Fragrance Quality", desc: "Regular maintenance ensures your diffuser delivers the same balanced fragrance day after day." },
                    { title: "Avoid Downtime", desc: "Scheduled servicing prevents issues such as clogging, uneven diffusion, or system failure." },
                    { title: "Cost Efficiency", desc: "Proper upkeep extends equipment lifespan and reduces the need for replacements." },
                    { title: "Professionalism", desc: "For hotels and malls, reliable scenting reflects professionalism and operational discipline." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <h3 className="text-lg font-bold text-emerald-600 mb-2 font-serif leading-tight">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
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
                 <img src={FeatureImg1} alt="Diffuser Servicing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
                       <div className="p-3 bg-emerald-600 rounded-xl shadow-lg">
                         <ArrowPathIcon className="w-6 h-6 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-lg">Continuous performance through expert care.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT IS IT? ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-left font-sans">
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Refill Support" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter leading-none">Operational Care</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                      Maintenance and refill support involves ongoing service care for scent and hygiene systems. At Cool Max, we offer structured maintenance programs designed to suit your usage levels.
                    </p>
                </div>

                <div className="space-y-4">
                    {[
                      "Replacing fragrance oils or refills",
                      "Cleaning and inspecting diffuser components",
                      "Checking system settings and performance",
                      "Adjusting fragrance intensity as needed",
                      "Preventive maintenance to avoid breakdowns"
                    ].map((item, i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 hover:border-emerald-200 rounded-[2rem] transition-all duration-300 shadow-sm"
                    >
                        <CheckBadgeIcon className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-bold uppercase tracking-wider">{item}</span>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SERVICES ================= */}
        <section className="py-24 border-t border-slate-100 font-sans">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6">Expert Services</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Maintenance Support</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Scheduled Refills", desc: "We provide timely refilling of fragrance oils for commercial, hotel, and home systems, ensuring uninterrupted operation.", icon: <BeakerIcon /> },
              { title: "Inspection & Cleaning", desc: "Our technicians inspect and clean diffuser components to maintain optimal diffusion and prevent residue buildup.", icon: <ClipboardDocumentCheckIcon /> },
              { title: "Performance Monitoring", desc: "We check fragrance output, coverage consistency, and system settings to ensure even distribution.", icon: <ClockIcon /> },
              { title: "Intensity Adjustment", desc: "Fragrance intensity can be adjusted based on seasonal needs, foot traffic, or space usage.", icon: <ArrowPathIcon /> },
              { title: "Consumable Replacement", desc: "Where required, we replace consumable parts to maintain system efficiency and reliability.", icon: <Cog6ToothIcon /> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-emerald-200 transition-all text-left shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-white text-emerald-600 flex items-center justify-center rounded-2xl mb-8 shadow-sm border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {React.cloneElement(srv.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4">{srv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SYSTEMS COVERED ================= */}
        <section className="py-24 font-sans text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 tracking-tighter leading-none">Systems Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Commercial Scent Diffusers", desc: "Regular servicing ensures diffusers operate efficiently in offices, retail spaces, and public facilities." },
              { title: "HVAC Scent Diffuser Systems", desc: "We maintain systems to ensure smooth integration with AC and consistent fragrance distribution." },
              { title: "Hotel Scent Machines", desc: "For hospitality environments, our support ensures machines maintain a consistent guest experience." },
              { title: "Home & Personal Diffusers", desc: "We also support home diffuser machines and scent machines for home, ensuring reliable performance." },
              { title: "Washroom Hygiene Systems", desc: "Our services include maintenance of washroom air freshening and hygiene systems in high-traffic areas." },
            ].map((sys, i) => (
              <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-emerald-200 transition-all shadow-sm">
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{sys.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{sys.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: PLANS ================= */}
        <section className="py-24 border-t border-slate-100 font-sans">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">Operational Service Flow</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { step: "01", title: "Scheduling", desc: "We plan maintenance visits based on usage levels and client requirements." },
              { step: "02", title: "Site Inspection", desc: "Technicians inspect the machine, check oil levels, and review performance." },
              { step: "03", title: "Refill & Cleaning", desc: "Fragrance refills are replaced, and internal components are cleaned." },
              { step: "04", title: "Optimization", desc: "Settings are adjusted to maintain balanced fragrance intensity." },
              { step: "05", title: "Reporting", desc: "We provide feedback and suggestions to improve performance or efficiency." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col md:flex-row gap-10 items-center p-10 rounded-[3rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-emerald-200 transition-all group"
              >
                <span className="text-6xl font-serif text-slate-200 group-hover:text-emerald-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">{proc.title}</h3>
                  <p className="text-lg text-slate-500 font-light">{proc.desc}</p>
                </div>
                <ArrowRightIcon className="w-8 h-8 text-slate-300 group-hover:translate-x-2 group-hover:text-emerald-600 transition-all hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9: WHY COOL MAX ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tighter leading-none">Why Choose Cool Max?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16 font-sans">
                {[
                  "UAE-based service team", 
                  "Multi-industry experience", 
                  "Support for all machine types", 
                  "Reliable refill scheduling", 
                  "Transparent process"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-emerald-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"We focus on long-term partnerships, ensuring your scent system remains a reliable part of your environment."</p>
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
              Let’s Keep Your Systems <br /> <span className="italic text-emerald-600 font-light">Running Smoothly</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Whether you manage a hotel, office, hospital, or commercial facility, Cool Max provides dependable maintenance and refill support services in UAE to keep your systems operating at their best.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-emerald-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-[#128C7E] hover:shadow-2xl flex items-center justify-center gap-3 shadow-xl"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}