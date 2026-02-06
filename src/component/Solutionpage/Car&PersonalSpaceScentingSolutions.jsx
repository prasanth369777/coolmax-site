import React from "react";
import { motion } from "framer-motion";
import { 
  TruckIcon, 
  ComputerDesktopIcon, 
  Battery50Icon, 
  SparklesIcon, 
  CheckCircleIcon, 
  UserIcon,
 
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  FaceSmileIcon,
  MapPinIcon,
 
  BriefcaseIcon
} from "@heroicons/react/24/outline";

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/NovaCar Diffuser/6.webp"; 
import FeatureImg1 from "../../asset/productimg/CMwebpimg/VentoCar/4.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/coolmax DriveMist Car Aroma Diffuser/13.webp"; 

export default function CarPersonalScentingPage() {
  const whatsappNumber = "971522286401";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[75vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 gap-12 text-left">
          
          <div className="lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Compact & Mobile
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-7xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Car & <br />
                <span className="italic text-slate-400 font-light pr-2">Personal Space</span> <br />
                Scenting Solutions in UAE.
              </h1>
              
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                Compact Fragrance Systems for Vehicles, Cabins & Small Spaces
              </h2>

              <div className="flex flex-wrap gap-4">
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

          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[500px] p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] shadow-inner border border-slate-50" />
              <img 
                src={HeroImg} 
                alt="NovaCar Compact Scenting Solution" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-700" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: INTRO ================= */}
        <section className="py-16 border-t border-slate-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 space-y-8 text-left"
          >
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:leading-none text-justify">
              Personal spaces may be small, but they are used frequently and noticed immediately. Whether it is a car, office cabin, meeting room, or personal workspace, the way a space smells directly affects comfort and mood. At Cool Max Scent, we provide reliable car and personal space scenting solutions in UAE designed to keep small environments fresh, clean, and pleasant throughout the day.
            </p>
            <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
              <p className="italic text-slate-500 font-light">
                Our car aroma diffusers, home scent diffusers, and compact scent diffuser machines are built for controlled fragrance diffusion in confined spaces. These solutions are easy to use, low maintenance, and suitable for both individual users and businesses managing vehicles or personal workspaces.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT? ================= */}
        <section className="py-16" id="explore">
          <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-8 md:p-16 overflow-hidden relative shadow-sm text-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tighter">What Is Car & Personal Space Scenting?</h2>
                <p className="text-slate-500 mb-6 leading-relaxed text-lg font-light">
                  Car and personal space scenting refers to the use of compact scent air machines or aroma diffusers designed for small, enclosed environments. Unlike large commercial scent machines, these systems focus on precise fragrance control without overpowering the space.
                </p>
                <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <h4 className="text-blue-600 font-black mb-4 uppercase text-[10px] tracking-widest border-b border-slate-50 pb-2">They are ideal for</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Cars and company vehicles", "Office cabins and desks", "Meeting rooms", "Small rooms and studios", "Personal workspaces"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-bold">
                        <CheckCircleIcon className="w-4 h-4 text-blue-500" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-blue-600 font-medium font-serif italic text-xl">At Cool Max, our solutions ensure freshness without strong or artificial smells.</p>
              </motion.div>
              <div className="relative h-[450px] rounded-[2rem] border border-white overflow-hidden shadow-2xl group">
                 <img src={FeatureImg1} alt="Compact portable fragrance system for office desk" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center gap-4">
                       <div className="p-2 bg-blue-600 rounded-lg"><UserIcon className="w-5 h-5 text-white" /></div>
                       <p className="text-slate-900 font-serif text-base">Designed for your personal comfort zone.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 hidden lg:block">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[650px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
                    <img src={FeatureImg2} alt="Aroma diffuser machine in a luxury car interior" className="w-full h-full object-cover" />
                </motion.div>
            </div>
            <div className="lg:col-span-7">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 tracking-tighter leading-none">Why Car & Personal Space Scenting Matters</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Comfort in Everyday Spaces", desc: "People spend a significant amount of time in cars and personal workspaces. A clean and pleasant scent improves comfort during daily use." },
                      { title: "Eliminates Unpleasant Odors", desc: "Compact scenting systems help neutralize odors caused by food, moisture, or long usage." },
                      { title: "Creates a Positive Experience", desc: "Whether it is a scent machine for home or a car scent diffuser, subtle fragrance helps create a calm and welcoming atmosphere." },
                      { title: "Professional Appearance", desc: "For businesses managing fleets or offices, well-maintained scenting reflects professionalism and care." }
                    ].map((item, idx) => (
                    <motion.div key={idx} className="group p-6 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-[2rem] transition-all duration-300">
                        <div className="w-8 h-1 bg-blue-600 rounded-full mb-4 group-hover:w-full transition-all duration-500" />
                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-light">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-16 border-t border-slate-100">
          <div className="mb-12 text-center max-w-4xl mx-auto">
            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4">Our Car & Personal Space Scenting Solutions</h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">Cool Max provides a range of compact aroma diffusion systems suitable for different personal environments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Car Aroma Diffusers", desc: "Our car aroma diffusers are designed to fit seamlessly into vehicle interiors. These systems provide controlled fragrance diffusion without spills or overpowering scents.", icon: <TruckIcon /> },
              { title: "Personal & Desk Aroma Diffusers", desc: "Compact home diffuser machines suitable for desks, cabins, and small rooms provide steady fragrance output while remaining quiet and discreet.", icon: <ComputerDesktopIcon /> },
              { title: "Battery & USB-Powered Scent Systems", desc: "Many of our scent diffuser machines operate on battery or USB power, making them ideal for flexible and portable use.", icon: <Battery50Icon /> },
              { title: "Low-Maintenance Operation", desc: "Designed for everyday use, these systems require minimal attention while delivering consistent freshness.", icon: <BoltIcon /> }
            ].map((sol, idx) => (
              <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 transition-all text-left shadow-sm">
                <div className="w-12 h-12 bg-white text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                   {React.cloneElement(sol.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-base font-black uppercase text-slate-900 mb-4 leading-snug">{sol.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: WHERE USED ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Where Our Personal Space Scenting Solutions Are Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Cars & Company Vehicles", desc: "Ideal for personal cars, taxis, and company fleets where cleanliness and comfort are important.", icon: <TruckIcon /> },
              { title: "Office Cabins & Workstations", desc: "Improve comfort and focus in individual workspaces using subtle fragrance diffusion.", icon: <BriefcaseIcon /> },
              { title: "Meeting Rooms", desc: "Maintain a fresh environment during long meetings without distraction.", icon: <UserIcon /> },
              { title: "Home Offices & Study Rooms", desc: "Support comfort and concentration with a balanced home fragrance system.", icon: <ComputerDesktopIcon /> },
              { title: "Small Commercial Spaces", desc: "Used in reception desks, counters, and compact business environments.", icon: <MapPinIcon /> }
            ].map((space, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all group shadow-sm">
                <div className="w-12 h-12 bg-white text-blue-600 border border-slate-100 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all">
                   {React.cloneElement(space.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">{space.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light text-center">{space.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: COMPARISON ================= */}
        <section className="py-16 overflow-x-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 text-center tracking-tighter leading-none">Difference Between Car & Personal Space Scenting and Commercial Systems</h2>
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-xl max-w-5xl mx-auto min-w-[600px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.2em] text-slate-400 bg-slate-50 font-black">
                  <th className="p-6">Feature</th>
                  <th className="p-6 text-blue-600">Personal Space Scenting</th>
                  <th className="p-6">Commercial Scenting</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-sm">
                {[
                  { f: "Coverage", p: "Small areas", c: "Medium to large areas" },
                  { f: "Power", p: "Battery / USB", c: "Electric / HVAC" },
                  { f: "Installation", p: "Simple", c: "Professional" },
                  { f: "Control", p: "Manual or basic", c: "Advanced" },
                  { f: "Best Use", p: "Personal & cabins", c: "Business environments" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-serif text-slate-400 text-base">{row.f}</td>
                    <td className="p-6 text-blue-600 font-bold">{row.p}</td>
                    <td className="p-6 text-slate-500">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-slate-400 mt-6 italic">Personal scenting systems are designed for convenience, portability, and subtle performance.</p>
        </section>

        {/* ================= SECTION 7: TECHNOLOGY ================= */}
        <section className="py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-left relative overflow-hidden shadow-2xl">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tighter">Technology Behind Our Car & Personal Space Diffusers</h2>
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  {[
                    "Controlled fragrance output",
                    "Low-noise operation",
                    "Safe and stable diffusion",
                    "Efficient oil usage",
                    "Compact and modern design"
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-white text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm italic border-l border-slate-700 pl-6">
                  These features ensure the fragrance remains pleasant and balanced for small spaces.
                </p>
             </div>
          </div>
        </section>

        {/* ================= SECTION 8: SELECTION STEPS ================= */}
        <section className="py-16 text-left">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How We Help You Choose the Right Personal Scenting Solution</h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { step: "Step 1", title: "Space Identification", desc: "We identify whether the solution is for a car, desk, or small room." },
              { step: "Step 2", title: "Usage Assessment", desc: "We recommend systems based on usage duration and personal preference." },
              { step: "Step 3", title: "Product Recommendation", desc: "We suggest the most suitable scent machine for home or car diffuser." },
              { step: "Step 4", title: "Support & Guidance", desc: "Our team provides guidance on setup, usage, and maintenance." }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-8 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 transition-all group"
              >
                <span className="text-4xl md:text-6xl font-serif text-slate-200 group-hover:text-blue-100 transition-colors duration-500">{proc.step}</span>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-slate-900 mb-1">{proc.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-light">{proc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9/11: BENEFITS & WHO SHOULD USE ================= */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm">
               <h2 className="text-3xl font-serif text-slate-900 mb-6">Benefits of Car & Personal Scenting</h2>
               <ul className="space-y-4">
                  {["Fresh and pleasant environments", "Eliminates everyday odors", "Portable and easy to use", "Low maintenance", "Suitable for daily use", "Cost-effective fragrance solution"].map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <FaceSmileIcon className="w-5 h-5 text-blue-600" /> {b}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="p-10 bg-blue-600 rounded-[3rem] text-white">
               <h2 className="text-3xl font-serif mb-6">Who Should Use This Scenting?</h2>
               <p className="text-blue-50 text-sm mb-6">Car and personal space scenting is ideal if you:</p>
               <ul className="space-y-4">
                  {["Spend long hours in your vehicle", "Work in a private cabin or desk", "Want a clean-smelling home office", "Manage company vehicles", "Prefer subtle and controlled fragrance"].map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircleIcon className="w-5 h-5 text-white" /> {s}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: WHY COOL MAX ================= */}
        <section className="py-16">
           <div className="bg-slate-50 rounded-[3rem] border border-slate-100 p-10 md:p-16 text-left">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">Why Choose Cool Max for Personal Scenting?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "UAE-based service and support",
                  "High-quality home scent diffusers and car diffusers",
                  "Easy-to-use and reliable products",
                  "Practical solutions for real usage",
                  "Trusted by businesses and individuals"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                    <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-xs font-bold uppercase">{point}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-500 italic">We focus on delivering compact scenting solutions that are effective and simple to maintain.</p>
           </div>
        </section>

        {/* ================= SECTION 12: FINAL CTA ================= */}
        <section className="py-24 text-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Let’s Create a <br /> <span className="italic text-blue-600 font-light">Fresher Personal Environment</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
              Whether you need a car aroma diffuser, a home scent system, or a compact scent diffuser machine for your personal space, Cool Max offers reliable solutions designed for everyday use. Our team will help you choose the right system and provide ongoing support to ensure consistent performance.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for car and personal space scenting solutions in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-2"
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