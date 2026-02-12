import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CloudIcon, 
  ArrowsPointingOutIcon, 
  ComputerDesktopIcon, 
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon, 
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/AirPulse 150/1.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/AirPulse 150/2.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroPillar Floor Diffuser/1.webp"; 

export default function HVACSolutionsPage() {
  const whatsappNumber = "971522286401";

  // --- SEO METADATA IMPLEMENTATION ---
  useEffect(() => {
    document.title = "HVAC Scenting Solutions in UAE | Cool Max Scent";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "HVAC scenting solutions in UAE for malls, airports, & large facilities. Discover centralized scent diffusers for consistent fragrance coverage by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100 overflow-x-hidden">
      <link rel="canonical" href="https://coolmaxscent.com/hvac-scenting-solutions" />

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-cyan-50/50 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-6 shadow-sm mt-16 relative z-10">
                <CloudIcon className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  HVAC Scenting Solutions in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-6xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                HVAC Scenting <br />
                <span className="italic text-slate-400 font-light pr-2">Solutions in UAE</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-xl mb-8 leading-relaxed text-left">
                Professional Fragrance Distribution and Centralized Scenting Solutions for Scenting for Large Commercial Spaces.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#explore" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-cyan-600 transition-all shadow-xl">
                  View Systems
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3 font-sans"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Expert
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
                alt="Commercial HVAC Aroma Diffuser" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]" 
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
            <p className="first-letter:text-6xl md:first-letter:text-7xl first-letter:font-serif first-letter:text-cyan-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify text-left">
              Scenting for Large Commercial Spaces requires a different approach. Standard air fresheners or small diffuser machines are not designed to cover wide areas or deliver consistent fragrance across multiple zones. At Cool Max Scent, we provide professional HVAC Scenting Solutions in UAE that allow fragrance to be evenly distributed through centralized air-conditioning systems.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-cyan-600 rounded-r-2xl shadow-sm">
              <p className="italic text-slate-500 font-light text-sm md:text-base text-left">
                Our HVAC Scent Diffuser UAE systems are ideal for hotels, shopping malls, airports, office buildings, hospitals, and other large facilities where consistent fragrance coverage is essential. By integrating Centralized Scenting Solutions directly into HVAC systems, we help businesses maintain clean, fresh, and welcoming environments throughout their entire space.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-16">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-sm text-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tighter text-left">What Is HVAC Scenting?</h2>
                <div className="space-y-6 text-slate-500 text-base md:text-lg font-light leading-relaxed text-left">
                  <p>
                    HVAC scenting is a professional fragrance distribution method that uses a Commercial HVAC Aroma Diffuser connected to centralized air-conditioning systems. Instead of scenting a single room, fragrance is delivered through the air ducts and circulated evenly across multiple areas.
                  </p>
                  <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                    <h4 className="text-cyan-600 font-black mb-4 uppercase text-[10px] tracking-widest border-b border-slate-50 pb-2 text-left">This method ensures</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {["Uniform fragrance coverage", "Controlled intensity", "Continuous performance", "Minimal visual impact"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-bold text-left">
                          <CheckBadgeIcon className="w-4 h-4 text-cyan-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-cyan-600 font-medium font-serif italic text-xl text-left">
                    Unlike standalone scent diffuser machines, a Commercial HVAC Aroma Diffuser is designed specifically for large-scale environments where consistency and coverage are critical.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[500px] rounded-[2.5rem] border border-white overflow-hidden shadow-xl group"
              >
                 <img src={FeatureImg1} alt="HVAC Scent Diffuser UAE Integration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 shadow-xl">
                       <div className="p-2 bg-cyan-600 rounded-lg">
                         <ArrowsPointingOutIcon className="w-5 h-5 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-base">Centralized Scenting Solutions.</p>
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IDEAL ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 hidden lg:block">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[550px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl"
                >
                    <img src={FeatureImg2} alt="Scenting for Large Commercial Spaces" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 tracking-tighter leading-none text-left">Why HVAC Scenting Is Ideal for Scenting for Large Commercial Spaces</h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-xl text-left">
                        Large facilities face unique challenges when it comes to indoor air freshness. HVAC Scenting Solutions in UAE address these challenges effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Even Fragrance Distribution", desc: "HVAC scenting ensures fragrance reaches all connected areas, eliminating uneven scent concentration or missed zones." },
                      { title: "Centralized Control", desc: "A single HVAC scent diffuser can manage fragrance levels across multiple rooms or floors, reducing the need for multiple standalone devices." },
                      { title: "Professional & Discreet Solution", desc: "Because the scent is distributed through existing air systems, there are no visible machines affecting interior aesthetics." },
                      { title: "Consistent Indoor Experience", desc: "Guests, customers, and employees experience the same pleasant fragrance throughout the entire building." }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-6 bg-slate-50 border border-slate-100 hover:border-cyan-200 rounded-[2rem] transition-all duration-300 shadow-sm text-left"
                    >
                        <div className="w-8 h-1 bg-cyan-600 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight text-left">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-light text-left">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-16 border-t border-slate-100">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-cyan-600 mb-4">Our HVAC Scenting Solutions in UAE at Cool Max</h2>
            <p className="text-base md:text-lg text-slate-500 font-light text-center">
              Cool Max provides end-to-end HVAC Scenting Solutions in UAE designed for reliability, performance, and ease of maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "HVAC-Compatible Scent Diffuser Machines", desc: "We supply a Commercial HVAC Aroma Diffuser specifically designed for HVAC integration. These systems are built to operate continuously and safely.", icon: <AdjustmentsHorizontalIcon /> },
              { title: "Scalable Scenting for Large Areas", desc: "Our solutions facilitate Scenting for Large Commercial Spaces ranging from a few thousand cubic meters to enterprise-level facilities.", icon: <ArrowsPointingOutIcon /> },
              { title: "Adjustable Intensity & Scheduling", desc: "Fragrance intensity and timing can be adjusted to suit operating hours, occupancy levels, and specific zones.", icon: <ComputerDesktopIcon /> },
              { title: "Low Consumption, High Efficiency", desc: "Our HVAC Scent Diffuser UAE systems are designed to use fragrance oils efficiently, reducing operational costs while maintaining performance.", icon: <BoltIcon /> }
            ].map((sol, idx) => (
              <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-cyan-200 transition-all shadow-sm text-left">
                <div className="w-12 h-12 bg-white text-cyan-600 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                   {React.cloneElement(sol.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-black uppercase text-slate-900 mb-4 leading-snug text-left">{sol.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light text-left">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Centralized Scenting Solutions Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Hotels & Resorts", desc: "We install hotel scent machines integrated with HVAC systems to enhance guest experience in lobbies, corridors, and common areas." },
              { title: "Shopping Malls & Retail Complexes", desc: "HVAC scenting helps create a pleasant and inviting atmosphere throughout large retail spaces, improving customer comfort." },
              { title: "Airports & Transportation Hubs", desc: "Large public spaces benefit from centralized scenting that maintains freshness across terminals and waiting areas." },
              { title: "Corporate Offices & Business Parks", desc: "A professional fragrance environment supports comfort and creates a positive impression for employees and visitors." },
              { title: "Hospitals & Healthcare Facilities", desc: "Subtle, controlled fragrance diffusion supports cleanliness and comfort without overwhelming sensitive environments." }
            ].map((space, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-cyan-200 transition-all group shadow-sm text-left">
                <h3 className="text-lg font-bold text-slate-900 mb-3 text-left">{space.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light text-left">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON ================= */}
        <section className="py-16 overflow-x-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 text-center tracking-tighter leading-none">HVAC Scenting vs Standalone Commercial Diffusers</h2>
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-xl max-w-5xl mx-auto min-w-[600px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-6">Feature</th>
                  <th className="p-6">Standalone Diffuser</th>
                  <th className="p-6 text-cyan-600">HVAC Scenting System</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm">
                {[
                  { f: "Coverage", s: "Limited to one area", h: "Multi-zone coverage" },
                  { f: "Control", s: "Individual units", h: "Centralized control" },
                  { f: "Visual Presence", s: "Visible devices", h: "Hidden integration" },
                  { f: "Best For", s: "Small–medium spaces", h: "Large facilities" },
                  { f: "Maintenance", s: "Multiple units", h: "Central system" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-serif text-slate-400 text-base">{row.f}</td>
                    <td className="p-6 text-slate-500">{row.s}</td>
                    <td className="p-6 text-cyan-600 font-bold">{row.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 7: TECHNOLOGY ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-left relative overflow-hidden text-left">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter text-left">Technology Behind Our HVAC Scent Diffuser UAE Systems</h2>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4 text-left">
                  {[
                    "Micro-atomization for fine fragrance particles",
                    "Stable diffusion without residue",
                    "Quiet operation",
                    "Programmable timing and output",
                    "Safe for continuous commercial use"
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 text-left">
                      <CheckCircleIcon className="w-5 h-5 text-cyan-400" />
                      <span className="text-white text-sm font-medium text-left">{tech}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm italic border-l border-slate-700 pl-6 text-left">
                  Our systems are engineered to integrate seamlessly with HVAC infrastructure without affecting air quality or system performance.
                </p>
             </div>
          </div>
        </section>

        {/* ================= SECTION 8: IMPLEMENTATION ================= */}
        <section className="py-16 text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How We Implement HVAC Scenting Solutions in UAE</h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { step: "Step 1", title: "Site & HVAC Assessment", desc: "We evaluate your HVAC system, airflow, and space layout to determine feasibility." },
              { step: "Step 2", title: "System Selection", desc: "We recommend the most suitable Commercial HVAC Aroma Diffuser based on coverage area." },
              { step: "Step 3", title: "Installation & Integration", desc: "Our technicians install and integrate the system with minimal disruption." },
              { step: "Step 4", title: "Testing & Optimization", desc: "We fine-tune fragrance intensity and airflow distribution to ensure balanced coverage." },
              { step: "Step 5", title: "Maintenance & Refill Support", desc: "Ongoing service ensures consistent fragrance and reliable system operation." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-cyan-200 transition-all group text-left"
              >
                <span className="text-4xl md:text-6xl font-serif text-slate-200 group-hover:text-cyan-100 transition-colors duration-500 text-left">{proc.step}</span>
                <div className="flex-1 text-center md:text-left text-left">
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-1 text-left">{proc.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-light text-left">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9/11: BENEFITS & SUITABILITY ================= */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm text-left">
               <h2 className="text-3xl font-serif text-slate-900 mb-6 text-left">Benefits of HVAC Scent Diffuser UAE Systems</h2>
               <ul className="space-y-4 text-left">
                  {[
                    "Uniform fragrance throughout large spaces",
                    "Reduced need for multiple devices",
                    "Professional and invisible scent delivery",
                    "Scalable for growing facilities",
                    "Cost-effective for long-term use",
                    "Enhanced guest and customer experience"
                  ].map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 text-left">
                      <CheckBadgeIcon className="w-5 h-5 text-cyan-600" /> {b}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="p-10 bg-cyan-600 rounded-[3rem] text-white shadow-xl text-left">
               <h2 className="text-3xl font-serif mb-6 text-left text-white">Is Centralized Scenting Solutions Right for Your Space?</h2>
               <p className="text-cyan-50 text-sm mb-6 text-left">HVAC scenting is ideal if you:</p>
               <ul className="space-y-4 text-left">
                  {[
                    "Manage a large commercial or public facility",
                    "Want consistent fragrance across multiple zones",
                    "Prefer a discreet, centralized scenting solution",
                    "Require low-maintenance, automated operation",
                    "Need scalable scenting for future expansion"
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-left">
                      <CheckCircleIcon className="w-5 h-5 text-white" /> {s}
                    </li>
                  ))}
               </ul>
               <p className="mt-8 text-xs font-light text-cyan-100 italic text-left">If your space already has centralized air-conditioning, HVAC Scenting Solutions in UAE are often the most efficient option.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: WHY CHOOSE ================= */}
        <section className="py-16">
           <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-10 md:p-16 text-left shadow-sm">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-left">Why Choose Cool Max for HVAC Scenting Solutions in UAE?</h2>
              <p className="text-slate-500 mb-10 max-w-3xl text-left font-light">Businesses choose Cool Max for Centralized Scenting Solutions because of our experience. We focus on delivering scent systems that work reliably every day, not just during installation.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  "UAE-based technical support",
                  "Professional-grade Commercial HVAC Aroma Diffuser systems",
                  "Expertise in large commercial installations",
                  "Reliable maintenance and refill services",
                  "Solutions tailored to real operational needs"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left">
                    <ShieldCheckIcon className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                    <span className="text-slate-700 text-xs font-bold uppercase text-left">{point}</span>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* ================= SECTION 12: FINAL CTA ================= */}
        <section className="py-24 text-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none text-center">
              Let’s Design the Right <br /> <span className="italic text-cyan-600 font-light">HVAC Scenting Solutions in UAE for Your Space</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto font-light leading-relaxed text-center font-sans">
              Whether you manage a hotel, mall, airport, or corporate facility, Cool Max provides reliable HVAC Scenting Solutions in UAE designed to deliver consistent and professional fragrance coverage. Our team will assess your space, recommend the right Commercial HVAC Aroma Diffuser, and provide ongoing support to ensure long-term performance.
            </p>
            
            <p className="text-sm font-black uppercase text-cyan-600 tracking-widest mb-8 text-center">Looking for professional HVAC Scent Diffuser UAE solutions?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-2 font-sans"
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