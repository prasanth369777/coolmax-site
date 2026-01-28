import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  HomeIcon, 
  BriefcaseIcon, 
  Battery50Icon, 
  SparklesIcon, 
  CheckCircleIcon, 
  AdjustmentsHorizontalIcon, 
  UserIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

export default function CarPersonalScentingPage() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-24 relative">
          
          {/* Ambient Light Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">
                Compact & Mobile
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-8 leading-[1.1]">
              Car & Personal Space <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white italic">
                Scenting Solutions in UAE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto border-t border-white/10 pt-8 mt-8">
              Compact Fragrance Systems for Vehicles, Cabins & Small Spaces
            </p>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
              <div className="w-1 h-1.5 bg-white/50 rounded-full" />
            </div>
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
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-blue-400 first-letter:float-left first-letter:mr-4 first-letter:leading-none">
              Personal spaces may be small, but they are used frequently and noticed immediately. Whether it is a car, office cabin, meeting room, or personal workspace, the way a space smells directly affects comfort and mood. At Cool Max Scent, we provide reliable car and personal space scenting solutions in UAE designed to keep small environments fresh, clean, and pleasant throughout the day.
            </p>
            <div className="p-8 bg-gradient-to-r from-blue-900/10 to-transparent border-l-2 border-blue-500 rounded-r-2xl">
              <p className="italic text-slate-400">
                Our car aroma diffusers, home scent diffusers, and compact scent diffuser machines are built for controlled fragrance diffusion in confined spaces. These solutions are easy to use, low maintenance, and suitable for both individual users and businesses managing vehicles or personal workspaces.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? (Glass Card) ================= */}
        <section className="py-24">
          <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">What Is Car & Personal Space Scenting?</h2>
                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                  Car and personal space scenting refers to the use of compact scent air machines or aroma diffusers designed for small, enclosed environments. Unlike large commercial scent machines, these systems focus on precise fragrance control without overpowering the space.
                </p>
                
                <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-blue-300 font-bold mb-6 uppercase text-xs tracking-widest border-b border-white/5 pb-2">They are ideal for</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Cars and company vehicles", "Office cabins and desks", "Meeting rooms", "Small rooms and studios", "Personal workspaces"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <CheckCircleIcon className="w-5 h-5 text-blue-500/80" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-sm text-blue-200 font-medium">At Cool Max, our solutions ensure freshness without strong or artificial smells.</p>
              </motion.div>
              
              {/* Abstract Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] bg-gradient-to-tr from-blue-900/10 to-transparent rounded-[2.5rem] border border-white/5 flex items-center justify-center overflow-hidden"
              >
                 <div className="absolute inset-0 bg-blue-500/10 blur-[80px] animate-pulse" />
                 <div className="relative z-10 w-64 h-64 border border-blue-500/30 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                        <UserIcon className="w-24 h-24 text-blue-400/50" />
                    </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS (Bento Grid) ================= */}
        <section className="py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Car & Personal Space Scenting Matters</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Comfort in Everyday Spaces", desc: "People spend a significant amount of time in cars and personal workspaces. A clean and pleasant scent improves comfort during daily use." },
              { title: "Eliminates Unpleasant Odors", desc: "Compact scenting systems help neutralize odors caused by food, moisture, or long usage." },
              { title: "Creates a Positive Experience", desc: "Whether it is a scent machine for home or a car scent diffuser, subtle fragrance helps create a calm and welcoming atmosphere." },
              { title: "Professional Appearance", desc: "For businesses managing fleets or offices, well-maintained scenting reflects professionalism and care." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-white/[0.02] border border-white/5 hover:border-blue-500/40 rounded-[2rem] transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6 group-hover:w-24 transition-all duration-500" />
                <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS (Feature List) ================= */}
        <section className="py-24 border-t border-white/5">
          <div className="mb-20 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Our Car & Personal Space Scenting Solutions</h2>
            <p className="text-slate-400 text-lg">
              Cool Max provides a range of compact aroma diffusion systems suitable for different personal environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Car Aroma Diffusers", desc: "Our car aroma diffusers are designed to fit seamlessly into vehicle interiors. These systems provide controlled fragrance diffusion without spills or overpowering scents.", icon: <TruckIcon className="w-6 h-6"/> },
              { title: "Personal & Desk Aroma Diffusers", desc: "Compact home diffuser machines suitable for desks, cabins, and small rooms provide steady fragrance output while remaining quiet and discreet.", icon: <ComputerDesktopIcon className="w-6 h-6"/> },
              { title: "Battery & USB-Powered Scent Systems", desc: "Many of our scent diffuser machines operate on battery or USB power, making them ideal for flexible and portable use.", icon: <Battery50Icon className="w-6 h-6"/> },
              { title: "Low-Maintenance Operation", desc: "Designed for everyday use, these systems require minimal attention while delivering consistent freshness.", icon: <BoltIcon className="w-6 h-6"/> }
            ].map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {sol.icon}
                </div>
                <div className="w-14 h-14 bg-blue-900/20 text-blue-400 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-900/10">
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{sol.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED ================= */}
        <section className="py-24">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">Where Our Personal Space Scenting Solutions Are Used</h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { title: "Cars & Company Vehicles", desc: "Ideal for personal cars, taxis, and company fleets where cleanliness and comfort are important.", icon: <TruckIcon className="w-5 h-5"/> },
              { title: "Office Cabins & Workstations", desc: "Improve comfort and focus in individual workspaces using subtle fragrance diffusion.", icon: <ComputerDesktopIcon className="w-5 h-5"/> },
              { title: "Meeting Rooms", desc: "Maintain a fresh environment during long meetings without distraction.", icon: <BriefcaseIcon className="w-5 h-5"/> },
              { title: "Home Offices & Study Rooms", desc: "Support comfort and concentration with a balanced home fragrance system.", icon: <HomeIcon className="w-5 h-5"/> },
              { title: "Small Commercial Spaces", desc: "Used in reception desks, counters, and compact business environments.", icon: <SparklesIcon className="w-5 h-5"/> }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#0F111A] border border-white/5 rounded-3xl w-full md:w-[45%] lg:w-[30%] hover:bg-[#131620] hover:border-blue-500/20 transition-all group">
                <div className="flex items-center gap-3 mb-4 text-blue-500 group-hover:text-blue-400">
                  {item.icon}
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON TABLE (Modernized) ================= */}
        <section className="py-24">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Difference Between Car & Personal Space Scenting and Commercial Systems</h2>
          
          <div className="overflow-hidden bg-white/[0.02] rounded-[2rem] border border-white/10 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-500 bg-black/20">
                  <th className="p-6 font-medium">Feature</th>
                  <th className="p-6 font-bold text-blue-400">Personal Space Scenting</th>
                  <th className="p-6 font-medium">Commercial Scenting</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { feature: "Coverage", pers: "Small areas", comm: "Medium to large areas" },
                  { feature: "Power", pers: "Battery / USB", comm: "Electric / HVAC" },
                  { feature: "Installation", pers: "Simple", comm: "Professional" },
                  { feature: "Control", pers: "Manual or basic", comm: "Advanced" },
                  { feature: "Best Use", pers: "Personal & cabins", comm: "Business environments" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-serif text-slate-400">{row.feature}</td>
                    <td className="p-6 text-white font-medium bg-blue-500/5 border-x border-blue-500/10">{row.pers}</td>
                    <td className="p-6 text-slate-500">{row.comm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-10 text-slate-400 text-sm font-medium">
            Personal scenting systems are designed for convenience, portability, and subtle performance.
          </p>
        </section>

        {/* ================= SECTION 7 & 9: TECH & BENEFITS ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12">
          
          {/* Tech */}
          <div className="bg-gradient-to-br from-blue-900/10 to-indigo-900/10 rounded-[2.5rem] border border-blue-500/20 p-12">
            <h2 className="text-2xl font-serif text-white mb-8">Technology Behind Our Car & Personal Space Diffusers</h2>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">Cool Max uses reliable aroma scent diffuser technology designed for small spaces.</p>
            <ul className="space-y-4">
              {[
                "Controlled fragrance output", 
                "Low-noise operation", 
                "Safe and stable diffusion", 
                "Efficient oil usage", 
                "Compact and modern design"
              ].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-100 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <AdjustmentsHorizontalIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/10 pt-4">These features ensure the fragrance remains pleasant and balanced.</p>
          </div>

          {/* Benefits */}
          <div className="bg-white/[0.03] rounded-[2.5rem] border border-white/10 p-12">
            <h2 className="text-2xl font-serif text-white mb-8">Benefits of Car & Personal Space Scenting Solutions</h2>
            <ul className="space-y-4">
              {[
                "Fresh and pleasant environments", 
                "Eliminates everyday odors", 
                "Portable and easy to use", 
                "Low maintenance", 
                "Suitable for daily use", 
                "Cost-effective fragrance solution"
              ].map((ben, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-sm">
                  <CheckCircleIcon className="w-5 h-5 text-green-500" /> {ben}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-slate-500 italic border-t border-white/10 pt-4">These systems are ideal for people who value comfort in small spaces.</p>
          </div>
        </section>

        {/* ================= SECTION 8: PROCESS (Horizontal Steps) ================= */}
        <section className="py-24">
          <h2 className="text-4xl font-serif text-white mb-16 text-center">How We Help You Choose</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Space Identification", desc: "We identify whether the solution is for a car, desk, or small room." },
              { step: "02", title: "Usage Assessment", desc: "We recommend systems based on usage duration and personal preference." },
              { step: "03", title: "Product Recommendation", desc: "We suggest the most suitable scent machine for home or car diffuser." },
              { step: "04", title: "Support & Guidance", desc: "Our team provides guidance on setup, usage, and maintenance." }
            ].map((proc, idx) => (
              <div key={idx} className="relative p-8 border-t border-blue-500 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <h3 className="text-4xl font-black text-blue-500/20 mb-4 group-hover:text-blue-500/40 transition-colors">{proc.step}</h3>
                <h4 className="text-lg font-bold text-white mb-3">{proc.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 10 & 11: WHY CHOOSE & WHO ================= */}
        <section className="py-24">
          <div className="bg-gradient-to-r from-[#0B0F19] to-black rounded-[3rem] p-10 md:p-20 border border-white/10 text-center relative overflow-hidden">
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Why Choose Cool Max in UAE?</h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                {[
                  "UAE-based service and support", 
                  "High-quality home scent diffusers", 
                  "Easy-to-use and reliable products", 
                  "Practical solutions for real usage", 
                  "Trusted by businesses and individuals"
                ].map((reason, i) => (
                  <span key={i} className="px-6 py-3 rounded-full bg-blue-900/20 text-blue-200 text-sm border border-blue-500/20 flex items-center gap-2 backdrop-blur-sm">
                    <ShieldCheckIcon className="w-4 h-4"/> {reason}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 mb-16 text-lg font-light">We focus on delivering compact scenting solutions that are effective and simple to maintain.</p>

              <div className="border-t border-white/10 pt-16">
                <h3 className="text-2xl font-serif text-white mb-8">Who Should Use Car & Personal Space Scenting?</h3>
                <p className="text-slate-400 mb-10">Car and personal space scenting is ideal if you:</p>
                <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                   {[
                     "Spend long hours in your vehicle",
                     "Work in a private cabin or desk",
                     "Want a clean-smelling home office",
                     "Manage company vehicles",
                     "Prefer subtle and controlled fragrance"
                   ].map((item,i) => (
                     <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <ArrowRightIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {item}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: CTA ================= */}
        <section className="pt-10 pb-32 text-center border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">Let’s Create a Fresher <br/> <span className="italic text-blue-400">Personal Environment</span></h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              Whether you need a car aroma diffuser, a home scent system, or a compact scent diffuser machine for your personal space, Cool Max offers reliable solutions designed for everyday use.
              Our team will help you choose the right system and provide ongoing support to ensure consistent performance.
            </p>
            
            <p className="text-blue-300 font-bold mb-12 uppercase tracking-[0.2em] text-sm">
              Looking for car and personal space scenting solutions in UAE?
            </p>
            
            <a href="/contact" className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-[0_0_50px_-10px_rgba(37,99,235,0.6)] hover:scale-105 transition-all">
              Contact Cool Max Today <HandThumbUpIcon className="w-6 h-6" />
            </a>
          </motion.div>
        </section>

      </div>
    </div>
  );
}