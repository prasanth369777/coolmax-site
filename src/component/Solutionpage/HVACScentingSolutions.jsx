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
  ClipboardDocumentCheckIcon,
  BoltIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function HVACSolutionsPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-24 relative">
          
          {/* Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <CloudIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-200 text-xs font-bold tracking-widest uppercase">
                Large Commercial Spaces
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              HVAC Scenting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 italic">
                Solutions in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Professional Fragrance Distribution for Large Commercial Spaces
            </p>
          </motion.div>
        </section>

        {/* ================= SECTION 1: INTRO (Editorial Layout) ================= */}
        <section className="py-24 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-slate-300 space-y-8"
          >
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-cyan-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Large commercial spaces require a different approach to scenting. Standard air fresheners or small diffuser machines are not designed to cover wide areas or deliver consistent fragrance across multiple zones. At Cool Max Scent, we provide professional HVAC scenting solutions in UAE that allow fragrance to be evenly distributed through centralized air-conditioning systems.
            </p>
            <div className="p-8 bg-gradient-to-r from-cyan-900/10 to-transparent border-l-2 border-cyan-500 rounded-r-2xl">
              <p className="italic text-cyan-100">
                Our HVAC scent diffuser systems are ideal for hotels, shopping malls, airports, office buildings, hospitals, and other large facilities where consistent fragrance coverage is essential. By integrating scent diffusion directly into HVAC systems, we help businesses maintain clean, fresh, and welcoming environments throughout their entire space.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS HVAC SCENTING? (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center md:text-left">What Is HVAC Scenting?</h2>
            
            <div className="grid lg:grid-cols-2 gap-16 text-slate-400 text-lg leading-relaxed relative z-10">
              <div className="space-y-8">
                <p>
                  HVAC scenting is a professional fragrance distribution method that uses HVAC scent diffuser machines connected to centralized air-conditioning systems. Instead of scenting a single room, fragrance is delivered through the air ducts and circulated evenly across multiple areas.
                </p>
                <div className="bg-cyan-950/20 p-8 rounded-3xl border border-cyan-500/20">
                  <h4 className="text-cyan-300 font-bold mb-6 uppercase text-xs tracking-widest border-b border-cyan-500/20 pb-2">This method ensures</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {["Uniform fragrance coverage", "Controlled intensity", "Continuous performance", "Minimal visual impact"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-cyan-100">
                        <CheckBadgeIcon className="w-5 h-5 text-cyan-400" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <p>
                  Unlike standalone scent diffuser machines, HVAC scenting systems are designed specifically for large-scale environments where consistency and coverage are critical.
                </p>
                <div className="h-64 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-transparent border border-white/5 flex items-center justify-center">
                   <ArrowsPointingOutIcon className="w-32 h-32 text-cyan-500/30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IDEAL? (Bento Grid) ================= */}
        <section className="py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Why HVAC Scenting Is Ideal</h2>
            <p className="text-slate-400 text-lg">
              Large facilities face unique challenges when it comes to indoor air freshness. HVAC scenting addresses these challenges effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Even Fragrance Distribution", desc: "HVAC scenting ensures fragrance reaches all connected areas, eliminating uneven scent concentration or missed zones.", icon: <ArrowsPointingOutIcon className="w-6 h-6"/> },
              { title: "Centralized Control", desc: "A single HVAC scent diffuser can manage fragrance levels across multiple rooms or floors, reducing the need for multiple standalone devices.", icon: <ComputerDesktopIcon className="w-6 h-6"/> },
              { title: "Professional & Discreet Solution", desc: "Because the scent is distributed through existing air systems, there are no visible machines affecting interior aesthetics.", icon: <EyeSlashIcon className="w-6 h-6"/> },
              { title: "Consistent Indoor Experience", desc: "Guests, customers, and employees experience the same pleasant fragrance throughout the building.", icon: <FaceSmileIcon className="w-6 h-6"/> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-cyan-500/30 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.03] hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-900/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-cyan-200 transition-colors">{item.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS (Feature Cards) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our HVAC Scenting Solutions</h2>
            <p className="text-slate-400 text-lg">
              Cool Max provides end-to-end HVAC scenting solutions designed for reliability, performance, and ease of maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HVAC-Compatible Scent Diffuser Machines", desc: "We supply professional scent air machines specifically designed for HVAC integration. These systems are built to operate continuously and safely within air-conditioning environments." },
              { title: "Scalable Scenting for Large Areas", desc: "Our HVAC solutions are suitable for spaces ranging from a few thousand cubic meters to very large commercial environments, making them ideal for enterprise-level facilities." },
              { title: "Adjustable Intensity & Scheduling", desc: "Fragrance intensity and timing can be adjusted to suit operating hours, occupancy levels, and specific zones." },
              { title: "Low Consumption, High Efficiency", desc: "Our commercial scent diffuser systems are designed to use fragrance oils efficiently, reducing operational costs while maintaining performance." }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-cyan-500/40 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <AdjustmentsHorizontalIcon className="w-24 h-24 text-cyan-500" />
                </div>
                <h3 className="text-lg font-bold text-cyan-100 mb-4 font-serif">{sol.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED (Interactive Tags) ================= */}
        <section className="py-24 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">Where HVAC Scenting Solutions Are Used</h2>
            <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg">HVAC scenting is most effective in environments where size, foot traffic, and consistency matter.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                { title: "Hotels & Resorts", desc: "We install hotel scent machines integrated with HVAC systems to enhance guest experience in lobbies, corridors, and common areas." },
                { title: "Shopping Malls & Retail Complexes", desc: "HVAC scenting helps create a pleasant and inviting atmosphere throughout large retail spaces, improving customer comfort and dwell time." },
                { title: "Airports & Transportation Hubs", desc: "Large public spaces benefit from centralized scenting that maintains freshness across terminals and waiting areas." },
                { title: "Corporate Offices & Business Parks", desc: "A professional fragrance environment supports comfort and creates a positive impression for employees and visitors." },
                { title: "Hospitals & Healthcare Facilities", desc: "Subtle, controlled fragrance diffusion supports cleanliness and comfort without overwhelming sensitive environments." }
              ].map((space, i) => (
                <div key={i} className="p-8 bg-[#0B0F19] border border-white/5 rounded-3xl hover:border-cyan-500/30 transition-all group">
                  <div className="w-10 h-10 bg-cyan-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <BuildingOfficeIcon className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-serif">{space.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{space.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON TABLE (Modernized) ================= */}
        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">HVAC Scenting vs Standalone Commercial Diffusers</h2>
          
          <div className="overflow-hidden bg-white/[0.02] rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500 bg-black/20">
                  <th className="p-6 font-medium">Feature</th>
                  <th className="p-6 font-medium">Standalone Diffuser</th>
                  <th className="p-6 font-bold text-cyan-400">HVAC Scenting System</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { feature: "Coverage", std: "Limited to one area", hvac: "Multi-zone coverage" },
                  { feature: "Control", std: "Individual units", hvac: "Centralized control" },
                  { feature: "Visual Presence", std: "Visible devices", hvac: "Hidden integration" },
                  { feature: "Best For", std: "Small–medium spaces", hvac: "Large facilities" },
                  { feature: "Maintenance", std: "Multiple units", hvac: "Central system" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-serif text-slate-400">{row.feature}</td>
                    <td className="p-6 text-slate-500">{row.std}</td>
                    <td className="p-6 text-white font-medium bg-cyan-500/5 border-l border-cyan-500/10">{row.hvac}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-10 text-slate-400 text-sm font-medium">
            For large environments, HVAC scenting is the most efficient and professional solution.
          </p>
        </section>

        {/* ================= SECTION 7: TECHNOLOGY (Dark Card) ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-br from-cyan-900/20 to-indigo-900/10 rounded-[3rem] border border-white/10 p-10 md:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Technology Behind Our HVAC Scent Diffusers</h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed">
                  Cool Max uses advanced aroma scent diffuser technology designed for HVAC compatibility. Our systems are engineered to integrate seamlessly with HVAC infrastructure without affecting air quality or system performance.
                </p>
                
                <ul className="space-y-5">
                  {[
                    "Micro-atomization for fine fragrance particles",
                    "Stable diffusion without residue",
                    "Quiet operation",
                    "Programmable timing and output",
                    "Safe for continuous commercial use"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-cyan-100 font-medium">
                      <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                 <div className="w-72 h-72 bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center relative backdrop-blur-md">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[60px]" />
                    <ServerIcon className="w-32 h-32 text-cyan-200/50 relative z-10" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: PROCESS (Step Cards) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How We Implement HVAC Scenting Solutions</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { step: "Step 1", title: "Site & HVAC Assessment", desc: "We evaluate your HVAC system, airflow, and space layout to determine feasibility and requirements." },
              { step: "Step 2", title: "System Selection", desc: "Based on coverage area and HVAC capacity, we recommend the most suitable HVAC scent diffuser machine." },
              { step: "Step 3", title: "Installation & Integration", desc: "Our technicians install and integrate the system with minimal disruption to operations." },
              { step: "Step 4", title: "Testing & Optimization", desc: "We fine-tune fragrance intensity and airflow distribution to ensure balanced coverage." },
              { step: "Step 5", title: "Maintenance & Refill Support", desc: "Ongoing service ensures consistent fragrance and reliable system operation." }
            ].map((proc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-cyan-500/30 transition-colors group">
                <div className="min-w-[100px]">
                  <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm bg-cyan-900/20 px-3 py-1 rounded-md">{proc.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{proc.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9, 10, 11: BENEFITS & WHY US (Combined Layout) ================= */}
        <section className="py-24 grid lg:grid-cols-3 gap-8">
          
          {/* Section 9: Benefits */}
          <div className="p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/10 hover:border-cyan-500/20 transition-all">
            <h3 className="text-2xl font-serif text-white mb-8">Benefits of HVAC Scenting Solutions</h3>
            <ul className="space-y-4">
              {[
                "Uniform fragrance throughout large spaces",
                "Reduced need for multiple devices",
                "Professional and invisible scent delivery",
                "Scalable for growing facilities",
                "Cost-effective for long-term use",
                "Enhanced guest and customer experience"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <CheckBadgeIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/5 pt-4">HVAC scenting transforms large spaces into consistently pleasant environments without manual intervention.</p>
          </div>

          {/* Section 10: Why Choose Cool Max */}
          <div className="p-10 bg-cyan-900/10 rounded-[2.5rem] border border-cyan-500/20">
            <h3 className="text-2xl font-serif text-white mb-8">Why Choose Cool Max in UAE?</h3>
            <p className="text-slate-300 text-sm mb-8">Businesses across the UAE choose Cool Max for HVAC scenting because of our experience and service-oriented approach.</p>
            <ul className="space-y-4">
              {[
                "UAE-based technical support",
                "Professional-grade HVAC scent diffuser systems",
                "Expertise in large commercial installations",
                "Reliable maintenance and refill services",
                "Solutions tailored to real operational needs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-cyan-200 text-sm font-medium">
                  <BoltIcon className="w-4 h-4" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-cyan-300 font-bold border-t border-cyan-500/20 pt-4">We focus on delivering scent systems that work reliably every day, not just during installation.</p>
          </div>

          {/* Section 11: Is it Right? */}
          <div className="p-10 bg-white/[0.03] rounded-[2.5rem] border border-white/10 hover:border-cyan-500/20 transition-all">
            <h3 className="text-2xl font-serif text-white mb-8">Is HVAC Scenting Right for Your Space?</h3>
            <p className="text-slate-400 text-sm mb-6">HVAC scenting is ideal if you:</p>
            <ul className="space-y-4">
              {[
                "Manage a large commercial or public facility",
                "Want consistent fragrance across multiple zones",
                "Prefer a discreet, centralized scenting solution",
                "Require low-maintenance, automated operation",
                "Need scalable scenting for future expansion"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <ClipboardDocumentCheckIcon className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/5 pt-4">If your space already has centralized air-conditioning, HVAC scenting is often the most efficient option.</p>
          </div>

        </section>

        {/* ================= SECTION 12: CTA (Premium) ================= */}
        <section className="pt-20 pb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Let’s Design the Right <br/> <span className="italic text-cyan-400">HVAC Scenting Solution</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you manage a hotel, mall, airport, or corporate facility, Cool Max provides reliable HVAC scenting solutions in UAE designed to deliver consistent and professional fragrance coverage.
              Our team will assess your space, recommend the right scent machine for business, and provide ongoing support to ensure long-term performance.
            </p>
            
            <p className="text-cyan-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for professional HVAC scent diffuser solutions in UAE?
            </p>
            
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(6,182,212,0.6)]">
              <span className="relative z-10 flex items-center gap-2">Contact Cool Max Today <ArrowRightIcon className="w-5 h-5" /></span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}