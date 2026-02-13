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

// --- CORRECT IMAGE IMPORTS MAPPED TO PRODUCTS ---
import HeroImg from "../../asset/productimg/CMwebpimg/Mistbox X commercial Diffuser/7.webp"; 
import FeatureImg2 from "../../asset/productimg/CMwebpimg/AeroBlack Med diffuser/5.webp"; 

export default function CommercialDiffusersPage() {
  const whatsappNumber = "971522286401";

  // --- SEO Implementation ---
  useEffect(() => {
    document.title = "Commercial Aroma Diffusion Solutions in UAE | Cool Max";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Commercial aroma diffusion solutions in UAE for offices, hotels, & healthcare spaces. Explore professional scent diffusers and HVAC aroma systems by Cool Max.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden text-left">
      {/* Canonical URL */}
      <link rel="canonical" href="https://coolmaxscent.com/commercial-aroma-diffusion-solutions" />
      
      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full lg:w-[1000px] h-[1000px] bg-slate-100/50 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-full lg:w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-16">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-[80vh] flex flex-col lg:flex-row items-center pt-24 lg:pt-12 pb-12 gap-12">
          
          <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6 shadow-sm mt-16">
                <SparklesIcon className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-[10px] font-black uppercase tracking-[0.3em]">
                  Commercial Aroma Diffusion Solutions in UAE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl xl:text-6xl font-serif text-slate-900 tracking-tighter mb-6 leading-[0.95]">
                Commercial Aroma Diffusion Solutions in UAE
              </h1>
              
              <h2 className="text-xl md:text-2xl font-sans text-slate-600 mb-6 font-medium">
                Professional Scent Systems for Offices, Hotels & Commercial Spaces
              </h2>
              
              <p className="text-lg text-slate-500 font-light max-w-xl mb-8 leading-relaxed">
                Commercial environments demand more than basic air fresheners. They require controlled, consistent, and reliable fragrance systems that can operate throughout the day without disruption.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#collection" className="px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-blue-600 transition-all shadow-xl">
                  Explore Collection
                </a>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center gap-3"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" /> WhatsApp Us
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
                alt="Commercial Scent Diffuser Machine" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]" 
              />
            </motion.div>
          </div>
        </section>

        {/* ================= SECTION 1: OVERVIEW ================= */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              At Cool Max Scent, we provide professional commercial aroma diffusion solutions in UAE designed for offices, hotels, retail spaces, healthcare facilities, and large commercial environments. Our commercial scent diffuser machines are engineered to deliver even fragrance coverage, helping businesses maintain clean, fresh, and welcoming indoor spaces. From compact systems for offices to large-area solutions for malls and hospitality venues, Cool Max offers practical aroma diffusion solutions that work in real commercial conditions.
            </p>
          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS IT ================= */}
        <section className="py-16 bg-slate-50 rounded-[3rem] p-8 md:p-16 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tighter">What Is Commercial Aroma Diffusion?</h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                Commercial aroma diffusion is the use of professional-grade scent diffuser machines to distribute fragrance evenly across business environments. Unlike consumer air fresheners, commercial aroma diffusion systems are designed for continuous operation, controlled output, and large space coverage.
              </p>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                These systems use advanced atomization technology to release fragrance in fine particles, ensuring the scent is noticeable but never overpowering.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
               <AdjustmentsHorizontalIcon className="w-12 h-12 text-blue-600 mb-4" />
               <p className="text-slate-700 font-medium">At Cool Max, we balance performance, efficiency, and ease of maintenance.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: WHY IT MATTERS ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Why Commercial Aroma Diffusion Matters for Businesses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional First Impressions", desc: "A clean and pleasant-smelling space immediately communicates professionalism.", icon: <BuildingOfficeIcon /> },
              { title: "Consistent Indoor Experience", desc: "Systems provide steady fragrance output, unlike manual sprays that fade quickly.", icon: <ClockIcon /> },
              { title: "Supports Brand Identity", desc: "Use subtle fragrance to match your brand personality—calm, premium, or welcoming.", icon: <SparklesIcon /> },
              { title: "Improved Comfort", desc: "Balanced fragrance diffusion contributes to a comfortable environment for all occupants.", icon: <UserGroupIcon /> }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white transition-all shadow-sm">
                <div className="text-blue-600 w-10 h-10 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: OUR SOLUTIONS ================= */}
        <section className="py-16 border-t border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter">Our Commercial Aroma Diffusion Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Professional Commercial Scent Diffuser Machines", desc: "High-quality diffusers suitable for offices, clinics, retail stores, and gyms." },
              { title: "Scalable Diffusion Systems", desc: "Solutions scaled based on area size—from small offices to large commercial buildings." },
              { title: "HVAC-Compatible Aroma Diffusion", desc: "Integrated scent solutions that distribute fragrance through centralized AC systems." },
              { title: "Low-Noise, Energy-Efficient Operation", desc: "Quiet operation suitable for professional environments where noise control is important." }
            ].map((sol, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 border-b border-slate-100">
                <CheckCircleIcon className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{sol.title}</h3>
                  <p className="text-slate-500 font-light">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: SPACES WE SERVE ================= */}
        <section className="py-16">
           <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white">
              <h2 className="text-3xl md:text-5xl font-serif mb-12 tracking-tighter">Commercial Spaces We Serve</h2>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  { title: "Offices & Corporate", icon: <BuildingOfficeIcon />, desc: "Controlled fragrance diffusion that supports focus and well-being." },
                  { title: "Hotels & Hospitality", icon: <SparklesIcon />, desc: "Enhancing guest experience in lobbies, corridors, and common spaces." },
                  { title: "Retail & Malls", icon: <ShoppingBagIcon />, desc: "Encourage customers to spend more time in-store with pleasant ambient scent." },
                  { title: "Healthcare & Clinics", icon: <BeakerIcon />, desc: "Calming aroma solutions suitable for medical environments." },
                  { title: "Educational Institutions", icon: <AcademicCapIcon />, desc: "Maintain fresh indoor environments in classrooms and corridors." }
                ].map((space, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="text-blue-400 w-8 h-8">{space.icon}</div>
                    <h3 className="text-xl font-bold">{space.title}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{space.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* ================= SECTION 6: TECHNOLOGY ================= */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tighter">Technology Behind Our Commercial Aroma Diffusion Systems</h2>
              <ul className="space-y-4">
                {[
                  "Fine particle atomization for even scent spread",
                  "Adjustable intensity and scheduling",
                  "Durable components for long operating hours",
                  "Low oil consumption for cost efficiency",
                  "Compatible with standalone or HVAC installations"
                ].map((tech, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <BoltIcon className="w-5 h-5 text-blue-600" /> {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-slate-500 font-light italic">Whether you need a compact scent machine or a powerful large-area system, our solutions match real operational demands.</p>
            </div>
            <div className="order-1 lg:order-2 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={FeatureImg2} alt="Professional Scent Technology" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: COMPARISON TABLE ================= */}
        <section className="py-16">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">Difference Between Commercial Aroma Diffusion & Regular Air Fresheners</h2>
          <div className="overflow-x-auto rounded-[2rem] border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6">Feature</th>
                  <th className="p-6">Regular Air Freshener</th>
                  <th className="p-6">Commercial Aroma Diffusion</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  ["Coverage", "Small, inconsistent", "Even & scalable"],
                  ["Duration", "Short-term", "Continuous"],
                  ["Control", "Manual", "Automated"],
                  ["Suitability", "Personal use", "Business environments"],
                  ["Maintenance", "Frequent replacement", "Scheduled refills"]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100">
                    <td className="p-6 font-bold">{row[0]}</td>
                    <td className="p-6">{row[1]}</td>
                    <td className="p-6 font-medium text-blue-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-slate-500 italic">Commercial systems are designed for reliability, consistency, and professional use.</p>
        </section>

        {/* ================= SECTION 8: IMPLEMENTATION ================= */}
        <section className="py-16 border-t border-slate-100">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-12 tracking-tighter text-center">How We Implement Commercial Aroma Diffusion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "Step 1", title: "Space Assessment", desc: "We evaluate space size, layout, and usage patterns." },
              { step: "Step 2", title: "Recommendation", desc: "We suggest the most suitable diffuser based on requirements." },
              { step: "Step 3", title: "Configuration", desc: "Our team installs the system to ensure balanced diffusion." },
              { step: "Step 4", title: "Support", desc: "Ongoing service ensures uninterrupted performance." }
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white transition-all">
                <span className="text-blue-600 font-black text-xs uppercase block mb-2">{step.step}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 9: WHY CHOOSE US ================= */}
        <section className="py-16">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
            <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter">Why Choose Cool Max for Commercial Aroma Diffusion?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "UAE-based support and service",
                "Wide range of commercial scent machines",
                "Solutions for small offices to large facilities",
                "Easy-to-maintain systems",
                "Professional installation and after-sales support",
                "Proven experience across industries"
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: WHEN TO CONSIDER ================= */}
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-10 tracking-tighter">When Should You Consider Commercial Aroma Diffusion?</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Manage an office, hotel, or retail space",
              "Want a consistent indoor fragrance throughout the day",
              "Need a professional alternative to basic air fresheners",
              "Want scalable solutions for growing spaces",
              "Require low-maintenance, automated scent systems"
            ].map((item, i) => (
              <div key={i} className="px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 11: FINAL CTA ================= */}
        <section className="py-24 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-serif text-slate-900 mb-8 tracking-tighter leading-none">
              Let’s Improve Your Commercial Space <br /> <span className="italic text-blue-600 font-light">with Aroma Diffusion</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you operate an office, hotel, clinic, or retail facility, Cool Max offers reliable commercial aroma diffusion solutions in UAE designed for your needs.
            </p>
            
            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mb-8">Looking for a dependable commercial scent diffuser in UAE?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="w-full sm:w-auto px-10 py-6 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3">
                Contact Cool Max Today <ArrowRightIcon className="w-4 h-4"/>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-6 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[#128C7E] transition-all shadow-xl flex items-center justify-center gap-3"
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