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
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  HomeIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

// --- IMAGE ASSETS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/1.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/2.webp"; 

export default function MaintenancePage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-emerald-50/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12 text-left">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6 shadow-sm">
                <WrenchScrewdriverIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Reliable Ongoing Care
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Maintenance & <br />
                <span className="italic text-slate-400 font-light pr-2">Refill Support</span> <br />
                Services in UAE.
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Reliable Ongoing Care for Scent & Hygiene Systems
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#explore" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-emerald-600 transition-all shadow-xl">
                  Our Services
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Support
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Maintenance Support" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO ================= */}
        <section className="py-16 border-t border-slate-100" id="explore">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-base md:text-lg leading-relaxed text-slate-600 space-y-8 text-left"
          >
            <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-emerald-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Installing a scent system is only the first step. To maintain consistent fragrance quality, system performance, and hygiene standards, regular maintenance and timely refilling are essential. At Cool Max Scent, we provide professional maintenance and refill support services in UAE to ensure your scent diffuser machines, commercial scent machines, and hygiene systems operate reliably every day.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-emerald-600 rounded-r-2xl shadow-sm">
              <p className="italic text-slate-500 font-light text-sm md:text-base">
                Our maintenance and refill programs are designed for businesses that value consistency, efficiency, and peace of mind. Whether you use a home scent diffuser, a commercial scent diffuser, or an HVAC scent diffuser, Cool Max ensures your system continues to deliver the right fragrance at the right intensity—without disruption.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHY IT MATTERS ================= */}
        <section className="py-16">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-sm text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tighter leading-none">Why Maintenance & Refill Support Matters</h2>
                <p className="text-slate-500 mb-8 text-base md:text-lg font-light leading-relaxed">
                  Scent systems are often overlooked once installed, but without proper care, performance can decline over time.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Consistent Fragrance Experience", desc: "Regular maintenance ensures your aroma scent diffuser delivers the same balanced fragrance day after day." },
                    { title: "Avoids System Downtime", desc: "Scheduled servicing prevents issues such as clogging, uneven diffusion, or system failure." },
                    { title: "Cost Efficiency", desc: "Proper upkeep extends equipment lifespan and reduces the need for premature replacements." },
                    { title: "Professional Standards", desc: "For hotels, offices, malls, and healthcare facilities, reliable scenting reflects professionalism and operational discipline." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <h3 className="text-base font-bold text-emerald-600 mb-1 font-serif leading-tight">{item.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] rounded-[2.5rem] border border-white overflow-hidden shadow-xl group"
              >
                 <img src={FeatureImg1} alt="Technician care" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center gap-4">
                       <div className="p-2 bg-emerald-600 rounded-lg shadow-lg">
                         <ArrowPathIcon className="w-5 h-5 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-base">Continuous performance through expert care.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT IS IT? ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 hidden lg:block">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[550px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="System Maintenance" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 tracking-tighter leading-none">What Is Maintenance & Refill Support?</h2>
                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-xl">
                      Maintenance and refill support involves ongoing service care for scent and hygiene systems. At Cool Max, we offer structured maintenance programs designed to suit different environments and usage levels.
                    </p>
                </div>

                <div className="space-y-3">
                    {[
                      "Replacing fragrance oils or refills",
                      "Cleaning and inspecting diffuser components",
                      "Checking system settings and performance",
                      "Adjusting fragrance intensity as needed",
                      "Preventive maintenance to avoid breakdowns"
                    ].map((item, i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 hover:border-emerald-200 rounded-[2rem] transition-all duration-300 shadow-sm"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                           <CheckBadgeIcon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 text-sm md:text-base font-medium">{item}</span>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SERVICES ================= */}
        <section className="py-16 border-t border-slate-100">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4">Our Maintenance & Refill Support Services</h2>
            <h3 className="text-3xl md:text-6xl font-serif text-slate-900 tracking-tighter leading-none">Comprehensive System Care</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Scheduled Fragrance Refills", desc: "We provide timely refilling of fragrance oils for commercial scent machines, hotel scent machines, and home fragrance systems, ensuring uninterrupted operation.", icon: <BeakerIcon /> },
              { title: "System Inspection & Cleaning", desc: "Our technicians inspect and clean diffuser components to maintain optimal diffusion and prevent residue buildup.", icon: <ClipboardDocumentCheckIcon /> },
              { title: "Performance Monitoring", desc: "We check fragrance output, coverage consistency, and system settings to ensure even distribution across the space.", icon: <ClockIcon /> },
              { title: "Intensity Adjustment", desc: "Fragrance intensity can be adjusted based on seasonal needs, foot traffic, or space usage.", icon: <ArrowPathIcon /> },
              { title: "Replacement of Consumables", desc: "Where required, we replace consumable parts to maintain system efficiency and reliability.", icon: <Cog6ToothIcon /> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-lg transition-all text-left shadow-sm"
              >
                <div className="w-12 h-12 bg-white text-emerald-600 flex items-center justify-center rounded-xl mb-6 shadow-sm border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {React.cloneElement(srv.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-black uppercase tracking-tight text-slate-900 mb-3 font-sans leading-tight">{srv.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SYSTEMS COVERED ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Systems Covered Under Our Maintenance Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Commercial Scent Diffusers", icon: <BuildingOfficeIcon />, desc: "Regular servicing ensures commercial scent diffusers operate efficiently in offices, retail spaces, and public facilities." },
              { title: "HVAC Scent Diffuser Systems", icon: <Cog6ToothIcon />, desc: "We maintain HVAC scent diffuser systems to ensure smooth integration with air-conditioning systems and consistent fragrance distribution." },
              { title: "Hotel Scent Machines", icon: <SparklesIcon />, desc: "For hospitality environments, our support ensures hotel scent diffusers maintain a consistent guest experience." },
              { title: "Home & Personal Space Diffusers", icon: <HomeIcon />, desc: "We also support home diffuser machines and scent machines for home, ensuring reliable performance." },
              { title: "Washroom Hygiene Systems", icon: <ShieldCheckIcon />, desc: "Our services include maintenance of washroom air freshening and hygiene systems in high-traffic areas." },
            ].map((sys, i) => (
              <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col hover:bg-white transition-all group shadow-sm">
                <div className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                   {React.cloneElement(sys.icon, { className: "w-full h-full" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{sys.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{sys.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: PROCESS ================= */}
        <section className="py-16 border-t border-slate-100">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center leading-none">How Our Maintenance Process Works</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { step: "Step 1", title: "Service Scheduling", desc: "We plan maintenance visits based on usage levels and client requirements." },
              { step: "Step 2", title: "On-Site Inspection", desc: "Our technicians inspect the scent air machine, check oil levels, and review system performance." },
              { step: "Step 3", title: "Refill & Cleaning", desc: "Fragrance refills are replaced, and internal components are cleaned as required." },
              { step: "Step 4", title: "System Optimization", desc: "Settings are adjusted to maintain balanced fragrance intensity." },
              { step: "Step 5", title: "Reporting & Recommendations", desc: "We provide feedback and suggestions to improve performance or efficiency." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-emerald-200 transition-all group shadow-sm"
              >
                <span className="text-4xl md:text-6xl font-serif text-slate-200 group-hover:text-emerald-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-1">{proc.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-light">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7/8/9: PLANS & WHY CHOOSE ================= */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
               <h2 className="text-3xl font-serif text-slate-900 mb-6">Maintenance Plans</h2>
               <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-emerald-600 mb-1">Monthly Service Plans</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Ideal for high-traffic environments such as malls, hotels, and hospitals.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-600 mb-1">Quarterly Service Plans</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Suitable for offices, clinics, and medium-use facilities.</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-emerald-600 mb-1">Customized Maintenance Schedules</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">We tailor service frequency based on space size, usage, and system type.</p>
                  </div>
               </div>
               <p className="mt-8 text-sm text-slate-400 italic">Our flexible plans ensure businesses pay only for what they need.</p>
            </div>

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px]" />
               <h2 className="text-3xl font-serif mb-8 relative z-10">Why Choose Cool Max Support?</h2>
               <ul className="space-y-4 relative z-10">
                  {[
                    "UAE-based service team",
                    "Experience across multiple industries",
                    "Support for all scent machine for business types",
                    "Reliable refill scheduling",
                    "Transparent service process"
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <ShieldCheckIcon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 font-medium text-sm">{point}</span>
                    </li>
                  ))}
               </ul>
               <p className="mt-8 text-emerald-400 font-serif italic text-lg relative z-10">"We focus on long-term partnerships, not one-time installations."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10/11: CONSIDERATIONS ================= */}
        <section className="py-16 text-center">
           <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">When Should You Consider Professional Support?</h2>
           <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                "Fragrance intensity has reduced",
                "Systems are operating inconsistently",
                "Manual refills are becoming inconvenient",
                "Hygiene standards are critical",
                "You want predictable service and cost control"
              ].map((q, i) => (
                <div key={i} className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-full shadow-sm text-slate-700 text-sm font-bold">
                  {q}
                </div>
              ))}
           </div>

           <div className="max-w-4xl mx-auto p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100">
              <h3 className="text-2xl md:text-4xl font-serif text-emerald-900 mb-6">Supporting Your Brand Through Consistent Scenting</h3>
              <p className="text-emerald-800 leading-relaxed font-light">
                A scent system is part of your environment identity. With proper maintenance, your home fragrance system, commercial scent machine, or HVAC scent diffuser continues to support comfort, hygiene, and brand perception. Cool Max ensures your scenting investment delivers long-term value.
              </p>
           </div>
        </section>

        {/* ================= SECTION 12: MASTER CTA ================= */}
        <section className="py-24 text-center relative px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Let’s Keep Your Scent Systems <br /> <span className="italic text-emerald-600 font-light">Running Smoothly</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you manage a hotel, office, hospital, school, or commercial facility, Cool Max provides dependable maintenance and refill support services in UAE to keep your scent and hygiene systems operating at their best.
            </p>
            
            <p className="text-sm font-black uppercase text-emerald-600 tracking-widest mb-8">Looking for reliable maintenance and refill support in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
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