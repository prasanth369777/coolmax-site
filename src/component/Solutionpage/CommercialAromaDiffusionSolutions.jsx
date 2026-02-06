import React from "react";
import { motion } from "framer-motion";
import { 
  BuildingOffice2Icon, 
  SparklesIcon, 
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/7.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/Air pole Pro Floor Diffuser/6.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Pro Diffuser/5.webp"; 


export default function CommercialDiffusionPage() {
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
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  #1 in UAE
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Commercial <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusion</span> <br />
                Solutions.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Professional Scent Systems for Offices, Hotels & Commercial Spaces
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Cool Max Scent provides professional commercial aroma diffusion solutions in UAE designed for offices, hotels, retail spaces, and healthcare facilities.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#explore" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  View Catalogue
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
              className="relative w-full aspect-square max-w-[650px] p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[4rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="Mistbox X commercial Diffuser" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO (Editorial) ================= */}
        <section className="py-24 border-t border-slate-100" id="explore">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left font-sans">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-slate-600 space-y-10"
            >
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
                Commercial environments demand more than basic air fresheners. They require controlled, consistent, and reliable fragrance systems that can operate throughout the day without disruption. At Cool Max Scent, we provide professional commercial aroma diffusion solutions in UAE designed for offices, hotels, retail spaces, healthcare facilities, and large commercial environments.
              </p>
              <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-3xl shadow-sm">
                <p className="italic text-slate-500 font-light">
                  Our commercial scent diffuser machines are engineered to deliver even fragrance coverage, helping businesses maintain clean, fresh, and welcoming indoor spaces. From compact systems for offices to large-area solutions for malls and hospitality venues, Cool Max offers practical aroma diffusion solutions that work in real commercial conditions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-[3rem] border border-white overflow-hidden shadow-2xl group"
            >
               <img src={FeatureImg1} alt="Commercial Scenting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
               <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 shadow-xl">
                     <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                       <BuildingOffice2Icon className="w-6 h-6 text-white" />
                     </div>
                     <p className="text-slate-900 font-serif text-lg">Engineered for professional environments.</p>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-24">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left font-sans">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter leading-none">What Is Commercial Aroma Diffusion?</h2>
            
            <div className="grid md:grid-cols-2 gap-16 text-slate-500 text-lg font-light leading-relaxed relative z-10">
              <div className="space-y-8">
                <p>
                  Commercial aroma diffusion is the use of professional-grade scent diffuser machines to distribute fragrance evenly across business environments. Unlike consumer air fresheners, commercial aroma diffusion systems are designed for continuous operation, controlled output, and large space coverage.
                </p>
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <p className="text-blue-600 text-sm font-bold">
                    These systems use advanced atomization technology to release fragrance in fine particles, ensuring the scent is noticeable but never overpowering.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <p>
                  Whether installed as a standalone commercial scent diffuser or integrated with air circulation systems, aroma diffusion helps create a pleasant and consistent atmosphere.
                </p>
                <p className="text-blue-600 font-medium font-serif italic text-2xl border-l-4 border-blue-100 pl-6 py-2">
                  At Cool Max, we design commercial aroma diffusion solutions that balance performance, efficiency, and ease of maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-left font-sans">
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="AeroBlack Pro Scenting" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Diffusion <br/> Matters</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                        A business environment is judged within seconds of entry. Smell plays a powerful role in shaping that perception.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: "First Impressions", desc: "A clean and pleasant-smelling space immediately communicates professionalism. Using a commercial scent machine ensures your space smells fresh throughout the day." },
                      { title: "Indoor Experience", desc: "Commercial aroma diffusion systems provide steady fragrance output, unlike manual sprays or traditional air fresheners that fade quickly." },
                      { title: "Brand Identity", desc: "Many businesses use subtle fragrance to match their brand personality—calm, premium, energetic, or welcoming." },
                      { title: "Occupant Comfort", desc: "Balanced fragrance diffusion contributes to a comfortable environment for employees, customers, and visitors." }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-8 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-[2.5rem] transition-all duration-300 shadow-sm"
                    >
                        <div className="w-10 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{item.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-24 border-t border-slate-100 font-sans">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Expert Systems</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Our Solutions</h3>
            <p className="text-lg text-slate-500 mt-8 font-light max-w-2xl mx-auto">
              Cool Max provides a complete range of commercial aroma diffusion systems designed for different space sizes and requirements across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professional Diffusers", desc: "We supply high-quality diffusers suitable for offices, clinics, retail stores, gyms, and hospitality spaces.", icon: <SparklesIcon /> },
              { title: "Scalable Systems", desc: "Solutions scaled based on area size—from small offices to large buildings—ensuring optimal coverage.", icon: <ChartBarIcon /> },
              { title: "HVAC Scenting", desc: "For larger spaces, we offer HVAC scent diffuser solutions that distribute fragrance through centralized air-conditioning.", icon: <BoltIcon /> },
              { title: "Efficiency", desc: "Our machines are designed to operate quietly and energy-efficiently, matching professional environment demands.", icon: <AdjustmentsHorizontalIcon /> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-blue-200 transition-all text-left shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-white text-blue-600 flex items-center justify-center rounded-2xl mb-8 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {React.cloneElement(sol.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED ================= */}
        <section className="py-24 font-sans">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">Commercial Spaces We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Offices & Corporate Buildings", 
                "Hotels & Hospitality", 
                "Retail Stores & Shopping Malls", 
                "Healthcare Facilities & Clinics", 
                "Educational Institutions"
              ].map((space, i) => (
                <span key={i} className="px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-sm font-bold shadow-sm">
                  {space}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto italic font-light">
              From creating professional work environments to enhancing guest experiences in lobbies and increasing dwell time in retail stores.
            </p>
          </div>
        </section>

        {/* ================= SECTION 6: TECHNOLOGY ================= */}
        <section className="py-24 border-t border-slate-100 font-sans text-left">
          <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-none">Diffusion Technology</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
                  Cool Max uses modern aroma scent diffuser technology designed for commercial reliability. Whether you need a compact scent machine or a powerful large-area system.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fine particle atomization for even scent spread", 
                    "Adjustable intensity and scheduling", 
                    "Durable components for long operating hours", 
                    "Low oil consumption for cost efficiency", 
                    "Compatible with standalone or HVAC installations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-200 text-sm font-bold uppercase tracking-wider">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/5 shadow-sm">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                 <div className="w-72 h-72 bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-600/10 blur-[80px]" />
                    <AdjustmentsHorizontalIcon className="w-32 h-32 text-blue-400/50 relative z-10" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON ================= */}
        <section className="py-24 font-sans">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-16 text-center tracking-tighter leading-none">Diffusion Comparison</h2>
          <div className="overflow-hidden bg-white border border-slate-100 rounded-[3rem] shadow-2xl max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-8">Feature</th>
                  <th className="p-8">Regular Air Freshener</th>
                  <th className="p-8 text-blue-600">Commercial Aroma Diffusion</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  { feature: "Coverage", reg: "Small, inconsistent", com: "Even & scalable" },
                  { feature: "Duration", reg: "Short-term", com: "Continuous" },
                  { feature: "Control", reg: "Manual", com: "Automated" },
                  { feature: "Suitability", reg: "Personal use", com: "Business environments" },
                  { feature: "Maintenance", reg: "Frequent replacement", com: "Scheduled refills" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-serif text-slate-400 text-lg">{row.feature}</td>
                    <td className="p-8 text-slate-500">{row.reg}</td>
                    <td className="p-8 text-blue-600 font-bold">{row.com}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 8: PROCESS ================= */}
        <section className="py-24 text-left font-sans">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Assessment", desc: "We evaluate space size, layout, and usage patterns." },
              { step: "02", title: "Recommendation", desc: "We suggest the most suitable diffuser or HVAC system." },
              { step: "03", title: "Installation", desc: "Our team ensures balanced fragrance diffusion setup." },
              { step: "04", title: "Support", desc: "Ongoing service ensures consistent scent quality." }
            ].map((proc, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 transition-all group">
                <span className="text-5xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors duration-500 mb-6 block">{proc.step}</span>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{proc.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9: WHY CHOOSE ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tighter leading-none">Why Choose Cool Max?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-16 font-sans">
                {[
                  "UAE-based support", 
                  "Commercial scent machines", 
                  "Scalable solutions", 
                  "Easy maintenance", 
                  "Professional installation", 
                  "Proven experience"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"Businesses across the UAE trust Cool Max for our reliability and service-oriented approach."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: CTA ================= */}
        <section className="py-32 text-center relative font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">
              Improve Your <br /> <span className="italic text-blue-600 font-light">Commercial Space</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you operate an office, hotel, clinic, or retail facility, Cool Max offers reliable commercial aroma diffusion solutions in UAE designed for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-5 h-5"/>
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