import React from "react";
import { motion } from "framer-motion";
import { 
  WrenchScrewdriverIcon, 
  ArrowPathIcon, 
  ClipboardDocumentCheckIcon, 
  ClockIcon, 
  CheckBadgeIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BeakerIcon
} from "@heroicons/react/24/outline";

export default function MaintenancePage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-emerald-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[20%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-24 relative">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <WrenchScrewdriverIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-200 text-xs font-bold tracking-widest uppercase">
                Reliable Ongoing Care
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Maintenance & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-white italic">
                Refill Support Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Reliable Ongoing Care for Scent & Hygiene Systems in UAE
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
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-emerald-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Installing a scent system is only the first step. To maintain consistent fragrance quality, system performance, and hygiene standards, regular maintenance and timely refilling are essential. At Cool Max Scent, we provide professional maintenance and refill support services in UAE to ensure your scent diffuser machines, commercial scent machines, and hygiene systems operate reliably every day.
            </p>
            <div className="p-8 bg-gradient-to-r from-emerald-900/10 to-transparent border-l-2 border-emerald-500 rounded-r-2xl">
              <p className="italic text-emerald-100">
                Our maintenance and refill programs are designed for businesses that value consistency, efficiency, and peace of mind. Whether you use a home scent diffuser, a commercial scent diffuser, or an HVAC scent diffuser, Cool Max ensures your system continues to deliver the right fragrance at the right intensity—without disruption.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHY IT MATTERS (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Why Maintenance & Refill Support Matters</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Scent systems are often overlooked once installed, but without proper care, performance can decline over time.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Consistent Fragrance Experience", desc: "Regular maintenance ensures your aroma scent diffuser delivers the same balanced fragrance day after day." },
                    { title: "Avoids System Downtime", desc: "Scheduled servicing prevents issues such as clogging, uneven diffusion, or system failure." },
                    { title: "Cost Efficiency", desc: "Proper upkeep extends equipment lifespan and reduces the need for premature replacements." },
                    { title: "Professional Standards", desc: "For hotels, offices, malls, and healthcare facilities, reliable scenting reflects professionalism and operational discipline." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-emerald-950/20 rounded-2xl border border-emerald-500/10 hover:bg-emerald-950/30 transition-colors">
                      <h3 className="text-lg font-bold text-emerald-200 mb-2 font-serif">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Abstract */}
              <div className="relative h-[500px] bg-gradient-to-tr from-emerald-900/10 to-transparent rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-emerald-500/10 blur-[80px]" />
                 <ArrowPathIcon className="w-48 h-48 text-emerald-500/20 relative z-10 animate-spin-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT IS IT? (Feature List) ================= */}
        <section className="py-24 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 text-center">What Is Maintenance & Refill Support?</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Maintenance and refill support involves ongoing service care for scent and hygiene systems. At Cool Max, we offer structured maintenance programs designed to suit different environments and usage levels.
                </p>
                <div className="p-6 bg-[#0B0F19] rounded-xl border-l-4 border-emerald-500">
                  <p className="text-emerald-100 font-medium italic">
                    We ensure your systems perform at their best, always.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Replacing fragrance oils or refills",
                  "Cleaning and inspecting diffuser components",
                  "Checking system settings and performance",
                  "Adjusting fragrance intensity as needed",
                  "Preventive maintenance to avoid breakdowns"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
                    <CheckBadgeIcon className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SERVICES (Bento Grid) ================= */}
        <section className="py-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Maintenance & Refill Support Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Scheduled Fragrance Refills", desc: "We provide timely refilling of fragrance oils for commercial scent machines, hotel scent machines, and home fragrance systems, ensuring uninterrupted operation.", icon: <BeakerIcon className="w-6 h-6"/> },
              { title: "System Inspection & Cleaning", desc: "Our technicians inspect and clean diffuser components to maintain optimal diffusion and prevent residue buildup.", icon: <ClipboardDocumentCheckIcon className="w-6 h-6"/> },
              { title: "Performance Monitoring", desc: "We check fragrance output, coverage consistency, and system settings to ensure even distribution across the space.", icon: <ClockIcon className="w-6 h-6"/> },
              { title: "Intensity Adjustment", desc: "Fragrance intensity can be adjusted based on seasonal needs, foot traffic, or space usage.", icon: <ArrowPathIcon className="w-6 h-6"/> },
              { title: "Replacement of Consumables", desc: "Where required, we replace consumable parts to maintain system efficiency and reliability.", icon: <Cog6ToothIcon className="w-6 h-6"/> }
            ].map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 hover:border-emerald-500/30 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.03] hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-emerald-900/20 text-emerald-400 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-900/10">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-serif">{srv.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SYSTEMS COVERED (Interactive Tags) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Systems Covered Under Our Maintenance Support</h2>
            <p className="text-slate-400 text-lg">Our maintenance and refill support covers a wide range of scenting solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Commercial Scent Diffusers", desc: "Regular servicing ensures commercial scent diffusers operate efficiently in offices, retail spaces, and public facilities." },
              { title: "HVAC Scent Diffuser Systems", desc: "We maintain HVAC scent diffuser systems to ensure smooth integration with air-conditioning systems and consistent fragrance distribution." },
              { title: "Hotel Scent Machines", desc: "For hospitality environments, our support ensures hotel scent diffusers maintain a consistent guest experience." },
              { title: "Home & Personal Space Diffusers", desc: "We also support home diffuser machines and scent machines for home, ensuring reliable performance." },
              { title: "Washroom Hygiene Systems", desc: "Our services include maintenance of washroom air freshening and hygiene systems in high-traffic areas." },
            ].map((sys, i) => (
              <div key={i} className="p-8 bg-[#0B0F19] border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all group">
                <h3 className="text-lg font-bold text-white mb-3 font-serif group-hover:text-emerald-300 transition-colors">{sys.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: PROCESS (Step Cards) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How Our Maintenance Process Works</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Service Scheduling", desc: "We plan maintenance visits based on usage levels and client requirements." },
              { step: "02", title: "On-Site Inspection", desc: "Our technicians inspect the scent air machine, check oil levels, and review system performance." },
              { step: "03", title: "Refill & Cleaning", desc: "Fragrance refills are replaced, and internal components are cleaned as required." },
              { step: "04", title: "System Optimization", desc: "Settings are adjusted to maintain balanced fragrance intensity." },
              { step: "05", title: "Reporting & Recommendations", desc: "We provide feedback and suggestions to improve performance or efficiency." }
            ].map((proc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 p-8 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-emerald-500/30 transition-colors group items-start">
                <span className="text-5xl font-black text-white/5 group-hover:text-emerald-500/10 transition-colors">{proc.step}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">{proc.title}</h3>
                  <p className="text-base text-slate-400 leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7 & 9: BENEFITS & WHY CHOOSE US ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* Benefits */}
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/10 rounded-[2.5rem] border border-emerald-500/20 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">Benefits of Cool Max Maintenance & Refill Support</h2>
            <ul className="space-y-5">
              {[
                "Consistent fragrance quality",
                "Reduced system downtime",
                "Longer equipment lifespan",
                "Predictable operating costs",
                "Professional service handling",
                "Peace of mind for facility managers"
              ].map((ben, i) => (
                <li key={i} className="flex items-center gap-4 text-emerald-100 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <CheckBadgeIcon className="w-4 h-4 text-white" />
                  </div>
                  {ben}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs text-slate-400 italic border-t border-emerald-500/20 pt-6">Regular maintenance ensures your scent system remains a reliable part of your environment, not a concern.</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/[0.02] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-3xl font-serif text-white mb-8">Why Choose Cool Max in UAE?</h2>
            <ul className="space-y-5">
              {[
                "UAE-based service team",
                "Experience across multiple industries",
                "Support for all scent machine types",
                "Reliable refill scheduling",
                "Transparent service process"
              ].map((reason, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300">
                  <ShieldCheckIcon className="w-5 h-5 text-indigo-400" /> {reason}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xs text-indigo-300 font-bold border-t border-white/10 pt-6 uppercase tracking-widest">We focus on long-term partnerships, not one-time installations.</p>
          </div>
        </section>

        {/* ================= SECTION 8: PLANS (Feature Cards) ================= */}
        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 text-center">Maintenance Plans for Different Business Needs</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto text-lg">Our flexible plans ensure businesses pay only for what they need.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-10 border border-white/10 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10"><CalendarDaysIcon className="w-6 h-6 text-white"/></div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">Monthly Service Plans</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Ideal for high-traffic environments such as malls, hotels, and hospitals.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10"><CalendarDaysIcon className="w-6 h-6 text-white"/></div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">Quarterly Service Plans</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Suitable for offices, clinics, and medium-use facilities.</p>
            </div>
            <div className="p-10 border border-emerald-500/30 rounded-[2rem] bg-emerald-900/10 hover:bg-emerald-900/20 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-[40px] rounded-full" />
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20"><WrenchScrewdriverIcon className="w-6 h-6 text-emerald-400"/></div>
              <h3 className="text-xl font-bold text-white mb-3 font-serif">Customized Schedules</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">We tailor service frequency based on space size, usage, and system type.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10 & 11: WHEN TO CONSIDER & BRANDING ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-white mb-8">When Should You Consider Professional Maintenance Support?</h2>
              <p className="text-slate-400 mb-8 text-lg">You should consider maintenance and refill support if:</p>
              <ul className="space-y-4">
                {[
                  "Fragrance intensity has reduced",
                  "Systems are operating inconsistently",
                  "Manual refills are becoming inconvenient",
                  "Hygiene standards are critical",
                  "You want predictable service and cost control"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <ArrowRightIcon className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-500 italic border-l-2 border-white/10 pl-4">Professional support ensures your scent system continues to perform as intended.</p>
            </div>
            <div className="flex flex-col justify-center p-12 bg-gradient-to-tr from-[#0B0F19] to-black rounded-[2.5rem] border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
              <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Supporting Your Brand Through Consistent Scenting</h2>
              <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
                A scent system is part of your environment identity. With proper maintenance, your home fragrance system, commercial scent machine, or HVAC scent diffuser continues to support comfort, hygiene, and brand perception.
              </p>
              <p className="text-emerald-400 font-bold text-lg relative z-10">
                Cool Max ensures your scenting investment delivers long-term value.
              </p>
            </div>
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
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Let’s Keep Your Scent Systems <br/> <span className="italic text-emerald-400">Running Smoothly</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you manage a hotel, office, hospital, school, or commercial facility, Cool Max provides dependable maintenance and refill support services in UAE to keep your scent and hygiene systems operating at their best.
              Our team handles the service—so you can focus on your business.
            </p>
            <p className="text-emerald-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for reliable maintenance and refill support in UAE?
            </p>
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]">
              <span className="relative z-10 flex items-center gap-2">Contact Cool Max Today <ArrowRightIcon className="w-5 h-5" /></span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}