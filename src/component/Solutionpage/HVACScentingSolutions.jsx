import React from "react";
import { motion } from "framer-motion";
import { 
  CloudIcon, 
  ArrowsPointingOutIcon, 
  ComputerDesktopIcon, 
  EyeSlashIcon, 
  FaceSmileIcon, 
  AdjustmentsHorizontalIcon,
  ServerIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon,
 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp"; 


export default function HVACSolutionsPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND (White/Grey) ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-50/50 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-8 shadow-sm">
                <CloudIcon className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.3em] font-sans">
                  Large Commercial Spaces
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                HVAC <br />
                <span className="italic text-slate-400 font-light pr-2">Scenting</span> <br />
                Solutions.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Professional Fragrance Distribution for Large Commercial Spaces.
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Professional HVAC scenting solutions in UAE allow fragrance to be evenly distributed through centralized air-conditioning systems for malls, hotels, and airports.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 font-sans">
                <a href="#explore" className="px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-cyan-600 transition-all shadow-xl">
                  View Systems
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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
                alt="HVAC Scenting System" 
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
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-cyan-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Large commercial spaces require a different approach to scenting. Standard air fresheners or small diffuser machines are not designed to cover wide areas or deliver consistent fragrance across multiple zones. At Cool Max Scent, we provide professional HVAC scenting solutions in UAE that allow fragrance to be evenly distributed through centralized air-conditioning systems.
            </p>
            <div className="p-8 bg-slate-50 border-l-4 border-cyan-600 rounded-r-3xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Our HVAC scent diffuser systems are ideal for hotels, shopping malls, airports, office buildings, hospitals, and other large facilities where consistent fragrance coverage is essential. By integrating scent diffusion directly into HVAC systems, we help businesses maintain clean, fresh, and welcoming environments throughout their entire space.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-24">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left font-sans">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter">What Is HVAC Scenting?</h2>
                <div className="space-y-8 text-slate-500 text-lg font-light leading-relaxed">
                  <p>
                    HVAC scenting is a professional fragrance distribution method that uses HVAC scent diffuser machines connected to centralized air-conditioning systems. Fragrance is delivered through air ducts and circulated evenly across multiple areas.
                  </p>
                  <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                    <h4 className="text-cyan-600 font-black mb-6 uppercase text-[10px] tracking-widest border-b border-slate-50 pb-2">This method ensures</h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {["Uniform fragrance coverage", "Controlled intensity", "Continuous performance", "Minimal visual impact"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                          <CheckBadgeIcon className="w-5 h-5 text-cyan-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-cyan-600 font-medium font-serif italic text-2xl">
                    Unlike standalone machines, HVAC systems are designed for large-scale environments where consistency is critical.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-[3rem] border border-white overflow-hidden shadow-2xl group"
              >
                 <img src={FeatureImg1} alt="HVAC Integration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 shadow-xl">
                       <div className="p-3 bg-cyan-600 rounded-xl">
                         <ArrowsPointingOutIcon className="w-6 h-6 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-lg">Centralized Scent Distribution.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IDEAL? ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center text-left font-sans">
            <div className="lg:col-span-5">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[650px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Large Area Coverage" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Centralized <br/> Scenting?</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                      Large facilities face unique challenges. HVAC scenting addresses these effectively by using existing infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: "Even Distribution", desc: "HVAC scenting ensures fragrance reaches all connected areas, eliminating uneven concentration.", icon: <ArrowsPointingOutIcon /> },
                      { title: "Centralized Control", desc: "Manage levels across multiple rooms or floors from a single device, reducing management complexity.", icon: <ComputerDesktopIcon /> },
                      { title: "Discreet Solution", desc: "No visible machines affecting interior aesthetics as scent is delivered through air systems.", icon: <EyeSlashIcon /> },
                      { title: "Consistency", desc: "Guests and employees experience the same pleasant fragrance throughout the entire building.", icon: <FaceSmileIcon /> }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-8 bg-slate-50 border border-slate-100 hover:border-cyan-200 rounded-[2.5rem] transition-all duration-300 shadow-sm"
                    >
                        <div className="w-10 h-1 bg-cyan-600 rounded-full mb-6 group-hover:w-full transition-all duration-500" />
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
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-6">Expert Engineering</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Our Solutions</h3>
            <p className="text-lg text-slate-500 mt-8 font-light max-w-2xl mx-auto">
              Cool Max provides end-to-end HVAC scenting solutions designed for reliability, performance, and ease of maintenance across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Compatible Machines", desc: "Professional scent air machines specifically designed for HVAC integration and safe continuous operation." },
              { title: "Scalable Systems", desc: "Suitable for spaces from a few thousand cubic meters to very large enterprise-level environments." },
              { title: "Precision Control", desc: "Adjustable intensity and timing to suit operating hours, occupancy levels, and specific zones." },
              { title: "High Efficiency", desc: "Designed to use fragrance oils efficiently, reducing operational costs while maintaining high performance." }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:border-cyan-200 transition-all text-left shadow-sm hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-white text-cyan-600 flex items-center justify-center rounded-2xl mb-8 shadow-sm border border-slate-100 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <AdjustmentsHorizontalIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4 leading-snug">{sol.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED ================= */}
        <section className="py-24 font-sans text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 tracking-tighter leading-none">Spaces We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Hotels & Resorts", desc: "Integrated with HVAC to enhance guest experience in lobbies, corridors, and common areas." },
              { title: "Shopping Malls", desc: "Improving customer comfort and dwell time throughout large retail environments." },
              { title: "Airports & Hubs", desc: "Centralized scenting that maintains freshness across terminals and waiting areas." },
              { title: "Corporate Parks", desc: "Creating a positive impression for employees and visitors in professional workspaces." },
              { title: "Healthcare Facilities", desc: "Subtle fragrance diffusion supporting cleanliness without overwhelming sensitive environments." },
            ].map((space, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 transition-all group shadow-sm">
                <div className="w-14 h-14 bg-white text-cyan-600 border border-slate-100 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  <BuildingOfficeIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{space.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: TECHNOLOGY ================= */}
        <section className="py-24 border-t border-slate-100 font-sans text-left">
          <div className="bg-slate-900 rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-none">Diffusion Technology</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
                  Cool Max uses advanced technology designed for HVAC compatibility. Our systems integrate with infrastructure without affecting air quality.
                </p>
                <ul className="space-y-4">
                  {[
                    "Micro-atomization for fine fragrance particles",
                    "Stable diffusion without residue",
                    "Quiet operation",
                    "Programmable timing and output",
                    "Safe for continuous commercial use"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-200 text-sm font-bold uppercase tracking-wider">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 border border-white/5 shadow-sm">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                 <div className="w-72 h-72 bg-white/5 border border-white/10 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-cyan-600/10 blur-[80px]" />
                    <ServerIcon className="w-32 h-32 text-cyan-400/50 relative z-10" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: PROCESS ================= */}
        <section className="py-24 text-left font-sans">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">Implementation Flow</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { step: "01", title: "HVAC Assessment", desc: "We evaluate your system, airflow, and space layout to determine feasibility." },
              { step: "02", title: "System Selection", desc: "Based on area and capacity, we recommend the most suitable diffuser machine." },
              { step: "03", title: "Integration", desc: "Our technicians install the system with minimal disruption to your operations." },
              { step: "04", title: "Optimization", desc: "We fine-tune fragrance intensity and airflow to ensure balanced coverage." },
              { step: "05", title: "Maintenance", desc: "Ongoing service ensures consistent fragrance and reliable system operation." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col md:flex-row gap-10 items-center p-10 rounded-[3rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-cyan-200 transition-all group"
              >
                <span className="text-6xl font-serif text-slate-200 group-hover:text-cyan-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">{proc.title}</h3>
                  <p className="text-lg text-slate-500 font-light">{proc.desc}</p>
                </div>
                <ArrowRightIcon className="w-8 h-8 text-slate-300 group-hover:translate-x-2 group-hover:text-cyan-600 transition-all hidden md:block" />
              </motion.div>
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
                  "UAE technical support", 
                  "Professional-grade systems", 
                  "Commercial expertise", 
                  "Reliable maintenance", 
                  "Operational solutions"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <BoltIcon className="w-5 h-5 text-cyan-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"We focus on delivering HVAC scent systems that work reliably every day in the UAE's demanding climate."</p>
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
              Design the Right <br /> <span className="italic text-cyan-600 font-light">HVAC Scenting Solution</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Whether you manage a hotel, mall, airport, or corporate facility, Cool Max provides reliable HVAC scenting solutions in UAE designed to deliver consistent and professional fragrance coverage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-cyan-600 hover:shadow-2xl flex items-center justify-center gap-3">
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