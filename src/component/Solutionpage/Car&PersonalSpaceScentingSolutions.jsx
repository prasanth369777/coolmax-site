import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  
  Battery50Icon, 
  SparklesIcon, 
  CheckCircleIcon, 
  AdjustmentsHorizontalIcon, 
  UserIcon,
  HandThumbUpIcon,
  ShieldCheckIcon,
 
  BoltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/6.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/VentoCar/4.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/13.webp"; 


export default function CarPersonalScentingPage() {
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
                  Compact & Mobile
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-7xl xl:text-9xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Car & <br />
                <span className="italic text-slate-400 font-light pr-2">Personal Space</span> <br />
                Scenting.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 font-light max-w-xl mb-10 leading-relaxed font-sans">
                Professional Fragrance Distribution for Large Commercial Spaces
              </p>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] mb-10 max-w-xl shadow-sm text-left">
                <p className="text-base text-slate-600 leading-relaxed italic font-sans">
                  Cool Max Scent provides reliable car and personal space scenting solutions in UAE designed to keep small environments fresh, clean, and pleasant throughout the day.
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
                alt="NovaCar Compact Scenting" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_50px_50px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-slate-900/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO ================= */}
        <section className="py-24 border-t border-slate-100 font-sans">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 space-y-10 text-left"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Personal spaces may be small, but they are used frequently and noticed immediately. Whether it is a car, office cabin, meeting room, or personal workspace, the way a space smells directly affects comfort and mood. At Cool Max Scent, we provide reliable car and personal space scenting solutions in UAE designed to keep small environments fresh, clean, and pleasant throughout the day.
            </p>
            <div className="p-8 bg-slate-50 border-l-4 border-blue-600 rounded-r-3xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Our car aroma diffusers, home scent diffusers, and compact scent diffuser machines are built for controlled fragrance diffusion in confined spaces. These solutions are easy to use, low maintenance, and suitable for both individual users and businesses managing vehicles or personal workspaces.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-24" id="explore">
          <div className="bg-slate-50 border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden relative shadow-sm text-left font-sans">
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 tracking-tighter">What Is Car & Personal Space Scenting?</h2>
                <p className="text-slate-500 mb-8 leading-relaxed text-lg font-light">
                  Car and personal space scenting refers to the use of compact scent air machines or aroma diffusers designed for small, enclosed environments. Unlike large commercial scent machines, these systems focus on precise fragrance control without overpowering the space.
                </p>
                
                <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                  <h4 className="text-blue-600 font-black mb-6 uppercase text-[10px] tracking-widest border-b border-slate-50 pb-2">They are ideal for</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Cars and company vehicles", "Office cabins and desks", "Meeting rooms", "Small rooms and studios", "Personal workspaces"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                        <CheckCircleIcon className="w-5 h-5 text-blue-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-8 text-blue-600 font-medium font-serif italic text-2xl">At Cool Max, our solutions ensure freshness without strong or artificial smells.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-[3rem] border border-white overflow-hidden shadow-2xl group"
              >
                 <img src={FeatureImg1} alt="VentoCar Diffuser" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4">
                       <div className="p-3 bg-blue-600 rounded-xl">
                         <UserIcon className="w-6 h-6 text-white" />
                       </div>
                       <p className="text-slate-900 font-serif text-lg">Designed for your personal comfort zone.</p>
                    </div>
                 </div>
              </motion.div>
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
                    <img src={FeatureImg2} alt="DriveScent Portable" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="lg:col-span-7">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tighter">Why Scent <br/> Matters</h2>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">
                        People spend a significant amount of time in cars and personal workspaces. A clean and pleasant scent improves comfort during daily use.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { title: "Everyday Comfort", desc: "A clean and pleasant scent improves comfort during daily use in cars and cabins." },
                      { title: "Odors Neutralized", desc: "Compact scenting systems help neutralize odors caused by food, moisture, or long usage." },
                      { title: "Positive Experience", desc: "Whether it is a scent machine for home or car, subtle fragrance helps create a calm atmosphere." },
                      { title: "Professionalism", desc: "For businesses managing fleets or offices, well-maintained scenting reflects professionalism and care." }
                    ].map((item, idx) => (
                    <motion.div 
                        key={idx}
                        className="group p-8 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-[2.5rem] transition-all duration-300"
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
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Compact Technology</h2>
            <h3 className="text-4xl md:text-7xl font-serif text-slate-900 tracking-tighter leading-none">Our Solutions</h3>
            <p className="text-lg text-slate-500 mt-8 font-light max-w-2xl mx-auto">
              Cool Max provides a range of compact aroma diffusion systems suitable for different personal environments across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Car Aroma Diffusers", desc: "Designed to fit seamlessly into vehicle interiors. Controlled fragrance diffusion without spills or overpowering scents.", icon: <TruckIcon /> },
              { title: "Desk Aroma Diffusers", desc: "Compact home machines suitable for desks and cabins provide steady output while remaining discreet.", icon: <ComputerDesktopIcon /> },
              { title: "Flexible Power", desc: "Many systems operate on battery or USB power, making them ideal for flexible and portable use.", icon: <Battery50Icon /> },
              { title: "Low Maintenance", desc: "Designed for everyday use, these systems require minimal attention while delivering consistent freshness.", icon: <BoltIcon /> }
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

        {/* ================= SECTION 6: COMPARISON TABLE ================= */}
        <section className="py-24 font-sans">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 text-center tracking-tighter leading-none">Technology Comparison</h2>
          
          <div className="overflow-hidden bg-white border border-slate-100 rounded-[3rem] shadow-2xl max-w-5xl mx-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-8">Feature</th>
                  <th className="p-8 text-blue-600">Personal Space Scenting</th>
                  <th className="p-8">Commercial Scenting</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  { feature: "Coverage", pers: "Small areas", comm: "Medium to large areas" },
                  { feature: "Power", pers: "Battery / USB", comm: "Electric / HVAC" },
                  { feature: "Installation", pers: "Simple", comm: "Professional" },
                  { feature: "Control", pers: "Manual or basic", comm: "Advanced" },
                  { feature: "Best Use", pers: "Personal & cabins", comm: "Business environments" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-8 font-serif text-slate-400 text-lg">{row.feature}</td>
                    <td className="p-8 text-blue-600 font-bold">{row.pers}</td>
                    <td className="p-8 text-slate-500">{row.comm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= SECTION 7: TECH & BENEFITS ================= */}
        <section className="py-24 grid lg:grid-cols-2 gap-12 text-left font-sans">
          <div className="bg-slate-900 rounded-[4rem] border border-slate-800 p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
            <h2 className="text-3xl font-serif text-white mb-8 leading-none relative z-10">Scent Technology</h2>
            <p className="text-slate-400 mb-8 text-lg font-light relative z-10">Cool Max uses reliable aroma scent diffuser technology designed for small spaces.</p>
            <ul className="space-y-4 relative z-10">
              {["Controlled fragrance output", "Low-noise operation", "Safe and stable diffusion", "Efficient oil usage", "Compact and modern design"].map((tech, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-200 text-sm font-bold uppercase tracking-wider">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/5">
                    <AdjustmentsHorizontalIcon className="w-4 h-4" />
                  </div>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[4rem] border border-slate-100 p-16 flex flex-col justify-center shadow-sm">
            <h2 className="text-3xl font-serif text-slate-900 mb-8 leading-none">Benefits</h2>
            <ul className="space-y-4">
              {["Fresh and pleasant environments", "Eliminates everyday odors", "Portable and easy to use", "Low maintenance", "Suitable for daily use", "Cost-effective fragrance solution"].map((ben, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 text-sm font-bold uppercase tracking-wider">
                  <CheckCircleIcon className="w-6 h-6 text-blue-500" /> {ben}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= SECTION 8: PROCESS ================= */}
        <section className="py-24 text-left font-sans">
          <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-20 tracking-tighter text-center">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Identification", desc: "We identify whether the solution is for a car, desk, or small room." },
              { step: "02", title: "Assessment", desc: "We recommend systems based on usage duration and personal preference." },
              { step: "03", title: "Product", desc: "We suggest the most suitable scent machine for home or car diffuser." },
              { step: "04", title: "Support", desc: "Our team provides guidance on setup, usage, and maintenance." }
            ].map((proc, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 transition-all group">
                <span className="text-5xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors duration-500 mb-6 block">{proc.step}</span>
                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{proc.title}</h4>
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
                  "High-quality diffusers", 
                  "Reliable products", 
                  "Practical solutions", 
                  "Trusted across UAE"
                ].map((reason, i) => (
                  <div key={i} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-3 backdrop-blur-md">
                    <ShieldCheckIcon className="w-5 h-5 text-blue-400"/> {reason}
                  </div>
                ))}
              </div>
              <p className="text-2xl font-serif italic text-white/50 max-w-2xl mx-auto">"We focus on delivering compact scenting solutions that are effective and simple to maintain."</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: CTA ================= */}
        <section className="py-32 text-center relative font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-none">
              Let’s Create a <br /> <span className="italic text-blue-600 font-light">Fresher Environment</span>
            </h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you need a car aroma diffuser, a home scent system, or a compact scent diffuser machine for your personal space, Cool Max offers reliable solutions designed for everyday use.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="/contact" className="w-full sm:w-auto px-16 py-8 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-3xl overflow-hidden transition-all hover:bg-blue-600 hover:shadow-2xl flex items-center justify-center gap-3">
                Contact Cool Max Today <HandThumbUpIcon className="w-6 h-6" />
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