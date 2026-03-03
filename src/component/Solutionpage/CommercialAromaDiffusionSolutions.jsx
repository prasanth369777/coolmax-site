import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { 
  SparklesIcon, 
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  BeakerIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// --- IMAGE ASSETS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/7.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp"; 

export default function CommercialDiffusersPage() {
  const whatsappNumber = "+971509282702";

  useEffect(() => {
    document.title = "Commercial Aroma Diffusion Solutions in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Commercial aroma diffusion solutions in UAE for offices, hotels, & healthcare spaces. Explore professional scent diffusers and HVAC aroma systems by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      {/* ================= SEO METADATA ================= */}
      
        <link rel="canonical" href="https://www.coolmaxscent.com/commercial-aroma-diffusion-solutions/" />
     
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center pt-32 lg:pt-0 gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Commercial Aroma Diffusion Solutions in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif text-slate-900 tracking-tighter mb-8 leading-[0.95]">
                Commercial <br />
                <span className="italic text-slate-400 font-light pr-2">Aroma Diffusion</span> <br />
                Solutions.
              </h1>
              
              <h2 className="text-xl md:text-2xl font-sans text-slate-600 mb-8 font-medium max-w-xl">
                Professional Scent Systems for Offices, Hotels & Commercial Spaces
              </h2>
              
              <p className="text-lg text-slate-500 font-light max-w-xl mb-12 leading-relaxed">
                Commercial environments demand more than basic air fresheners. They require controlled, consistent, and reliable fragrance systems that can operate throughout the day without disruption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#collection" className="px-10 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl text-center">
                  Explore Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative flex items-center justify-center order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[550px] p-6 lg:p-12"
            >
              <div className="absolute inset-0 bg-slate-100/50 rounded-[4rem] border border-slate-200 shadow-inner" />
              <img 
                src={HeroImg} 
                alt="Commercial Scent Diffuser Machine" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_40px_40px_rgba(0,0,0,0.15)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= OVERVIEW SECTION ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light text-justify">
              At Cool Max Scent, we provide professional commercial aroma diffusion solutions in UAE designed for offices, hotels, retail spaces, healthcare facilities, and large commercial environments. Our commercial scent diffuser machines are engineered to deliver even fragrance coverage, helping businesses maintain clean, fresh, and welcoming indoor spaces. From compact systems for offices to large-area solutions for malls and hospitality venues, Cool Max offers practical aroma diffusion solutions that work in real commercial conditions.
            </p>
          </div>
        </section>

        {/* ================= DEFINITION SECTION ================= */}
        <section className="py-20 bg-slate-50 rounded-[4rem] p-8 md:p-20 mb-24 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter">What Is Commercial <br/>Aroma Diffusion?</h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed text-justify">
                <p>
                  Commercial aroma diffusion is the use of professional-grade scent diffuser machines to distribute fragrance evenly across business environments. Unlike consumer air fresheners, commercial aroma diffusion systems are designed for continuous operation, controlled output, and large space coverage.
                </p>
                <p>
                  These systems use advanced atomization technology to release fragrance in fine particles, ensuring the scent is noticeable but never overpowering.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm inline-flex items-center gap-6">
                <AdjustmentsHorizontalIcon className="w-12 h-12 text-blue-600 shrink-0" />
                <p className="text-slate-900 font-bold text-lg">At Cool Max, we balance performance, efficiency, and ease of maintenance.</p>
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={FeatureImg2} alt="Scent Technology" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* ================= BENEFITS GRID ================= */}
        <section className="py-24">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 tracking-tighter text-center lg:text-left">Why Commercial Aroma <br/><span className="text-blue-600 italic">Diffusion Matters</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professional First Impressions", desc: "A clean and pleasant-smelling space immediately communicates professionalism.", icon: <BuildingOfficeIcon /> },
              { title: "Consistent Indoor Experience", desc: "Systems provide steady fragrance output, unlike manual sprays that fade quickly.", icon: <ClockIcon /> },
              { title: "Supports Brand Identity", desc: "Use subtle fragrance to match your brand personality—calm, premium, or welcoming.", icon: <SparklesIcon /> },
              { title: "Improved Comfort", desc: "Balanced fragrance diffusion contributes to a comfortable environment for all occupants.", icon: <UserGroupIcon /> }
            ].map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all group">
                <div className="text-blue-600 w-12 h-12 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SOLUTIONS SECTION ================= */}
        <section className="py-24 border-t border-slate-100">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 tracking-tighter sticky top-32">Our Commercial <br/>Aroma Diffusion <br/><span className="text-slate-400 font-light italic">Solutions</span></h2>
            </div>
            <div className="lg:w-2/3 grid gap-6">
              {[
                { title: "Professional Commercial Scent Diffuser Machines", desc: "High-quality diffusers suitable for offices, clinics, retail stores, and gyms." },
                { title: "Scalable Diffusion Systems", desc: "Solutions scaled based on area size—from small offices to large commercial buildings." },
                { title: "HVAC-Compatible Aroma Diffusion", desc: "Integrated scent solutions that distribute fragrance through centralized AC systems." },
                { title: "Low-Noise, Energy-Efficient Operation", desc: "Quiet operation suitable for professional environments where noise control is important." }
              ].map((sol, idx) => (
                <div key={idx} className="flex gap-8 items-start p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all">
                  <CheckCircleIcon className="w-10 h-10 text-blue-600 shrink-0" />
                  <div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3">{sol.title}</h3>
                    <p className="text-slate-500 font-light text-lg">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BLACK CARD: SPACES WE SERVE ================= */}
        <section className="py-24">
          <div className="bg-slate-900 rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-4xl md:text-6xl font-serif mb-20 tracking-tighter text-center">Commercial Spaces <br/>We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
              {[
                { title: "Offices & Corporate", icon: <BuildingOfficeIcon />, desc: "Controlled fragrance diffusion that supports focus and well-being." },
                { title: "Hotels & Hospitality", icon: <SparklesIcon />, desc: "Enhancing guest experience in lobbies, corridors, and common spaces." },
                { title: "Retail & Malls", icon: <ShoppingBagIcon />, desc: "Encourage customers to spend more time in-store with pleasant ambient scent." },
                { title: "Healthcare & Clinics", icon: <BeakerIcon />, desc: "Calming aroma solutions suitable for medical environments." },
                { title: "Educational Institutions", icon: <AcademicCapIcon />, desc: "Maintain fresh indoor environments in classrooms and corridors." }
              ].map((space, idx) => (
                <div key={idx} className="space-y-6 text-center md:text-left">
                  <div className="text-blue-400 w-10 h-10 mx-auto md:mx-0">{space.icon}</div>
                  <h3 className="text-2xl font-serif">{space.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{space.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY SECTION ================= */}
        <section className="py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter text-left">The Technology <br/>Behind The Performance</h2>
              <ul className="space-y-6">
                {[
                  "Fine particle atomization for even scent spread",
                  "Adjustable intensity and scheduling",
                  "Durable components for long operating hours",
                  "Low oil consumption for cost efficiency",
                  "Compatible with standalone or HVAC installations"
                ].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 text-lg font-light">
                    <BoltIcon className="w-6 h-6 text-blue-600 shrink-0" /> {tech}
                  </li>
                ))}
              </ul>
              <p className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 italic text-blue-900 text-left">Whether you need a compact scent machine or a powerful large-area system, our solutions match real operational demands.</p>
            </div>
            <div className="bg-slate-100 rounded-[4rem] p-4 lg:p-12">
               <img src={FeatureImg2} alt="Scent Technology Detail" className="w-full h-auto rounded-[3rem] shadow-xl" />
            </div>
          </div>
        </section>

        {/* ================= TABLE: COMPARISON ================= */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 tracking-tighter">Performance Comparison</h2>
            <p className="text-slate-400 uppercase tracking-widest text-xs font-bold mt-4">Commercial Scenting vs Regular Air Fresheners</p>
          </div>
          <div className="overflow-x-auto rounded-[3rem] border border-slate-200 shadow-2xl">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                  <th className="p-10">System Feature</th>
                  <th className="p-10">Regular Air Freshener</th>
                  <th className="p-10">Commercial Aroma Diffusion</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 text-lg">
                {[
                  ["Coverage", "Small, inconsistent", "Even & scalable"],
                  ["Duration", "Short-term", "Continuous"],
                  ["Control", "Manual", "Automated / App Control"],
                  ["Suitability", "Personal use", "Business environments"],
                  ["Maintenance", "Frequent replacement", "Scheduled professional refills"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    <td className="p-10 font-bold text-slate-900">{row[0]}</td>
                    <td className="p-10 font-light">{row[1]}</td>
                    <td className="p-10 font-medium text-blue-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= STEPS: IMPLEMENTATION ================= */}
        <section id="collection" className="py-24 scroll-mt-24">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-20 tracking-tighter text-center">Our Implementation Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Space Assessment", desc: "We evaluate space size, layout, and usage patterns to determine optimal placement." },
              { step: "02", title: "Recommendation", desc: "We suggest the most suitable diffuser system based on your specific requirements." },
              { step: "03", title: "Configuration", desc: "Our team installs and programs the system to ensure perfectly balanced diffusion." },
              { step: "04", title: "Support", desc: "Ongoing service and scheduled refills ensure consistent uninterrupted performance." }
            ].map((step, idx) => (
              <div key={idx} className="relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:-translate-y-2 transition-all">
                <span className="text-6xl font-serif text-slate-100 absolute top-6 right-10">{step.step}</span>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHY COOL MAX ================= */}
        <section className="py-24 bg-slate-50 rounded-[5rem] px-8 md:px-20 mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-16 tracking-tighter">Why Choose Cool Max?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "UAE-based support and local service teams",
              "Wide range of commercial scent machines",
              "Solutions for small offices to large facilities",
              "Easy-to-maintain automated systems",
              "Professional installation & technical support",
              "Proven performance across UAE industries"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-5 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600 shrink-0" />
                <span className="text-slate-800 font-medium text-lg leading-tight">{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-5xl mx-auto px-4">
            <h2 className="text-5xl md:text-8xl font-serif text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Improve Your Space <br /> <span className="italic text-blue-600 font-light">with Aroma Diffusion</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you operate an office, hotel, clinic, or retail facility, Cool Max offers reliable commercial aroma diffusion solutions in UAE designed for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-sans">
              <a href="/contact/" className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-3">
                Contact Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-full hover:bg-[#128C7E] transition-all shadow-2xl flex items-center justify-center gap-3"
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