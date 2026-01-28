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
} from "@heroicons/react/24/outline";

export default function CommercialDiffusionPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-24 relative">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-200 text-xs font-bold tracking-widest uppercase">
                #1 in UAE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Commercial Aroma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white italic">
                Diffusion Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Professional Scent Systems for Offices, Hotels & Commercial Spaces
            </p>
          </motion.div>
        </section>

        {/* ================= SECTION 1: INTRO (Editorial Layout) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-slate-400 space-y-8"
            >
              <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-indigo-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
                Commercial environments demand more than basic air fresheners. They require controlled, consistent, and reliable fragrance systems that can operate throughout the day without disruption. At Cool Max Scent, we provide professional commercial aroma diffusion solutions in UAE designed for offices, hotels, retail spaces, healthcare facilities, and large commercial environments.
              </p>
              <div className="pl-6 border-l-2 border-indigo-500">
                <p className="italic text-indigo-100">
                  Our commercial scent diffuser machines are engineered to deliver even fragrance coverage, helping businesses maintain clean, fresh, and welcoming indoor spaces. From compact systems for offices to large-area solutions for malls and hospitality venues, Cool Max offers practical aroma diffusion solutions that work in real commercial conditions.
                </p>
              </div>
            </motion.div>
            
            {/* Visual Abstract */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] bg-gradient-to-br from-indigo-900/10 to-transparent rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden"
            >
               <div className="absolute inset-0 bg-indigo-500/10 blur-[80px]" />
               <BuildingOffice2Icon className="w-48 h-48 text-indigo-500/20 relative z-10" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center md:text-left">What Is Commercial Aroma Diffusion?</h2>
            
            <div className="grid md:grid-cols-2 gap-16 text-slate-400 text-lg leading-relaxed relative z-10">
              <div className="space-y-8">
                <p>
                  Commercial aroma diffusion is the use of professional-grade scent diffuser machines to distribute fragrance evenly across business environments. Unlike consumer air fresheners, commercial aroma diffusion systems are designed for continuous operation, controlled output, and large space coverage.
                </p>
                <div className="bg-indigo-950/30 p-6 rounded-2xl border border-indigo-500/10">
                  <p className="text-indigo-200 text-sm font-medium">
                    These systems use advanced atomization technology to release fragrance in fine particles, ensuring the scent is noticeable but never overpowering.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <p>
                  Whether installed as a standalone commercial scent diffuser or integrated with air circulation systems, aroma diffusion helps create a pleasant and consistent atmosphere.
                </p>
                <p className="text-white font-serif text-xl border-l-2 border-indigo-400 pl-6">
                  At Cool Max, we design commercial aroma diffusion solutions that balance performance, efficiency, and ease of maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS (Bento Grid) ================= */}
        <section className="py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Commercial Aroma Diffusion Matters</h2>
            <p className="text-slate-400 text-lg">
              A business environment is judged within seconds of entry. Smell plays a powerful role in shaping that perception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Professional First Impressions", desc: "A clean and pleasant-smelling space immediately communicates professionalism. Using a commercial scent machine ensures your space smells fresh throughout the day, not just at specific times." },
              { title: "Consistent Indoor Experience", desc: "Commercial aroma diffusion systems provide steady fragrance output, unlike manual sprays or traditional air fresheners that fade quickly." },
              { title: "Supports Brand & Environment Identity", desc: "Many businesses use subtle fragrance to match their brand personality—calm, premium, energetic, or welcoming." },
              { title: "Improved Comfort for Occupants", desc: "Balanced fragrance diffusion contributes to a comfortable environment for employees, customers, and visitors." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-indigo-500/30 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.03] hover:-translate-y-2"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-indigo-200 transition-colors">{item.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: SOLUTIONS (Feature Cards) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Commercial Aroma Diffusion Solutions</h2>
            <p className="text-slate-400 text-lg">
              Cool Max provides a complete range of commercial aroma diffusion systems designed for different space sizes and usage requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Commercial Scent Diffusers", desc: "We supply high-quality commercial scent diffusers suitable for offices, clinics, retail stores, gyms, and hospitality spaces. These systems are built for daily operation and consistent performance." },
              { title: "Scalable Diffusion Systems", desc: "Our solutions can be scaled based on area size—from small offices to large commercial buildings—ensuring optimal fragrance coverage without wastage." },
              { title: "HVAC-Compatible Aroma Diffusion", desc: "For larger spaces, we offer HVAC scent diffuser solutions that distribute fragrance through centralized air-conditioning systems, ensuring uniform coverage across multiple zones." },
              { title: "Low-Noise, Energy-Efficient Operation", desc: "Our air scent machines are designed to operate quietly, making them suitable for professional environments where noise control is important." }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-indigo-500/40 transition-all overflow-hidden"
              >
                <div className="w-14 h-14 bg-indigo-900/20 text-indigo-400 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-900/10">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 font-serif">{sol.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES SERVED (Interactive Tags) ================= */}
        <section className="py-24 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">Commercial Spaces We Serve</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg">Our commercial aroma diffusion solutions are trusted across a wide range of industries in the UAE.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Offices & Corporate Buildings", 
                "Hotels & Hospitality", 
                "Retail Stores & Shopping Malls", 
                "Healthcare Facilities & Clinics", 
                "Educational Institutions"
              ].map((space, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-full bg-[#0B0F19] border border-white/10 text-slate-300 text-sm font-medium hover:text-white hover:border-indigo-500/50 hover:bg-indigo-900/20 transition-all cursor-default shadow-sm"
                >
                  {space}
                </motion.span>
              ))}
            </div>
            <p className="text-slate-500 text-sm max-w-3xl mx-auto italic border-t border-white/5 pt-8">
              From creating professional work environments to enhancing guest experiences in lobbies and increasing dwell time in retail stores, we cover it all.
            </p>
          </div>
        </section>

        {/* ================= SECTION 6: TECHNOLOGY (Dark Card) ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 rounded-[3rem] border border-white/10 p-10 md:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Technology Behind Our Commercial Aroma Diffusion Systems</h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                  Cool Max uses modern aroma scent diffuser technology designed for commercial reliability. Whether you need a compact scent machine for business or a powerful large-area system, our solutions are selected to match real operational demands.
                </p>
                
                <ul className="space-y-5">
                  {[
                    "Fine particle atomization for even scent spread", 
                    "Adjustable intensity and scheduling", 
                    "Durable components for long operating hours", 
                    "Low oil consumption for cost efficiency", 
                    "Compatible with standalone or HVAC installations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-indigo-100 font-medium">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                 <div className="w-72 h-72 bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative backdrop-blur-md">
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[60px]" />
                    <AdjustmentsHorizontalIcon className="w-32 h-32 text-indigo-200/50 relative z-10" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON TABLE (Modernized) ================= */}
        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">Difference Between Commercial Aroma Diffusion & Regular Air Fresheners</h2>
          
          <div className="overflow-hidden bg-white/[0.02] rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500 bg-black/20">
                  <th className="p-6 font-medium">Feature</th>
                  <th className="p-6 font-medium">Regular Air Freshener</th>
                  <th className="p-6 font-bold text-indigo-400">Commercial Aroma Diffusion</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { feature: "Coverage", reg: "Small, inconsistent", com: "Even & scalable" },
                  { feature: "Duration", reg: "Short-term", com: "Continuous" },
                  { feature: "Control", reg: "Manual", com: "Automated" },
                  { feature: "Suitability", reg: "Personal use", com: "Business environments" },
                  { feature: "Maintenance", reg: "Frequent replacement", com: "Scheduled refills" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-serif text-slate-400">{row.feature}</td>
                    <td className="p-6 text-slate-500">{row.reg}</td>
                    <td className="p-6 text-white font-medium bg-indigo-500/5 border-l border-indigo-500/10">{row.com}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-10 text-slate-400 text-sm font-medium">
            Commercial aroma diffusion systems are designed for reliability, consistency, and professional use—making them the right choice for business environments.
          </p>
        </section>

        {/* ================= SECTION 8: PROCESS (Step Cards) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How We Implement Commercial Aroma Diffusion</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Space Assessment", desc: "We evaluate space size, layout, and usage patterns." },
              { step: "02", title: "System Recommendation", desc: "We suggest the most suitable commercial scent diffuser or HVAC scent diffuser based on requirements." },
              { step: "03", title: "Installation & Configuration", desc: "Our team installs and configures the system to ensure balanced fragrance diffusion." },
              { step: "04", title: "Maintenance & Support", desc: "Ongoing service ensures uninterrupted performance and consistent scent quality." }
            ].map((proc, idx) => (
              <div key={idx} className="group relative p-8 border-t-2 border-indigo-500 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-indigo-500/10 transition-colors">{proc.step}</span>
                <h3 className="text-xl font-bold text-white mb-4 mt-2 font-serif">{proc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9: WHY CHOOSE US (Highlight Box) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-16 border border-white/10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Choose Cool Max for Commercial Aroma Diffusion?</h2>
              <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-lg">Businesses across the UAE trust Cool Max for our reliability and service-oriented approach. We focus on long-term performance rather than short-term fixes.</p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "UAE-based support and service", 
                  "Wide range of commercial scent machines", 
                  "Solutions for small offices to large facilities", 
                  "Easy-to-maintain systems", 
                  "Professional installation", 
                  "Proven experience across industries"
                ].map((reason, i) => (
                  <span key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-indigo-100 font-medium">
                    <ShieldCheckIcon className="w-4 h-4 text-indigo-400" />
                    {reason}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: WHEN TO CONSIDER ================= */}
        <section className="py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">When Should You Consider Commercial Aroma Diffusion?</h2>
              <p className="text-slate-400 mb-8 text-lg">Commercial aroma diffusion is ideal if you:</p>
              <ul className="space-y-5">
                {[
                  "Manage an office, hotel, or retail space",
                  "Want a consistent indoor fragrance throughout the day",
                  "Need a professional alternative to basic air fresheners",
                  "Want scalable solutions for growing spaces",
                  "Require low-maintenance, automated scent systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <ArrowRightIcon className="w-5 h-5 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-gradient-to-tr from-indigo-900/20 to-purple-900/20 rounded-[2rem] border border-white/10 flex items-center justify-center p-8">
               <ChartBarIcon className="w-48 h-48 text-indigo-300/10" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: CTA (Premium) ================= */}
        <section className="pt-20 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Let’s Improve Your <br/> <span className="italic text-indigo-400">Commercial Space</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you operate an office, hotel, clinic, or retail facility, Cool Max offers reliable commercial aroma diffusion solutions in UAE designed for your needs. Our team will help you choose the right scent diffuser machine, install it professionally, and provide ongoing support to ensure consistent performance.
            </p>
            <p className="text-indigo-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for a dependable commercial scent diffuser in UAE?
            </p>
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-[#020617] font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)]">
              <span className="relative z-10">Contact Cool Max Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}