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
  ClockIcon, 
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function WashroomHygienePage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-24 relative">
          
          {/* Ambient Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
              <SparklesIcon className="w-4 h-4 text-teal-400" />
              <span className="text-teal-200 text-xs font-bold tracking-widest uppercase">
                Clean & Fresh
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Washroom Hygiene <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-white italic">
                Solutions in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Professional Odor Control & Air Freshening for Commercial Washrooms
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
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-teal-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Washrooms are one of the most frequently used and closely judged areas in any facility. A poorly maintained washroom can negatively impact user perception, hygiene confidence, and brand image. At Cool Max Scent, we provide professional washroom hygiene solutions in UAE designed to maintain clean, fresh, and odor-free washrooms in commercial and institutional environments.
            </p>
            <div className="p-8 bg-gradient-to-r from-teal-900/10 to-transparent border-l-2 border-teal-500 rounded-r-2xl">
              <p className="italic text-teal-100">
                Our washroom hygiene systems combine advanced scent diffuser machines, professional air freshening technology, and reliable service support to ensure consistent freshness throughout the day. From offices and schools to hospitals, malls, and restaurants, Cool Max helps businesses maintain washroom environments that meet modern hygiene expectations.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHY CRITICAL? (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Why Washroom Hygiene Is Critical for Businesses</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Washrooms directly influence how people perceive cleanliness and professionalism. Even well-designed facilities can leave a negative impression if odors are not properly managed.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "First Impressions Matter", desc: "A fresh-smelling washroom immediately reassures users about hygiene standards. Using professional commercial scent diffusers ensures washrooms remain pleasant even during peak usage." },
                    { title: "Supports Health & Comfort", desc: "Effective washroom hygiene helps reduce unpleasant odors and supports a cleaner indoor environment, contributing to overall comfort." },
                    { title: "Reflects Brand Responsibility", desc: "For offices, hotels, malls, and public facilities, washroom hygiene reflects how much attention a business gives to user experience and care." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-teal-950/20 rounded-2xl border border-teal-500/10 hover:bg-teal-950/30 transition-colors">
                      <h3 className="text-lg font-bold text-teal-200 mb-2 font-serif">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual Abstract */}
              <div className="relative h-[500px] bg-gradient-to-tr from-teal-900/10 to-transparent rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-teal-500/10 blur-[80px]" />
                 <ShieldCheckIcon className="w-48 h-48 text-teal-500/20 relative z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHAT ARE SOLUTIONS? (Feature List) ================= */}
        <section className="py-24 bg-white/[0.015]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">What Are Washroom Hygiene Solutions?</h2>
            <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-lg">
              Washroom hygiene solutions involve the use of professional air scent machines, aroma scent diffusers, and odor control systems designed specifically for high-traffic restroom environments. Unlike basic sprays or consumer air fresheners, these systems are:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {["Automated", "Long-lasting", "Consistent", "Designed for commercial usage"].map((tag, i) => (
                <div key={i} className="py-5 bg-teal-900/20 border border-teal-500/20 rounded-xl text-teal-200 font-bold text-sm uppercase tracking-wider shadow-lg shadow-teal-900/10">
                  {tag}
                </div>
              ))}
            </div>
            
            <p className="text-slate-500 text-sm italic">
              At Cool Max, our washroom hygiene solutions are tailored to different washroom sizes, usage levels, and environments to ensure reliable performance.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS (Feature Cards) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Washroom Hygiene Solutions at Cool Max</h2>
            <p className="text-slate-400 text-lg">
              Cool Max offers a complete range of washroom hygiene and air freshening solutions suitable for commercial and institutional settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Professional Washroom Air Freshening Systems", desc: "We supply commercial scent diffuser machines designed to neutralize unpleasant odors and release controlled fragrance at set intervals, ensuring continuous freshness." },
              { title: "Wall-Mounted & Compact Diffusers", desc: "Our home diffuser machines adapted for washroom use are discreet, space-saving, and ideal for cubicles, corridors, and common restroom areas." },
              { title: "Battery-Operated & Low-Maintenance Systems", desc: "Many of our washroom solutions use battery-powered scent air machines, reducing installation complexity and maintenance effort." },
              { title: "Consistent Fragrance Control", desc: "Our systems allow controlled scent release, preventing overpowering smells while maintaining freshness throughout operating hours." }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-teal-500/40 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <SparklesIcon className="w-24 h-24 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-teal-100 mb-4 font-serif">{sol.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED (Bento Grid) ================= */}
        <section className="py-24">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 text-center">Where Our Washroom Hygiene Solutions Are Used</h2>
          <p className="text-slate-400 text-center mb-16 text-lg">Our washroom hygiene solutions are trusted across a wide range of facilities in the UAE.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <BuildingOfficeIcon className="w-6 h-6"/>, title: "Offices & Corporate Buildings", desc: "Maintain professional washrooms that reflect workplace hygiene standards and employee comfort." },
              { icon: <BeakerIcon className="w-6 h-6"/>, title: "Hospitals & Clinics", desc: "Support cleanliness and comfort with subtle fragrance solutions suitable for sensitive healthcare environments." },
              { icon: <AcademicCapIcon className="w-6 h-6"/>, title: "Schools & Educational Institutions", desc: "Ensure fresh and hygienic washrooms for students, staff, and visitors." },
              { icon: <ShoppingBagIcon className="w-6 h-6"/>, title: "Shopping Malls & Retail Stores", desc: "Handle high foot traffic with reliable odor control systems that operate throughout the day." },
              { icon: <FaceSmileIcon className="w-6 h-6"/>, title: "Restaurants & Food Chains", desc: "Neutralize washroom odors effectively while maintaining a clean and welcoming environment." },
              { icon: <SparklesIcon className="w-6 h-6"/>, title: "Hotels & Hospitality", desc: "Complement hotel air freshener machines and hotel scent diffusers with dedicated washroom hygiene solutions." },
            ].map((space, i) => (
              <div key={i} className="p-8 bg-[#0B0F19] border border-white/5 rounded-3xl hover:border-teal-500/30 transition-all group">
                <div className="w-12 h-12 bg-teal-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {React.cloneElement(space.icon, { className: "w-6 h-6 text-teal-400 group-hover:text-white" })}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{space.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON TABLE (Modernized) ================= */}
        <section className="py-24">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-16 text-center">Difference Between Washroom Hygiene Systems & Regular Air Fresheners</h2>
          
          <div className="overflow-hidden bg-white/[0.02] rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500 bg-black/20">
                  <th className="p-6 font-medium">Feature</th>
                  <th className="p-6 font-medium">Regular Air Freshener</th>
                  <th className="p-6 font-bold text-teal-400">Professional Washroom Hygiene</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { feature: "Coverage", reg: "Limited", pro: "Designed for washrooms" },
                  { feature: "Duration", reg: "Short-term", pro: "Continuous" },
                  { feature: "Control", reg: "Manual", pro: "Automated" },
                  { feature: "Maintenance", reg: "Frequent replacement", pro: "Scheduled service" },
                  { feature: "Suitability", reg: "Home use", pro: "Commercial environments" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-serif text-slate-400">{row.feature}</td>
                    <td className="p-6 text-slate-500">{row.reg}</td>
                    <td className="p-6 text-white font-medium bg-teal-500/5 border-l border-teal-500/10">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-10 text-slate-400 text-sm font-medium">
            Professional washroom hygiene systems are essential for facilities that require consistent odor control without manual intervention.
          </p>
        </section>

        {/* ================= SECTION 7 & 9: TECH & BENEFITS (Combined Grid) ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* Tech */}
          <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/10 rounded-[2.5rem] border border-teal-500/20 p-12">
            <h2 className="text-2xl font-serif text-white mb-8">Technology Behind Our Washroom Hygiene Systems</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">Cool Max uses reliable aroma scent diffuser and air scent machine technologies specifically suited for washroom environments.</p>
            <ul className="space-y-4">
              {[
                "Controlled fragrance release", 
                "Low-noise operation", 
                "Efficient oil consumption", 
                "Adjustable timing and intensity", 
                "Durable components for high-traffic use"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-teal-100 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                    <WrenchScrewdriverIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/10 pt-4">These systems are designed to work reliably even in demanding environments with frequent usage.</p>
          </div>

          {/* Benefits */}
          <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-2xl font-serif text-white mb-8">Benefits of Professional Washroom Hygiene Solutions</h2>
            <ul className="space-y-4">
              {[
                "Continuous odor control", 
                "Improved user comfort and confidence", 
                "Reduced manual effort", 
                "Suitable for high-traffic environments", 
                "Cost-effective long-term operation", 
                "Professional and discreet appearance"
              ].map((ben, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" /> {ben}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/10 pt-4">A well-maintained washroom supports overall facility hygiene and user satisfaction.</p>
          </div>
        </section>

        {/* ================= SECTION 8: IMPLEMENTATION (Step Cards) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How We Implement Washroom Hygiene Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Site Assessment", desc: "We assess washroom size, ventilation, foot traffic, and usage patterns." },
              { step: "02", title: "Solution Recommendation", desc: "We recommend the most suitable commercial scent diffuser or washroom air freshening system." },
              { step: "03", title: "Installation & Setup", desc: "Our team installs and configures the system for optimal fragrance distribution." },
              { step: "04", title: "Maintenance & Refill Support", desc: "We provide ongoing refill and service support to ensure uninterrupted freshness." }
            ].map((proc, idx) => (
              <div key={idx} className="group relative p-8 border-t-2 border-teal-500 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <span className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-teal-500/10 transition-colors">{proc.step}</span>
                <h3 className="text-xl font-bold text-white mb-4 mt-2 font-serif">{proc.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 10 & 11: WHY CHOOSE & WHEN UPGRADE ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Choose Cool Max for Washroom Hygiene Solutions in UAE?</h2>
              <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-lg">Businesses across the UAE trust Cool Max for our dependable washroom hygiene solutions and service-driven approach. We focus on providing washroom hygiene solutions that are practical, consistent, and suitable for real-world usage.</p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "UAE-based service and support", 
                  "Professional-grade commercial scent machines", 
                  "Scalable solutions", 
                  "Easy-to-maintain systems", 
                  "Reliable refill programs"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-2.5 rounded-full bg-teal-900/20 text-teal-200 text-sm border border-teal-500/20 backdrop-blur-sm">
                    {reason}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-16">
                <h3 className="text-2xl font-serif text-white mb-8">When Should You Upgrade Your Washroom Hygiene System?</h3>
                <p className="text-slate-400 mb-10">You should consider professional washroom hygiene solutions if:</p>
                <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                   {[
                     "Washrooms experience frequent odor issues",
                     "Foot traffic is high throughout the day",
                     "Manual air fresheners are ineffective",
                     "You want automated, consistent freshness",
                     "Hygiene perception is important for your brand"
                   ].map((item,i) => (
                     <div key={i} className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 flex-shrink-0">
                          <ClockIcon className="w-5 h-5" />
                        </div>
                        {item}
                     </div>
                   ))}
                </div>
                <p className="text-slate-500 mt-12 text-sm italic">Professional washroom hygiene systems offer a reliable solution for maintaining freshness without constant attention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: CTA (Premium) ================= */}
        <section className="pt-20 pb-32 text-center border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Let’s Improve Washroom <br/> <span className="italic text-teal-400">Hygiene in Your Facility</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you manage an office, hospital, school, restaurant, or commercial facility, Cool Max offers reliable washroom hygiene solutions in UAE designed to meet your needs. Our team will help you choose the right scent diffuser machine, install it professionally, and provide ongoing support to ensure consistent performance.
            </p>
            
            <p className="text-teal-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for dependable washroom hygiene and air freshening solutions in UAE?
            </p>
            
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(20,184,166,0.6)]">
              <span className="relative z-10 flex items-center gap-2">Contact Cool Max Today <ArrowRightIcon className="w-5 h-5" /></span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}